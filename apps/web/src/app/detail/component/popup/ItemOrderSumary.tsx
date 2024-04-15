import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function ItemOrderSumary(props: any) {
  return (
    <HStack justifyContent={'space-between'}>
      <Text fontSize="md">{props.title}</Text>
      <Text fontSize="md" fontWeight={'bold'}>
        {props.price}
      </Text>
    </HStack>
  );
}
