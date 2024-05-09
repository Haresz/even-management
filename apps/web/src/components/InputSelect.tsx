import { Heading, Select } from '@chakra-ui/react';
import React from 'react';

export default function InputSelect(props: any) {
  const { value, onChange, name, label, options } = props;
  return (
    <>
      <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
        {label}
      </Heading>
      <Select
        border={2}
        borderColor={'#A0153E'}
        borderStyle={'solid'}
        color={'#A0153E'}
        size="md"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Choose..."
      >
        {options.map((item: any) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Select>
    </>
  );
}
