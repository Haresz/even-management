import { detailUser } from '@/api/auth';
import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function HeroLanding(props: any) {
  const [isEo, setIsEo] = useState(false);
  const router = useRouter();

  const getDetail = async () => {
    try {
      const id = localStorage.getItem('id');
      const response = await detailUser(parseInt(id as string));
      if (response.data.data.role == 'EO') {
        setIsEo(true);
      }
    } catch (error) {
      console.log(error);
    }
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
      <Link href={isEo ? '/addevent' : ''}>
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
          onClick={!isEo ? props.onClick : null}
          variant="solid"
        >
          <Text fontSize="xl">CREATE EVENT</Text>
        </Button>
      </Link>
    </Box>
  );
}
