'use client';
import {
  ModalContent,
  ModalHeader,
  HStack,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import PopupOrderSumary from './OrderSumary';
import CheckOutHeader from './CheckOutHeader';
import Btn from '@/components/Btn';
import { createTransaction } from '@/api/transaction';

export default function CodePayment(props: any) {
  const { ticket, orders, method, discount, point, transaction } = props;
  const toast = useToast();
  const handleTransaction = async () => {
    console.log(transaction);
    try {
      const response = await createTransaction(transaction, 1);
      console.log(response);
      if (response.status === 201) {
        toast({
          title: `transaction successfully`,
          status: 'success',
          position: 'top',
          isClosable: true,
        });
        props.onClose();
        window.location.reload();
      } else {
        throw new Error('Failed to add blog');
      }
    } catch (error) {
      toast({
        title: `Failed to add blog`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };
  return (
    <ModalContent>
      <ModalHeader className="text-blueDark border-b-2 border-blueDark">
        <CheckOutHeader onClick={() => props.set(2)} />
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <HStack my={4}>
          <Text className="font-semibold " fontSize={'md'}>
            Payment deadline :{' '}
          </Text>
          <Text className=" text-redPrimary">12 April 2024 18.00 AM</Text>
        </HStack>
        <HStack my={4}>
          <Text className="font-semibold " fontSize={'md'}>
            Payment method :{' '}
          </Text>
          <Text className=" text-redPrimary">{method}</Text>
        </HStack>
        <VStack alignItems={'start'} my={4}>
          <Text className="font-medium my-4" fontSize={'md'}>
            Number virtual acount:
          </Text>
          <HStack
            w="100%"
            p={4}
            justifyContent={'space-between'}
            className=" border-2 border-blueDark rounded-md text-blueDark"
          >
            <Text className="font-medium" fontSize={'xl'}>
              80777082225384814
            </Text>
          </HStack>
        </VStack>
        <PopupOrderSumary
          discount={discount}
          point={point}
          ticket={ticket}
          orders={orders}
        />
      </ModalBody>
      <ModalFooter>
        <Btn title="CONFIRM" onClick={handleTransaction} />
      </ModalFooter>
    </ModalContent>
  );
}
