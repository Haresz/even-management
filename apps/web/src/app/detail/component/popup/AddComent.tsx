import {
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Star } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export default function AddComent(props: any) {
  return (
    <Modal size={'xl'} isCentered isOpen={props.isOpen} onClose={props.onClose}>
      {props.overlay}
      <ModalContent>
        <ModalHeader className="text-blueDark border-b-2 border-blueDark">
          <Heading as="h3" mr={8} size="md">
            Add Coment
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mt={4} fontWeight={'semibold'} fontSize="lg">
            Add Rating
          </Text>
          <HStack color={'#ECC94B'} my={4} w={'100%'}>
            <Star size={32} weight="fill" />
            <Star size={32} weight="fill" />
            <Star size={32} weight="fill" />
            <Star size={32} weight="fill" />
            <Star size={32} weight="fill" />
          </HStack>
          <Text mt={6} fontWeight={'semibold'} fontSize="lg">
            Feed Back
          </Text>
          <Textarea
            placeholder="Here is a sample placeholder"
            size="sm"
            resize={'none'}
            mt={4}
            border={2}
            borderColor={'gray.600'}
            borderStyle={'solid'}
            borderRadius={5}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
