import {
  Heading,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  Coin,
  SealPercent,
  SignOut,
  Ticket,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <HStack
      className="bg-redDark fixed w-full top-0 left-0 z-50"
      justifyContent={'space-between'}
      w="100%"
      py={4}
      px={{ base: 4, sm: 16 }}
      color="white"
    >
      <Link href={'/'}>
        <Heading as="h4" size="lg">
          EventHive
        </Heading>
      </Link>

      <HStack gap={8}>
        <Link href={'/myticket'}>
          <HStack>
            <Ticket size={32} />
            <Text fontSize="lg" fontWeight={'semibold'}>
              {' '}
              Tickets
            </Text>
          </HStack>
        </Link>
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
            <MenuItem>
              <SignOut size={32} />
              <Text ml={3} fontSize="lg" fontWeight={'semibold'}>
                {' '}
                LogOut
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
}
