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
import PopupOrderSumary from '../app/detail/component/popup/OrderSumary';
import CheckOutHeader from '../app/detail/component/popup/CheckOutHeader';
import Btn from '@/components/Btn';
import { createTransaction } from '@/api/transaction';

export default function CodePayment(props: any) {
  const { ticket, orders, method, discount, point, transaction } = props;
  const toast = useToast();
  const currentTime = new Date();
  const deadline = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
  const handleTransaction = async () => {
    const token = localStorage.getItem('token');
    const id: any = localStorage.getItem('id');

    try {
      const response = await createTransaction(
        transaction,
        id,
        method,
        deadline,
        token,
      );
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
        throw new Error('Failed transaction');
      }
    } catch (error) {
      toast({
        title: `Failed transaction`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const inputDate = new Date(deadline);

  inputDate.setHours(inputDate.getHours() + 6);

  const options: any = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  const formattedDate = inputDate.toLocaleString('en-US', options);
  return (
    <ModalContent>
      <ModalHeader className="text-blueDark border-b-2 border-blueDark">
        <CheckOutHeader onClick={() => props.set(2)} />
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <HStack my={4}>
          <Text className="font-semibold " fontSize={'md'}>
            Payment deadline : {` `}
          </Text>
          <Text className=" text-redPrimary">{formattedDate}</Text>
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
