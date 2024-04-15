import {
  ModalContent,
  ModalHeader,
  HStack,
  Heading,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { CopySimple } from '@phosphor-icons/react/dist/ssr';
import React, { useState } from 'react';
import PopupOrderSumary from './OrderSumary';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodePayment(props: any) {
  const [textToCopy, setTextToCopy] = useState('80777082225384814'); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  return (
    <ModalContent>
      <ModalHeader className="text-blueDark border-b-2 border-blueDark">
        <HStack>
          <ArrowLeft
            className="cursor-pointer"
            onClick={() => props.set(2)}
            size={24}
          />
          <Heading ml={2} as="h3" mr={8} size="md">
            Check Out
          </Heading>
        </HStack>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <HStack my={4}>
          <Text className="font-semibold " fontSize={'md'}>
            Payment deadline :{' '}
          </Text>
          <Text className=" text-redPrimary">12 April 2024 18.00 AM</Text>
        </HStack>
        <HStack my={4}>
          <Text className="font-semibold " fontSize={'md'}>
            Payment method :{' '}
          </Text>
          <Text className=" text-redPrimary"> BCA Virtual Acount</Text>
        </HStack>
        <VStack alignItems={'start'} my={4}>
          <Text className="font-medium my-4" fontSize={'md'}>
            Number virtual acount:
          </Text>
          <HStack
            w="100%"
            p={4}
            justifyContent={'space-between'}
            className=" border-2 border-blueDark rounded-md text-blueDark"
          >
            <Text className="font-medium" fontSize={'xl'}>
              80777082225384814
            </Text>
            <HStack>
              <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
                <Text className="font-normal" fontSize={'md'}>
                  Copy
                </Text>
                <CopySimple size={32} />
              </CopyToClipboard>
            </HStack>
          </HStack>
        </VStack>
        <PopupOrderSumary />
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
