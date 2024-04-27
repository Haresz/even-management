import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Image,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import Btn from './Btn';
import { switchRole } from '@/api/auth';

export default function ModalAddevent(props: any) {
  const actionSwitch = async () => {
    try {
      props.onClose();
      const response = await switchRole(1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal onClose={props.onClose} isCentered size={'md'} isOpen={props.isOpen}>
      <ModalOverlay />
      <ModalContent justifyContent={'center'}>
        <ModalCloseButton />
        <ModalBody>
          <HStack justifyContent={'center'}>
            <Image mt={20} mb={8} src="envelope_front.webp" />
          </HStack>
          <Heading color={'#5D0E41'} textAlign={'center'} as="h2" size="lg">
            Please verifikasi your email
          </Heading>
        </ModalBody>
        <ModalFooter mt={-8} mb={8} justifyContent={'center'}>
          <Btn onClick={actionSwitch} title={'VERIFIKASI'} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
