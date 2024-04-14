import { Heading, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Card() {
  return (
    <Box width={300} className="text-black">
      <Image
        className="object-cover"
        src="/hero-landing.webp"
        borderRadius={5}
        height={150}
      />
      <Text py={4} fontSize="lg">
        Tomorow • 10:00 PM
      </Text>
      <Heading pb={6} as="h4" size="sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Heading>
      <Text py={4} fontSize="lg">
        Jakarta - Indonesia
      </Text>
    </Box>
  );
}
