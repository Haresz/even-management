import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  useToast,
} from '@chakra-ui/react';
import Detail from '@/app/detail/component/Detail';
import TicketItem from './TicketItem';
import { useRouter, useSearchParams } from 'next/navigation';
import { getDetailevent, publishEvent } from '@/api/event';
import PromotionForm from './PromotionForm';

export default function PublishEvent(props: any) {
  const searchParams = useSearchParams();
  const toast = useToast();
  const id: any = searchParams.get('id');
  const [event, setEvent] = useState<any>();
  const router = useRouter();

  const getDetail = async () => {
    try {
      const response = await getDetailevent(id);
      setEvent(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const publish = async () => {
    try {
      const response = await publishEvent(id);
      toast({
        title: `Success to publish event`,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.push('/');
    } catch (error) {
      toast({
        title: `Failed to publish event`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const days = ['Sun', 'Mon', 'Tuey', 'Wed', 'Thu', 'Fri', 'Sat'];
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
  const date = new Date(event ? event.date : '');
  return (
    <Box my={10}>
      <Image
        height={200}
        mx={'auto'}
        borderRadius={'20px'}
        className="object-cover"
        src="/hero-landing.webp"
      />
      <Heading textAlign={'center'} my={16} as="h2" size="xl">
        {event?.eventName}
      </Heading>
      <Detail
        time={event?.time}
        location={event?.location}
        description={event?.description}
        date={`${days[date.getDay()]}, ${date.getDate()} ${
          months[date.getMonth()]
        }`}
      />
      <Box my={16}>
        {event?.ticket.map((item: any) => {
          return (
            <TicketItem
              key={item?.id}
              type={item?.ticketType}
              count={item?.AvailableTicket}
              price={item?.price}
            />
          );
        })}
      </Box>
      <PromotionForm />
      <HStack justifyContent={'end'} alignItems={'end'} my={8} w={'100%'}>
        <Button onClick={publish} colorScheme="red">
          PUBLISH EVENT
        </Button>
      </HStack>
    </Box>
  );
}
