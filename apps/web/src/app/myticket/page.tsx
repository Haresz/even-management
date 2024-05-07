'use client';
import { Box, Heading, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import { getAllTransactionUser } from '@/api/transaction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function page() {
  const [transaction, setTransaction] = useState<any>([]);
  const [event, setEvent] = useState<any>();

  const getTransaction = async () => {
    try {
      const response = await getAllTransactionUser(1);
      setTransaction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  useEffect(() => {
    if (transaction.length > 0 && transaction[0].ticket) {
      setEvent(transaction[0].ticket[0].ticket.event);
    }
  }, [transaction]);

  return (
    <>
      <Navbar />
      <Box className=" min-h-screen">
        <Heading mt={32} mb={16} px={{ base: 4, sm: 16 }} as="h4" size="lg">
          My Ticket
        </Heading>
        <Box mx={16}>
          {transaction.map((item: any) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                transactionDate={item.createAt}
                status={item.status}
                eventDate={event?.date}
                eventLocation={event?.location}
                eventTitle={event?.eventName}
                ticket={item?.ticket}
                method={item?.method}
                deadline={item?.deadline}
              />
            );
          })}
          <Card status="pending" />
          <Card status="success" />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
