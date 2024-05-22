'use client';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Hide,
  useToast,
  useDisclosure,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import InputText from '../component/InputText';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '@/api/auth';
import { useRouter } from 'next/navigation';
import ModalLoading from '@/components/ModalLoading';

const registerSchema = Yup.object().shape({
  username: Yup.string().required('username must be provided'),
  email: Yup.string().required('email must be provided'),
  password: Yup.string().required('password must be provided'),
});

export default function page() {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const router = useRouter();
  const toast = useToast();

  const handleRegister = (values: any) => {
    const registerPromise = new Promise((resolve, reject) => {
      registerUser(values.username, values.email, values.password)
        .then((response) => {
          resolve(response);
          setOverlay(<OverlayOne />);
          onOpen();
          router.push('/');
        })
        .catch((error) => {
          reject(error);
        });
    });

    toast.promise(registerPromise, {
      success: {
        title: 'Register successfully',
        position: 'top',
        description: 'Your account has been created.',
      },
      error: {
        title: 'Register failed',
        position: 'top',
        description: 'There was an issue creating your account.',
      },
      loading: {
        title: 'Registering',
        position: 'top',
        description: 'Please wait while we create your account.',
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values: any) => {
      handleRegister(values);
    },
  });
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
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <Box className="my-12">
              <InputText
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.touched.username && formik.errors.username && (
                <div style={{ color: 'red' }}>
                  {formik.errors.username as string}
                </div>
              )}
              <InputText
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'red' }}>
                  {formik.errors.email as string}
                </div>
              )}
              <InputText
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: 'red' }}>
                  {formik.errors.password as string}
                </div>
              )}
            </Box>
            <Button
              type="submit"
              w={'100%'}
              colorScheme="white"
              variant="outline"
            >
              Submit
            </Button>
          </form>

          <Text mt={4}>
            have a account ?{' '}
            <Link className=" underline" href={'/'}>
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
      <ModalLoading onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </HStack>
  );
}
