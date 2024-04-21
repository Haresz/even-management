import React from 'react';
import { Text, Button } from '@chakra-ui/react';

export default function Btn(props: any) {
  return (
    <>
      <Button
        backgroundColor={'#FF204E'}
        color={'white'}
        mt={16}
        _hover={{
          color: '#FF204E',
          backgroundColor: 'white',
          border: '1px',
        }}
        onClick={props.onClick}
        variant="solid"
      >
        <Text fontSize="md">{props.title}</Text>
      </Button>
    </>
  );
}
