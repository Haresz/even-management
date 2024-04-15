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
        <Button
          backgroundColor={'#FF204E'}
          color={'white'}
          mt={4}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          onClick={() => props.set(2)}
          variant="solid"
        >
          <Text fontSize="md">CHEKOUT</Text>
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
