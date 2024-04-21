import { HStack, Heading } from '@chakra-ui/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { props } from 'cypress/types/bluebird';
import React from 'react';

export default function CheckOutHeader(props: any) {
  return (
    <HStack>
      <ArrowLeft className="cursor-pointer" onClick={props.onClick} size={24} />
      <Heading ml={2} as="h3" mr={8} size="md">
        Check Out
      </Heading>
    </HStack>
  );
}
