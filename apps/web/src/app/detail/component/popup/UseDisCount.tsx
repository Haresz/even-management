import { HStack, Switch, Text } from '@chakra-ui/react';
import { Coin, SealPercent } from '@phosphor-icons/react';
import React from 'react';

export default function UseDisCount() {
  return (
    <>
      <HStack mt={8} alignItems={'center'}>
        <Text w={140} fontWeight={'semibold'} fontSize="lg">
          Exchange points
        </Text>
        <HStack w={'80px'} className=" font-semibold text-redPrimary">
          <Coin weight="light" size={32} />
          <Text fontSize="lg">1000</Text>
        </HStack>
        <Switch colorScheme="red" size="md" />
      </HStack>
      <HStack mt={1} alignItems={'center'}>
        <Text w={140} fontWeight={'semibold'} fontSize="lg">
          Use discount
        </Text>
        <HStack w={'80px'} className=" font-semibold text-redPrimary">
          <SealPercent weight="light" size={32} />
          <Text fontSize="lg">10%</Text>
        </HStack>
        <Switch colorScheme="red" size="md" />
      </HStack>
    </>
  );
}
