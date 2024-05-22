'use client';
import {
  Heading,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  ModalOverlay,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import {
  Coin,
  Receipt,
  SealPercent,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModalLoading from './ModalLoading';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLogin, setLogin] = useState(false);
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token && !isTokenExpired(token)) {
      setLogin(true);
    }
  }, []);

  const isTokenExpired = (token: any) => {
    const creationTime: any = sessionStorage.getItem('created');
    const expirationTime: any = new Date(creationTime + 60 * 60 * 1000);

    return expirationTime < Date.now();
  };
  return (
    <HStack
      className="bg-redDark fixed w-full top-0 left-0 z-50"
      justifyContent={'space-between'}
      w="100%"
      py={4}
      px={{ base: 4, sm: 16 }}
      color="white"
    >
      <Link href={'/home'}>
        <Heading as="h4" size="lg">
          EventHive
        </Heading>
      </Link>

      {isLogin ? (
        <HStack gap={8}>
          <Box
            className=" cursor-pointer"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
              router.push('/myticket');
            }}
          >
            <HStack>
              <Receipt size={32} />
              <Text fontSize="lg" fontWeight={'semibold'}>
                {' '}
                Transaction
              </Text>
            </HStack>
          </Box>
          <Menu>
            <MenuButton aria-label="Options">
              <UserCircle size={38} />
            </MenuButton>
            <MenuList color={'black'}>
              <MenuItem>
                <Coin weight="light" size={32} />
                <Text ml={3} fontSize="lg">
                  {' '}
                  100
                </Text>
              </MenuItem>
              <MenuItem>
                <SealPercent weight="light" size={32} />
                <Text ml={3} fontSize="lg">
                  {' '}
                  10%
                </Text>
              </MenuItem>
              <hr />
              <MenuItem onClick={() => sessionStorage.clear()}>
                <SignOut size={32} />
                <Text ml={3} fontSize="lg" fontWeight={'semibold'}>
                  {' '}
                  LogOut
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      ) : (
        <HStack>
          <Link href={'/auth/register'}>
            <Button colorScheme="white" variant="outline">
              Register
            </Button>
          </Link>
          <Link href={'/'}>
            <Button variant="solid">Login</Button>
          </Link>
        </HStack>
      )}
      <ModalLoading onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </HStack>
  );
}
