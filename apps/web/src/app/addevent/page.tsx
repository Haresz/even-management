'use client';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import SteperComponent from './component/SteperComponent';
import AddTicket from './component/AddTicket';
import PublishEvent from './component/PublishEvent';
import CreateEvent from './component/CreateEvent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function page() {
  const [step, setStep] = useState(3);
  const [idEvent, setEventId] = useState();
  const [dataEvent, setEvent] = useState();

  return (
    <>
      <Navbar />
      <Box px={{ base: 4, sm: 16 }} mt={20} minH={'100vh'}>
        <SteperComponent step={step} />
        {step == 1 ? (
          <CreateEvent
            step={step}
            setStep={setStep}
            setEvent={setEvent}
            setEventId={setEventId}
          />
        ) : step == 2 ? (
          <AddTicket step={step} setStep={setStep} id={idEvent} />
        ) : (
          <PublishEvent
            step={step}
            setStep={setStep}
            id={idEvent}
            dataEvent={dataEvent}
          />
        )}
      </Box>
      <Footer />
    </>
  );
}
