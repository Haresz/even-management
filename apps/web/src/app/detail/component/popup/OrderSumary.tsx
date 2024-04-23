import { Heading, Divider } from '@chakra-ui/react';
import React from 'react';
import ItemOrderSumary from './ItemOrderSumary';

export default function PopupOrderSumary(props: any) {
  const { orders, ticket } = props;

  const subtotal = ticket?.reduce(
    (
      total: number,
      item: {
        price: any;
        ticketType: string | number;
      },
    ) => {
      if (orders[item.ticketType] !== undefined) {
        return total + orders[item.ticketType] * item.price; // Harga per tiket (contoh: IDR 180,000)
      }
      return total;
    },
    0,
  );

  const total = subtotal;

  return (
    <>
      <Heading mt={4} mb={8} as="h3" size="sm">
        Order summary
      </Heading>
      {ticket?.map((item: any) => {
        if (
          orders[item.ticketType] !== undefined &&
          orders[item.ticketType] !== 0
        ) {
          return (
            <ItemOrderSumary
              key={item.id}
              title={'Ticket ' + item.ticketType}
              qty={orders[item.ticketType]}
              price={'IDR' + item.price + ',000'}
            />
          );
        }
        return null;
      })}
      <Divider mt={4} mb={8} h={'1px'} bg={'black'} />
      <ItemOrderSumary title="Subtotal" price={`IDR ${subtotal},000`} />
      <ItemOrderSumary title="Total" price={`IDR ${total},000`} />
    </>
  );
}
