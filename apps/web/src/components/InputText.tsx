import { Heading, Input } from '@chakra-ui/react';
import React from 'react';

export default function InputText(props: any) {
  return (
    <>
      <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
        {props.label}
      </Heading>
      <Input
        border={2}
        borderColor={'#A0153E'}
        borderStyle={'solid'}
        focusBorderColor={'gray.400'}
        size="md"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}
