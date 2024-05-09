import { HStack } from '@chakra-ui/react';
import { Star } from '@phosphor-icons/react';
import React from 'react';

export default function FormRating(props: any) {
  const { rating, handleMouseOver, handleClick } = props;
  return (
    <HStack my={4} w={'100%'}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          weight="fill"
          className={`h-8 w-8 transition-colors ${
            index < rating
              ? 'text-yellow-400 hover:text-yellow-400'
              : 'text-gray-400 hover:text-yellow-400'
          }`}
          onMouseOver={() => handleMouseOver(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </HStack>
  );
}
