import React from 'react';
import InputText from '@/components/InputText';
import { Button, HStack, Box } from '@chakra-ui/react';

export default function AddTicket(props: any) {
  const { setStep } = props;
  return (
    <Box mt={10}>
      <InputText label="Ticket type" />
      <InputText label="Price" />
      <InputText label="Count" />
      <Box className=" border-b-2 border-redDark mt-16" />
      <HStack justifyContent={'end'} alignItems={'end'} my={8} w={'100%'}>
        <Button variant="outline" colorScheme="red">
          ADD VARIANT
        </Button>
        <Button onClick={() => setStep(3)} colorScheme="red">
          NEXT
        </Button>
      </HStack>
    </Box>
  );
}
