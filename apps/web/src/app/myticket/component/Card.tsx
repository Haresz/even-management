import Btn from '@/components/Btn';
import {
  Box,
  HStack,
  Text,
  Image,
  VStack,
  Heading,
  Badge,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Popup from './Popup';

export default function Card(props: any) {
  const {
    transactionDate,
    status,
    eventDate,
    eventLocation,
    eventTitle,
    ticket,
    id,
    method,
    deadline,
  } = props;
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const days = ['Sun', 'Mon', 'Tuey', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateTransaction = new Date(transactionDate);
  const dateEvent = new Date(eventDate);

  function addZero(i: any) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

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
          {`${days[dateTransaction.getDay()]}, ${dateTransaction.getDate()} ${
            months[dateTransaction.getMonth()]
          }`}
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
          </HStack>

          <Text fontSize={'2xl'} my={4}>
            {eventTitle}
          </Text>
          <HStack justifyContent={'space-between'}>
            <Text fontWeight="semibold" size="sm">
              {`${days[dateEvent.getDay()]}, ${dateEvent.getDate()} ${
                months[dateEvent.getMonth()]
              } • ${addZero(dateEvent.getHours())}.${addZero(
                dateEvent.getMinutes(),
              )}`}
            </Text>
          </HStack>
          <HStack h={'fit-content'} w="100%" justifyContent={'end'}>
            {status == 'success' ? (
              <Box mt={-16}>
                <Btn title="Review" />
              </Box>
            ) : null}
            <Box className="cursor-pointer" onClick={onOpen}>
              <Text decoration="underline" fontWeight="semibold" size="sm">
                View Transaction Details
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        overlay={overlay}
        id={id}
        ticket={ticket}
        method={method}
        deadline={deadline}
      />
    </VStack>
  );
}
