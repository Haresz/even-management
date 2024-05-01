import React, { useState } from 'react';
import { Button, HStack, Box } from '@chakra-ui/react';
import FormTicket from './FormTicket';

export default function AddTicket(props: any) {
  const { setStep } = props;
  const [variant, setVariant] = useState(1);

  return (
    <Box mt={10}>
      {Array.from({ length: variant }, (_, index) => (
        <FormTicket id={props.id} key={index} />
      ))}
      <HStack justifyContent={'end'} alignItems={'end'} my={8} w={'100%'}>
        <Button
          onClick={() => setVariant(variant + 1)}
          variant="outline"
          colorScheme="red"
        >
          ADD VARIANT
        </Button>
        <Button onClick={() => setStep(3)} colorScheme="red">
          NEXT
        </Button>
      </HStack>
    </Box>
  );
}
