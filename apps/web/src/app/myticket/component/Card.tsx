import Btn from '@/components/Btn';
import {
  Box,
  HStack,
  Text,
  Image,
  VStack,
  Heading,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Card(props: any) {
  const {
    transactionDate,
    status,
    eventDate,
    eventLocation,
    ticketType,
    eventTitle,
  } = props;
  return (
    <VStack
      my={8}
      px={8}
      pt={4}
      alignItems={'start'}
      flexWrap={'wrap'}
      className="border-2 rounded-md border-black"
    >
      <HStack>
        <Heading as="h4" size="md">
          {transactionDate}
        </Heading>
        {status == 'pending' ? (
          <Badge colorScheme="yellow">Pending</Badge>
        ) : status == 'success' ? (
          <Badge colorScheme="green">Succes</Badge>
        ) : null}
      </HStack>
      <HStack w={'100%'} py={4} flex={3} alignItems={'start'}>
        <Image
          className="object-cover h-full"
          src="/hero-landing.webp"
          borderLeftRadius={5}
          height={150}
        />
        <VStack w={'100%'} ml={10} alignItems={'start'}>
          <HStack>
            <Text fontWeight="semibold" size="sm" mr={8}>
              {eventLocation}
            </Text>
            {/* <Box
              w="fit-content"
              py={1}
              px={8}
              className="border-2 border-redPrimary border-dashed rounded-md text-center text-redPrimary font-semibold"
            >
              {ticketType}
            </Box> */}
          </HStack>

          <Text fontSize={'2xl'} my={4}>
            {eventTitle}
          </Text>
          <HStack justifyContent={'space-between'}>
            <Text fontWeight="semibold" size="sm">
              {eventDate}
            </Text>
          </HStack>
          <HStack h={'fit-content'} w="100%" justifyContent={'end'}>
            {status == 'success' ? (
              <Box mt={-16}>
                <Btn title="Review" />
              </Box>
            ) : null}
            <Link href={'/'}>
              <Text decoration="underline" fontWeight="semibold" size="sm">
                View Transaction Details
              </Text>
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
