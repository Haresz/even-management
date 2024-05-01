import React from 'react';
import CategoryTicket from '../CategoryTicket';
import {
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import PopupOrderSumary from './OrderSumary';
import UseDisCount from './UseDisCount';
import Btn from '@/components/Btn';

export default function OrderContent(props: any) {
  const {
    event,
    ticket,
    orders,
    setOrders,
    discount,
    point,
    setDiscount,
    setPoint,
  } = props;

  return (
    <ModalContent>
      <ModalHeader className="text-blueDark border-b-2 border-blueDark">
        <Heading as="h3" mr={8} size="md">
          {event?.eventName}
        </Heading>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <PopupOrderSumary
          discount={discount}
          point={point}
          ticket={ticket}
          orders={orders}
        />
        {ticket?.map((item: any) => {
          return (
            <CategoryTicket
              key={item.id}
              id={item.id}
              qtyTicket={item.AvailableTicket}
              title={item.ticketType}
              order={orders}
              setOrder={setOrders}
            />
          );
        })}
        <UseDisCount
          setDiscount={setDiscount}
          setPoint={setPoint}
          discount={discount}
          point={point}
        />
      </ModalBody>
      <ModalFooter>
        <Btn title="CHECKOUT" onClick={() => props.set(2)} />
      </ModalFooter>
    </ModalContent>
  );
}
