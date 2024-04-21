import { Box, HStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

export default function Card() {
  return (
    <HStack flexWrap={'wrap'} className="border-2 rounded-md border-black">
      <Image
        className="object-cover h-full"
        src="/hero-landing.webp"
        borderLeftRadius={5}
        flex={1}
        height={150}
      />
      <Box py={4} px={8} flex={3} alignItems={'start'}>
        <Text fontWeight="semibold" size="sm">
          Jakarta - Indonesia
        </Text>
        <Text fontSize={'2xl'} my={4}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <HStack justifyContent={'space-between'}>
          <Text fontWeight="semibold" size="sm">
            Tomorow • 10:00 PM
          </Text>
          <Box
            w="fit-content"
            py={1}
            px={8}
            className="border-2 border-redPrimary border-dashed rounded-md text-center text-redPrimary font-semibold"
          >
            Ticket VVIP
          </Box>
        </HStack>
      </Box>
    </HStack>
  );
}
