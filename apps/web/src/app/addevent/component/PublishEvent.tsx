'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Detail from '@/app/detail/component/Detail';
import TicketItem from './TicketItem';
import PromotionForm from './PromotionForm';
import { getDetailevent, publishEvent } from '@/api/event';

export default function PublishEvent() {
  const searchParams = useSearchParams();
  const toast = useToast();
  const router = useRouter();
  const id: any = searchParams.get('id');
  const [event, setEvent] = useState<any>();

  const fetchEventDetails = async () => {
    try {
      const response = await getDetailevent(id);
      setEvent(response.data.data);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const handlePublish = async () => {
    try {
      const token: any = sessionStorage.getItem('token');
      await publishEvent(id, token);
      toast({
        title: 'Success to publish event',
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.push('/home');
    } catch (error) {
      toast({
        title: 'Failed to publish event',
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  if (!event) return null;

  const formatDate = (dateString: string) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date(dateString);
    return `${days[date.getDay()]}, ${date.getDate()} ${
      months[date.getMonth()]
    }`;
  };

  return (
    <Box my={10}>
      <Image
        height={200}
        mx="auto"
        borderRadius="20px"
        className="object-cover"
        src="/hero-landing.webp"
      />
      <Heading textAlign="center" my={16} as="h2" size="xl">
        {event.eventName}
      </Heading>
      <Detail
        time={event.time}
        location={event.location}
        description={event.description}
        date={formatDate(event.date)}
      />
      <Box my={16}>
        {event.ticket.map((item: any) => (
          <TicketItem
            key={item.id}
            type={item.ticketType}
            count={item.AvailableTicket}
            price={item.price}
          />
        ))}
      </Box>
      <PromotionForm id={id} />
      <HStack justifyContent="end" alignItems="end" my={8} w="100%">
        <Button onClick={handlePublish} colorScheme="red">
          PUBLISH EVENT
        </Button>
      </HStack>
    </Box>
  );
}
