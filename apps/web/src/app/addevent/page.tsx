'use client';

import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import SteperComponent from './component/SteperComponent';
import AddTicket from './component/AddTicket';
import PublishEvent from './component/PublishEvent';
import CreateEvent from './component/CreateEvent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Page() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<any>();

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <CreateEvent type={type} setType={setType} setStep={setStep} />;
      case 2:
        return <AddTicket step={step} setStep={setStep} />;
      case 3:
        return <PublishEvent />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Box px={{ base: 4, sm: 16 }} mt={20} minH={'100vh'}>
        <SteperComponent step={step} />
        {renderStepComponent()}
      </Box>
      <Footer />
    </>
  );
}
