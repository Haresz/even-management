import { Heading, HStack, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import ItemOrderSumary from './ItemOrderSumary';

export default function PopupOrderSumary() {
  return (
    <>
      <Heading mt={4} mb={8} as="h3" size="sm">
        Order summary
      </Heading>
      <ItemOrderSumary title="Ticket VVIP" price="IDR 180,000" />
      <Divider mt={4} mb={8} h={'1px'} bg={'black'} />
      <ItemOrderSumary title="Subtotal" price="IDR 180,000" />
      <ItemOrderSumary title="Total" price="IDR 180,000" />
    </>
  );
}
