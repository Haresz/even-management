import React from 'react';
import {
  Box,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import ModalLoading from './ModalLoading';
import { useRouter } from 'next/navigation';

export default function IconCategory(props: any) {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const router = useRouter();

  return (
    <Box
      className=" cursor-pointer"
      onClick={() => {
        onOpen();
        router.push(props.link);
      }}
    >
      <VStack>
        <Box
          padding={props.padding ? props.padding : 6}
          className="border-2 border-redDark rounded-full"
        >
          {props.icon}
        </Box>
        <Text
          className="text-center"
          width={32}
          fontWeight="semibold"
          fontSize="lg"
        >
          {props.title}
        </Text>
      </VStack>
      <ModalLoading onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </Box>
  );
}
