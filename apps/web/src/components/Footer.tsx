import { Heading, HStack, Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box className="bg-gradient-to-b from-redDark to-blueDark text-white text-start">
      <Heading
        px={{ base: 4, sm: 16 }}
        py={20}
        as="h4"
        size="lg"
        className="border-b-2 border-white"
      >
        EventHive
      </Heading>
      <HStack
        px={{ base: 4, sm: 16 }}
        py={4}
        flexWrap={'wrap'}
        justifyContent={'space-between'}
      >
        <Text w={'fit-content'} fontSize="sm">
          @2024 Huge. All Rights Reserved
        </Text>
        <Text fontSize="sm">Work studio event hive</Text>
        <Text fontSize="sm">hello.eventhive@gmail.com</Text>
      </HStack>
    </Box>
  );
}
