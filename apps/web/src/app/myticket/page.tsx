import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Card from './component/Card';

export default function page() {
  return (
    <Box className="h-screen">
      <Heading mt={32} mb={16} px={{ base: 4, sm: 16 }} as="h4" size="lg">
        My Ticket
      </Heading>
      <Box mx={16}>
        <Card />
      </Box>
    </Box>
  );
}
