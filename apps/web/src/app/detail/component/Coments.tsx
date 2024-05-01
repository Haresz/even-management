import {
  VStack,
  HStack,
  Heading,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { PlusSquare } from '@phosphor-icons/react';
import React from 'react';
import CardDetail from './CardDetail';
import AddComent from './popup/AddComent';

export default function Coments() {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <VStack mt={10} alignItems="start">
      <HStack>
        <Heading as="h2" size="lg">
          Coment
        </Heading>
        <PlusSquare className="cursor-pointer" onClick={onOpen} size={32} />
      </HStack>
      <HStack w={'100%'} flexWrap={'wrap'} gap={4} mt={2}>
        <CardDetail />
        <CardDetail />
        <CardDetail />
      </HStack>
      <AddComent isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </VStack>
  );
}
