import {
  VStack,
  HStack,
  Heading,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { PlusSquare } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import CardDetail from './CardDetail';
import AddComent from './popup/AddComent';
import { getReviewEvent } from '@/api/review';
import { useParams } from 'next/navigation';

export default function Coments() {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [reviewData, setReviewData] = useState([]);
  const params = useParams<{ id: string }>();

  const actionGetReview = async () => {
    try {
      const response = await getReviewEvent(parseInt(params.id));
      setReviewData(response.data.data);
      console.log(response.data.data);
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
        <PlusSquare className="cursor-pointer" onClick={onOpen} size={32} />
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
      <AddComent isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </VStack>
  );
}
