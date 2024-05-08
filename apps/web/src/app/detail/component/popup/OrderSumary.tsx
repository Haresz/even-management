import { Heading, Divider } from '@chakra-ui/react';
import React from 'react';
import ItemOrderSumary from './ItemOrderSumary';

export default function PopupOrderSumary(props: any) {
  const { orders, ticket, discount, point } = props;

  const subtotal = ticket?.reduce(
    (
      total: number,
      item: {
        price: any;
        ticketType: string | number;
      },
    ) => {
      let itemPrice = item.price;

      if (discount !== undefined) {
        itemPrice -= (item.price * parseInt(discount)) / 100;
      }

      if (point !== undefined) {
        itemPrice -= point / 1000;
      }

      if (orders ? orders[item.ticketType] !== undefined : null) {
        return total + orders[item.ticketType] * itemPrice;
      }

      return total;
    },
    0,
  );

  const total = subtotal;

  const rupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  return (
    <>
      <Heading mt={4} mb={8} as="h3" size="sm">
        Order summary
      </Heading>
      {ticket?.map((item: any, index: number) => {
        if (
          orders
            ? orders[item.ticketType] !== undefined
            : null && orders
              ? orders[item.ticketType] !== 0
              : null
        ) {
          return (
            <ItemOrderSumary
              key={item.id}
              title={'Ticket ' + item.ticketType}
              qty={orders[item.ticketType]}
              price={rupiah(item.price)}
            />
          );
        }
        return null;
      })}
      <Divider mt={4} mb={8} h={'1px'} bg={'black'} />
      {discount != undefined ? (
        <ItemOrderSumary title="Discount" price={discount} />
      ) : null}
      {point !== undefined ? (
        <ItemOrderSumary title="Point" price={point} />
      ) : null}
      <ItemOrderSumary title="Subtotal" price={rupiah(subtotal)} />
      <ItemOrderSumary title="Total" price={rupiah(total)} />
    </>
  );
}
