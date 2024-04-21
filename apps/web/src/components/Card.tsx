import { Heading, Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Card() {
  return (
    <Link className="w-[300px] text-black" href={'/detail/1'}>
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
    </Link>
  );
}
