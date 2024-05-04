'use client';
import { Box, HStack, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import HeroDetail from '../component/HeroDetail';
import Detail from '../component/Detail';
import PriceGetTicket from '../component/PriceGetTicket';
import Title from '../component/Title';
import PopUp from '../component/popup/Popup';
import { getDetailevent } from '@/api/event';
import { useParams } from 'next/navigation';
import Coments from '../component/Coments';

export default function DetailEvent() {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [event, setEvent] = useState<any>();
  const params = useParams<{ id: string }>();

  const getDetail = async () => {
    try {
      const response = await getDetailevent(params.id);
      setEvent(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
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
    <Box mb={16}>
      <HeroDetail />
      <Box mx={{ base: 4, sm: 16 }}>
        <Title eventName={event ? event.eventName : ''} />
        <HStack
          flexWrap={'wrap-reverse'}
          alignItems={'start'}
          justifyContent={'center'}
        >
          <Detail
            time={event?.time}
            location={event?.location}
            description={event?.description}
            date={`${days[date.getDay()]}, ${date.getDate()} ${
              months[date.getMonth()]
            }`}
          />
          <PriceGetTicket
            ticket={event?.ticket}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          />
        </HStack>
        <Coments />
      </Box>
      <PopUp isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </Box>
  );
}
