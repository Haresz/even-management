import { Heading, Input } from '@chakra-ui/react';
import React from 'react';

export default function InputDate(props: any) {
  const { value, onChange, name, label } = props;
  return (
    <>
      <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
        {label}
      </Heading>
      <Input
        border={2}
        borderColor={'#A0153E'}
        borderStyle={'solid'}
        focusBorderColor={'gray.400'}
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
