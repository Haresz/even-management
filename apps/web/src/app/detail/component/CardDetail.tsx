import { VStack, Text, HStack } from '@chakra-ui/react';
import { Star } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export default function CardDetail() {
  return (
    <VStack className=" p-4 border border-black rounded-md" width={500}>
      <Text w={'100%'} fontWeight={'bold'} fontSize="xl">
        Lorem Ipsum has{' '}
      </Text>
      <HStack color={'#ECC94B'} my={2} w={'100%'}>
        <Star size={32} weight="fill" />
        <Star size={32} weight="fill" />
        <Star size={32} weight="fill" />
        <Star size={32} weight="fill" />
        <Star size={32} weight="fill" />
      </HStack>
      <Text fontSize="lg">
        Jl. Cipinang Indah Raya, RT.6/RW.12, Pd. Bambu, Kec. Duren Sawit, Kota
        Jakarta Timur, Daerah Khusus Ibukota Jakarta
      </Text>
    </VStack>
  );
}
