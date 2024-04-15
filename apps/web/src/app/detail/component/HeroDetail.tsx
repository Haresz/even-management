import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function HeroDetail() {
  return (
    <div>
      <Box height={500} className="w-full bg-blueDark"></Box>
      <Box mx={{ base: 4, sm: 16 }}>
        <Image
          height={600}
          borderRadius={'20px'}
          className="w-full object-cover -mt-80"
          src="/hero-landing.webp"
        />
      </Box>
    </div>
  );
}
