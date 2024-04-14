import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function IconCategory(props: any) {
  return (
    <Link href={''}>
      <VStack>
        <Box
          padding={props.padding ? props.padding : 6}
          className="border-2 border-redDark rounded-full"
        >
          {props.icon}
        </Box>
        <Text
          className="text-center"
          width={32}
          fontWeight="semibold"
          fontSize="lg"
        >
          {props.title}
        </Text>
      </VStack>
    </Link>
  );
}
