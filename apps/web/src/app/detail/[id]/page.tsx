'use client';
import { Box, HStack, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import HeroDetail from '../component/HeroDetail';
import Detail from '../component/Detail';
import PriceGetTicket from '../component/PriceGetTicket';
import Title from '../component/Title';
import PopUp from '../component/popup/Popup';
import PayMethod from '../component/popup/PayMethod';

export default function DetailEvent() {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <Box mb={16}>
      <HeroDetail />
      <Box mx={{ base: 4, sm: 16 }}>
        <Title />
        <HStack
          flexWrap={'wrap-reverse'}
          alignItems={'start'}
          justifyContent={'center'}
        >
          <Detail />
          <PriceGetTicket
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          />
        </HStack>
      </Box>
      <PopUp isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </Box>
  );
}
