import React from 'react';
import { Box, Button, HStack, Heading, Image } from '@chakra-ui/react';
import Detail from '@/app/detail/component/Detail';
import TicketItem from './TicketItem';

export default function PublishEvent(props: any) {
  return (
    <Box my={10}>
      <Image
        height={200}
        mx={'auto'}
        borderRadius={'20px'}
        className="object-cover"
        src="/hero-landing.webp"
      />
      <Heading textAlign={'center'} my={16} as="h2" size="xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Heading>
      <Detail
        time={'10.00 AM'}
        location={
          'Jl. Cipinang Indah Raya, RT.6/RW.12, Pd. Bambu, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta'
        }
        description={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        date={'2 April 2024'}
      />
      <Box my={16}>
        <TicketItem type="Reguler" count="100" price="50" />
        <TicketItem type="VIP" count="80" price="80" />
        <TicketItem type="VVIP" count="30" price="100" />
      </Box>
      <HStack justifyContent={'end'} alignItems={'end'} my={8} w={'100%'}>
        <Button colorScheme="red">PUBLISH EVENT</Button>
      </HStack>
    </Box>
  );
}
