import { getDetailTrasaction } from '@/api/transaction';
import ItemOrderSumary from '@/app/detail/component/popup/ItemOrderSumary';
import { Heading, Divider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function PopupOrderSumary(props: any) {
  const [transaction, setTransaction] = useState<any>();
  const { id, discount, point } = props;

  const getTransactionDetail = async () => {
    try {
      const response = await getDetailTrasaction(id);
      console.log(response.data.data);
      setTransaction(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTransactionDetail();
  }, []);

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
      {transaction?.ticket?.map((item: any, index: number) => {
        console.log(item, 'INI ITEM');
        if (
          item
            ? item.ticket.ticketType !== undefined
            : null && item
              ? item.ticket.ticketType !== 0
              : null
        ) {
          return (
            <ItemOrderSumary
              key={item.id}
              title={'Ticket ' + item.ticket.ticketType}
              qty={item.count}
              price={rupiah(item.ticket.price)}
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
      <ItemOrderSumary title="Subtotal" price={rupiah(transaction?.total)} />
      <ItemOrderSumary title="Total" price={rupiah(transaction?.total)} />
    </>
  );
}
