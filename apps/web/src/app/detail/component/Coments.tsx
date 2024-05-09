import { VStack, HStack, Heading } from '@chakra-ui/react';
import { PlusSquare } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import CardDetail from './CardDetail';
import { getReviewEvent } from '@/api/review';
import { useParams } from 'next/navigation';

export default function Coments() {
  const [reviewData, setReviewData] = useState([]);
  const params = useParams<{ id: string }>();

  const actionGetReview = async () => {
    try {
      const response = await getReviewEvent(parseInt(params.id));
      setReviewData(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    actionGetReview();
  }, []);
  return (
    <VStack mt={10} alignItems="start">
      <HStack>
        <Heading as="h2" size="lg">
          Coment
        </Heading>
      </HStack>
      <HStack w={'100%'} flexWrap={'wrap'} gap={4} mt={2}>
        {reviewData.map((item: any) => {
          return (
            <CardDetail
              key={item.id}
              feedBack={item.feedBack}
              user={'User name'}
              rating={item.rating}
            />
          );
        })}
      </HStack>
    </VStack>
  );
}
