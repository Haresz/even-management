import { detailUser, switchRole } from '@/api/auth';
import {
  Box,
  Button,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ModalLoading from './ModalLoading';

export default function HeroLanding(props: any) {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [isEo, setIsEo] = useState(false);
  const router = useRouter();

  const getDetail = async () => {
    try {
      const id = sessionStorage.getItem('id');
      const response = await detailUser(parseInt(id as string));
      console.log(response.data.data);
      if (response.data.data.role == 'EO') {
        setIsEo(true);
      }
    } catch (error) {
      null;
    }
  };

  const handleAddEvent = async () => {
    onOpen();
    router.push('/addevent');
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Box className="bg-heroLanding bg-center bg-auto h-[600px] w-full mt-16 text-white text-center font-extralight">
      <Text pt={16} fontSize="5xl">
        FIND YOUR EVENT
      </Text>
      <Text fontSize="5xl">FIND YOUR HAPPNIES</Text>
      <Button
        mt={16}
        border={'4px'}
        borderColor={'white'}
        borderRadius={0}
        backgroundColor={'#FF204E'}
        color={'white'}
        _hover={{
          color: '#FF204E',
          backgroundColor: 'white',
        }}
        onClick={!isEo ? props.onClick : handleAddEvent}
        variant="solid"
      >
        <Text fontSize="xl">CREATE EVENT</Text>
      </Button>
      <ModalLoading onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </Box>
  );
}
