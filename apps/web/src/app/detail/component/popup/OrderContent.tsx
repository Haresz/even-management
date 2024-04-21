import React from 'react';
import CategoryTicket from '../CategoryTicket';
import {
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import PopupOrderSumary from './OrderSumary';
import UseDisCount from './UseDisCount';
import Btn from '@/components/Btn';

export default function OrderContent(props: any) {
  return (
    <ModalContent>
      <ModalHeader className="text-blueDark border-b-2 border-blueDark">
        <Heading as="h3" mr={8} size="md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Heading>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <PopupOrderSumary />
        <>
          <CategoryTicket />
          <CategoryTicket />
          <CategoryTicket />
        </>
        <UseDisCount />
      </ModalBody>
      <ModalFooter>
        <Btn title="CHECKOUT" onClick={() => props.set(2)} />
      </ModalFooter>
    </ModalContent>
  );
}
