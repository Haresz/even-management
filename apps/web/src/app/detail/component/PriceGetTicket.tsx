import { HStack, Button, Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function PriceGetTicket(props: any) {
  return (
    <HStack flex={1} justifyContent={'center'}>
      <Box
        w={{ base: 300, sm: 400 }}
        mt={26}
        py={26}
        className="border-2 border-redDark border-dashed rounded-md text-center font-semibold"
      >
        <Text fontSize="lg">50K - 180K</Text>
        <Button
          backgroundColor={'#FF204E'}
          color={'white'}
          mt={4}
          onClick={props.onClick}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          variant="solid"
        >
          <Text fontSize="xl">CREATE EVENT</Text>
        </Button>
      </Box>
    </HStack>
  );
}
