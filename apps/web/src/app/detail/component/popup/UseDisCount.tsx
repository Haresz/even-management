import { HStack, Switch, Text } from '@chakra-ui/react';
import { Coin, SealPercent } from '@phosphor-icons/react';
import React, { useState } from 'react';

const myPoint = 1000;
const myDiscount = '10%';
export default function UseDisCount(props: any) {
  const [checkP, setP] = useState(false);
  const [checkD, setD] = useState(false);
  const { setDiscount, setPoint } = props;

  const handlePoint = () => {
    setP(!checkP);
    if (checkP == false) {
      setPoint(myPoint);
    } else {
      setPoint(undefined);
    }
  };

  const handleDiscount = () => {
    setD(!checkD);
    if (checkD == false) {
      setDiscount(myDiscount);
    } else {
      setDiscount(undefined);
    }
  };

  return (
    <>
      <HStack mt={8} alignItems={'center'}>
        <Text w={140} fontWeight={'semibold'} fontSize="lg">
          Exchange points
        </Text>
        <HStack w={'80px'} className=" font-semibold text-redPrimary">
          <Coin weight="light" size={32} />
          <Text fontSize="lg">{myPoint}</Text>
        </HStack>
        <Switch
          isChecked={checkP}
          onChange={handlePoint}
          colorScheme="red"
          size="md"
        />
      </HStack>
      <HStack mt={1} alignItems={'center'}>
        <Text w={140} fontWeight={'semibold'} fontSize="lg">
          Use discount
        </Text>
        <HStack w={'80px'} className=" font-semibold text-redPrimary">
          <SealPercent weight="light" size={32} />
          <Text fontSize="lg">{myDiscount}</Text>
        </HStack>
        <Switch
          isChecked={checkD}
          onChange={handleDiscount}
          colorScheme="red"
          size="md"
        />
      </HStack>
    </>
  );
}
