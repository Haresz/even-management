import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Hide,
} from '@chakra-ui/react';
import React from 'react';
import InputText from '../component/InputText';
import Link from 'next/link';

export default function page() {
  return (
    <HStack>
      <VStack
        className="bg-blueDark h-screen justify-between text-white"
        flex={1}
        overflow="hidden"
      >
        <Image
          className=" self-start -ml-16 -mt-16"
          boxSize={200}
          src="/fire-crack.svg"
        />
        <VStack
          className=" self-start justify-self-start"
          w={'full'}
          px={20}
          alignItems={'start'}
        >
          <Heading as="h4" size="xl">
            REGISTER
          </Heading>
          <Box className="my-12 w-full">
            <InputText label="Username" />
            <InputText label="Email" />
            <InputText label="Password" />
          </Box>
          <Button w={'100%'} colorScheme="white" variant="outline">
            Submit
          </Button>
          <Text mt={4}>
            have a account ?{' '}
            <Link className=" underline" href={'/auth/register'}>
              Login your account
            </Link>
          </Text>
        </VStack>
        <Image
          className=" self-end -mr-16 -mb-16"
          boxSize={200}
          src="/fire-crack.svg"
        />
      </VStack>
      <Hide below="lg">
        <HStack flex={1} justifyContent={'center'}>
          <Image className="h-screen" src="/sound.svg" />
        </HStack>
      </Hide>
    </HStack>
  );
}
