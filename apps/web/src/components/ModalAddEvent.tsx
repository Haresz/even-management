import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function ModalAddevent(props: any) {
  return (
    <Modal onClose={props.onClose} isCentered size={'lg'} isOpen={props.isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <HStack justifyContent={'center'}>
            <Image my={20} src="envelope_front.webp" />
          </HStack>
          <Text textAlign={'center'} fontSize={'xl'}>
            Please verifikasi your email
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>VERIFIKASI</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
