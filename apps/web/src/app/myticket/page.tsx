'use client';
import { Box, Heading, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import { getAllTransactionUser } from '@/api/transaction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function page() {
  const [transaction, setTransaction] = useState<any>([]);

  const getTransaction = async () => {
    const id = sessionStorage.getItem('id');

    try {
      const response = await getAllTransactionUser(parseInt(id as string));
      setTransaction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

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
                eventId={item?.ticket[0].ticket.event.id}
                eventDate={item?.ticket[0].ticket.event.date}
                eventLocation={item?.ticket[0].ticket.event.location}
                eventTitle={item?.ticket[0].ticket.event.eventName}
                ticket={item?.ticket}
                method={item?.method}
                deadline={item?.deadline}
              />
            );
          })}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
