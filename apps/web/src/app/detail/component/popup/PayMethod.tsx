import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
  HStack,
  Text,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

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
        <HStack>
          <ArrowLeft
            className="cursor-pointer"
            onClick={() => props.set(1)}
            size={24}
          />
          <Heading ml={2} as="h3" mr={8} size="md">
            Check Out
          </Heading>
        </HStack>
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
        <Button
          backgroundColor={'#FF204E'}
          color={'white'}
          mt={16}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          onClick={() => props.set(3)}
          variant="solid"
        >
          <Text fontSize="md">PLACE ORDER</Text>
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
