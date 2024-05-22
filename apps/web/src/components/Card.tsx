import {
  Heading,
  Box,
  Image,
  Text,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import ModalLoading from './ModalLoading';
import { useRouter } from 'next/navigation';

export default function Card(props: any) {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const router = useRouter();

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

  const date = new Date(props.date);
  return (
    <Box
      className="w-[300px] text-blueDark cursor-pointer"
      onClick={() => {
        setOverlay(<OverlayOne />);
        onOpen();
        router.push(`/detail/${props.id}`);
      }}
    >
      <Image
        className="object-cover"
        src="/hero-landing.webp"
        borderRadius={5}
        height={150}
      />
      <Text py={4} fontSize="lg">
        {`${days[date.getDay()]}, ${date.getDate()} ${
          months[date.getMonth()]
        } • ${props.time}`}
      </Text>
      <Heading pb={6} as="h4" size="sm">
        <Box>{props.name}</Box>
        <Box className="text-ellipsis overflow-hidden line-clamp-2">
          {props.description}
        </Box>
      </Heading>
      <Text py={4} fontSize="lg">
        {props.location}
      </Text>
      <ModalLoading onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </Box>
  );
}
