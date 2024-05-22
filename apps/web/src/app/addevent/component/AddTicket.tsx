'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import FormTicket from './FormTicket';
import { getDetailevent } from '@/api/event';

export default function AddTicket({
  setStep,
  step,
}: {
  setStep: any;
  step: any;
}) {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState(1);
  const [type, setType] = useState('');
  const id: any = searchParams.get('id');

  const fetchEventDetails = async () => {
    try {
      const response = await getDetailevent(id);
      setType(response.data.data.eventType);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [step]);

  return (
    <Box mt={10}>
      {type === 'unpaid' ? (
        <FormTicket id={0} type={type} />
      ) : (
        Array.from({ length: variant }, (_, index) => (
          <FormTicket id={id} key={index} type={type} />
        ))
      )}
      <HStack justifyContent="end" alignItems="end" my={8} w="100%">
        {type !== 'unpaid' && (
          <Button
            onClick={() => setVariant(variant + 1)}
            variant="outline"
            colorScheme="red"
          >
            ADD VARIANT
          </Button>
        )}
        <Button onClick={() => setStep(3)} colorScheme="red">
          NEXT
        </Button>
      </HStack>
    </Box>
  );
}
