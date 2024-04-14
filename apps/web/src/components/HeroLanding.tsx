import { Button, Text } from '@chakra-ui/react';
import React from 'react';

export default function HeroLanding() {
  return (
    <div className="bg-heroLanding bg-center bg-auto h-[600px] w-full mt-16 text-white text-center font-extralight">
      <Text pt={16} fontSize="5xl">
        FIND YOUR EVENT
      </Text>
      <Text fontSize="5xl">FIND YOUR HAPPNIES</Text>
      <Button
        mt={16}
        border={'4px'}
        borderColor={'white'}
        borderRadius={0}
        backgroundColor={'#FF204E'}
        color={'white'}
        _hover={{
          color: '#FF204E',
          backgroundColor: 'white',
        }}
        variant="solid"
      >
        <Text fontSize="xl">CREATE EVENT</Text>
      </Button>
    </div>
  );
}
