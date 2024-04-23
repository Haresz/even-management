import { Heading } from '@chakra-ui/react';
import React from 'react';

export default function Title(props: any) {
  return (
    <Heading my={16} as="h2" size="2xl">
      {props.eventName}
    </Heading>
  );
}
