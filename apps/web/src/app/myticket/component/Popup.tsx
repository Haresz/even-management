import Btn from '@/components/Btn';
import {
  HStack,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import PopupOrderSumary from './OrderSumary';

export default function Popup(props: any) {
  const inputDate = new Date(props.deadline);

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
    <Modal size={'xl'} isCentered isOpen={props.isOpen} onClose={props.onClose}>
      {props.overlay}
      <ModalContent>
        <ModalHeader className="text-blueDark border-b-2 border-blueDark">
          Transaction Pending
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack my={4}>
            <Text className="font-semibold " fontSize={'md'}>
              Payment deadline :{' '}
            </Text>
            <Text className=" text-redPrimary">{formattedDate}</Text>
          </HStack>
          <HStack my={4}>
            <Text className="font-semibold " fontSize={'md'}>
              Payment method :{' '}
            </Text>
            <Text className=" text-redPrimary">{props.method}</Text>
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
          <PopupOrderSumary id={props.id} />
        </ModalBody>
        <ModalFooter>
          <Btn title="CONFIRM" onClick={props.onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
