import { HStack, Button, Text } from '@chakra-ui/react';
import { Plus, Minus } from '@phosphor-icons/react';
import React from 'react';

export default function CategoryTicket() {
  return (
    <HStack
      py={2}
      px={8}
      justifyContent={'space-between'}
      className="border-2 rounded-md border-black mt-2"
    >
      <Text fontWeight={'semibold'} fontSize="lg">
        Ticket Reguler
      </Text>
      <HStack>
        <Button
          backgroundColor={'#FF204E'}
          color={'white'}
          padding={0}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          variant="solid"
        >
          <Plus size={20} />
        </Button>
        <Text fontSize="lg">1</Text>
        <Button
          backgroundColor={'#FF204E'}
          color={'white'}
          padding={0}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          variant="solid"
        >
          <Minus size={20} />
        </Button>
      </HStack>
    </HStack>
  );
}
