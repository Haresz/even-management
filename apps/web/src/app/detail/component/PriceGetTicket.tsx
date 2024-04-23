import { HStack, Button, Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function PriceGetTicket(props: any) {
  const price = props.ticket?.map((item: any) => {
    return item.price;
  });
  return (
    <HStack flex={1} justifyContent={'center'}>
      <Box
        w={{ base: 300, sm: 400 }}
        mt={26}
        py={26}
        className="border-2 border-redDark border-dashed rounded-md text-center font-semibold"
      >
        {price && price.length > 0 ? (
          <>
            <Text fontSize="lg">
              {Math.min(...price)}K - {Math.max(...price)}K
            </Text>
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
              <Text fontSize="xl">GET EVENT</Text>
            </Button>
          </>
        ) : (
          <Text className=" text-redPrimary" fontSize="5xl">
            Free
          </Text>
        )}
      </Box>
    </HStack>
  );
}
