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
} from '@chakra-ui/react';
import React from 'react';
import InputText from '../app/auth/component/InputText';
import Link from 'next/link';
import * as Yup from 'yup';
import { loginUser } from '@/api/auth';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('email must be provided'),
  password: Yup.string().required('password must be provided'),
});

export default function page() {
  const router = useRouter();
  const toast = useToast();

  const handleLogin = async (values: any) => {
    try {
      const response: any = await loginUser(values.email, values.password);
      router.push('/home');
      toast({
        title: `login successfully`,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('created', JSON.stringify(new Date()));
      localStorage.setItem('id', response.data.data.id);
    } catch (error) {
      toast({
        title: `register failed`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values: any) => {
      handleLogin(values);
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
            LOGIN
          </Heading>
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <Box className="my-12">
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
            don’t have a account ?{' '}
            <Link className=" underline" href={'/auth/register'}>
              Register now
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
