'use client';
import React, { useEffect, useState } from 'react';
import { Button, HStack, Box } from '@chakra-ui/react';
import FormTicket from './FormTicket';
import { getDetailevent } from '@/api/event';
import { useSearchParams } from 'next/navigation';

export default function AddTicket(props: any) {
  const searchParams = useSearchParams();
  const { setStep, step } = props;
  const [variant, setVariant] = useState(1);
  const [type, setType] = useState('');
  const id: any = searchParams.get('id');

  const getEvent = async () => {
    try {
      const response = await getDetailevent(id);
      setType(response.data.data.eventType);
      console.log(response.data.data.eventType);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, [step]);
  return (
    <Box mt={10}>
      {type == 'unpaid' ? (
        <FormTicket id={0} type={type} />
      ) : (
        Array.from({ length: variant }, (_, index) => (
          <FormTicket id={props.id} key={index} type={type} />
        ))
      )}

      <HStack justifyContent={'end'} alignItems={'end'} my={8} w={'100%'}>
        {type == 'unpaid' ? null : (
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
