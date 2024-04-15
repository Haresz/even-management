import { VStack, Heading, HStack, Box, Text } from '@chakra-ui/react';
import { CalendarBlank, MapPinSimple } from '@phosphor-icons/react';
import React from 'react';

export default function Detail() {
  return (
    <Box flex={1}>
      <VStack mt={26} alignItems="start">
        <Heading as="h2" size="lg">
          Date & Time
        </Heading>
        <HStack mt={2} className="font-semibold">
          <CalendarBlank size={32} />
          <Text fontSize="lg">2 April 2024 - 10.00 AM</Text>
        </HStack>
      </VStack>
      <VStack mt={10} alignItems="start">
        <Heading as="h2" size="lg">
          Location
        </Heading>
        <HStack mt={2} className="font-semibold">
          <MapPinSimple size={32} />
          <Text fontSize="lg">
            Jl. Cipinang Indah Raya, RT.6/RW.12, Pd. Bambu, Kec. Duren Sawit,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
          </Text>
        </HStack>
      </VStack>
      <VStack mt={10} alignItems="start">
        <Heading as="h2" size="lg">
          Description
        </Heading>
        <HStack mt={2} className="font-semibold">
          <Text fontSize="lg">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
