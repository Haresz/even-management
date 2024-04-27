import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function TicketItem(props: any) {
  return (
    <HStack
      mt={6}
      py={2}
      px={8}
      w={600}
      justifyContent={'space-between'}
      className="border-2 rounded-md border-black mt-2"
    >
      <Text fontWeight={'semibold'} fontSize="lg">
        Ticket {props.type} / {props.count}
      </Text>
      <Text fontWeight={'semibold'} fontSize="lg">
        {props.price}K
      </Text>
    </HStack>
  );
}
