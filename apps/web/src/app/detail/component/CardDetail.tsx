import { VStack, Text, HStack } from '@chakra-ui/react';
import { Star } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export default function CardDetail(props: any) {
  return (
    <VStack className=" p-4 border border-black rounded-md" width={500}>
      <Text w={'100%'} fontWeight={'bold'} fontSize="xl">
        {props.user}
      </Text>
      <HStack color={'#ECC94B'} my={2} w={'100%'}>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            weight="fill"
            className={`h-8 w-8 transition-colors ${
              index < props.rating ? 'text-yellow-400' : 'text-gray-400'
            }`}
          />
        ))}
      </HStack>
      <Text w="100%" textAlign={'start'} fontSize="lg">
        {props.feedBack}
      </Text>
    </VStack>
  );
}
