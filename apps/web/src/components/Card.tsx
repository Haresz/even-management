import { Heading, Box, Image, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Card(props: any) {
  const days = ['Sun', 'Mon', 'Tuey', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(props.date);
  return (
    <Link className="w-[300px] text-blueDark" href={`/detail/${props.id}`}>
      <Image
        className="object-cover"
        src="/hero-landing.webp"
        borderRadius={5}
        height={150}
      />
      <Text py={4} fontSize="lg">
        {`${days[date.getDay()]}, ${date.getDate()} ${
          months[date.getMonth()]
        } • ${props.time}`}
      </Text>
      <Heading pb={6} as="h4" size="sm">
        <Box>{props.name}</Box>
        <Box>{props.description}</Box>
      </Heading>
      <Text py={4} fontSize="lg">
        {props.location}
      </Text>
    </Link>
  );
}
