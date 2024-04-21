import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  HStack,
  Text,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import CheckOutHeader from './CheckOutHeader';
import Btn from '@/components/Btn';

function Method(props: any) {
  return (
    <HStack
      py={3}
      px={8}
      justifyContent={'space-between'}
      className="border-2 rounded-md border-black mt-2"
    >
      <Radio value={props.title} colorScheme="red">
        <Text fontWeight={'semibold'} fontSize="lg">
          {props.title}
        </Text>
      </Radio>
    </HStack>
  );
}

export default function PayMethod(props: any) {
  const [value, setValue] = React.useState('');
  return (
    <ModalContent>
      <ModalHeader className="text-blueDark border-b-2 border-blueDark">
        <CheckOutHeader onClick={() => props.set(1)} />
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text my={6} ml={2} mr={8} fontWeight={'semibold'} fontSize="lg">
          Payment Method
        </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Method title="BCA Virtual Acount" />
            <Method title="Alfamart" />
            <Method title="Indomart" />
          </Stack>
        </RadioGroup>
      </ModalBody>
      <ModalFooter>
        <Btn title="PLACE ORDER" onClick={() => props.set(3)} />
      </ModalFooter>
    </ModalContent>
  );
}
