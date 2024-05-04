import { Heading, Input } from '@chakra-ui/react';
import React from 'react';

export default function InputText(props: any) {
  return (
    <>
      <Heading pt={4} className="text-white" mb={2} as="h4" size="md">
        {props.label}
      </Heading>
      <Input
        bg={'white'}
        color={'darkblue'}
        border={2}
        focusBorderColor={'gray.400'}
        size="md"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}
