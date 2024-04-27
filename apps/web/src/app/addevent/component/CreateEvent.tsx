import React from 'react';
import InputText from '@/components/InputText';
import InputFile from '@/components/InputFile';
import { Box, Button, Heading, Input, Select, VStack } from '@chakra-ui/react';

export default function CreateEvent(props: any) {
  const { setStep } = props;
  return (
    <>
      <Box mt={8} />
      <InputText label="Event Name" />
      <InputFile />
      <InputText label="Starting Price" />
      <>
        <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
          Date - Time
        </Heading>
        <Input
          border={2}
          borderColor={'#A0153E'}
          borderStyle={'solid'}
          focusBorderColor={'gray.400'}
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
      </>
      <InputText label="Location" />
      <InputText label="Description" />
      <>
        <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
          Category
        </Heading>
        <Select
          border={2}
          borderColor={'#A0153E'}
          borderStyle={'solid'}
          color={'#A0153E'}
          size="md"
        >
          <option value="1">Music</option>
          <option value="2">Nightlife</option>
          <option value="3">Performing & Visual Arts</option>
          <option value="4">Holidays</option>
          <option value="5">Hobbies</option>
          <option value="6">Food & Drink</option>
        </Select>
      </>
      <VStack justifyContent={'end'} alignItems={'end'} mt={8} w={'100%'}>
        <Button onClick={() => setStep(2)} colorScheme="red">NEXT</Button>
      </VStack>
    </>
  );
}
