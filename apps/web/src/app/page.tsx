import {
  Heading,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
} from '@chakra-ui/react';
import {
  Coin,
  SealPercent,
  SignOut,
  Ticket,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen">
      <HStack
        className="bg-redDark"
        justifyContent={'space-between'}
        w="100%"
        py={4}
        px={16}
        color="white"
      >
        <Heading as="h4" size="md">
          EventHive
        </Heading>
        <HStack gap={8}>
          <Link href={''}>
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
      <div className="bg-heroLanding bg-center bg-auto h-[700px] w-full">
        COBAK
      </div>
    </div>
  );
}
