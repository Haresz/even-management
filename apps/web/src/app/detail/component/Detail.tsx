import { VStack, Heading, HStack, Box, Text } from '@chakra-ui/react';
import { CalendarBlank, MapPinSimple } from '@phosphor-icons/react';
import React from 'react';

export default function Detail(props: any) {
  return (
    <Box flex={1}>
      <VStack mt={26} alignItems="start">
        <Heading as="h2" size="lg">
          Date & Time
        </Heading>
        <HStack mt={2} className="font-semibold">
          <CalendarBlank size={32} />
          <Text fontSize="lg">
            {props.date}- {props.time}
          </Text>
        </HStack>
      </VStack>
      <VStack mt={10} alignItems="start">
        <Heading as="h2" size="lg">
          Location
        </Heading>
        <HStack mt={2} className="font-semibold">
          <MapPinSimple size={32} />
          <Text fontSize="lg">{props.location}</Text>
        </HStack>
      </VStack>
      <VStack mt={10} alignItems="start">
        <Heading as="h2" size="lg">
          Description
        </Heading>
        <HStack mt={2} className="font-semibold">
          <Text fontSize="lg">{props.description}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}
