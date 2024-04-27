'use client';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import SteperComponent from './component/SteperComponent';
import AddTicket from './component/AddTicket';
import PublishEvent from './component/PublishEvent';
import CreateEvent from './component/CreateEvent';

export default function page() {
  const [step, setStep] = useState(1);

  return (
    <Box px={{ base: 4, sm: 16 }} mt={20} minH={'100vh'}>
      <SteperComponent />
      {step == 1 ? (
        <CreateEvent step={step} setStep={setStep} />
      ) : step == 2 ? (
        <AddTicket step={step} setStep={setStep} />
      ) : (
        <PublishEvent step={step} setStep={setStep} />
      )}
    </Box>
  );
}
