import Btn from '@/components/Btn';
import { Box, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import AddComent from './AddComent';

export default function Review(props: any) {
  const OverlayOne = () => <ModalOverlay bg="rgba(0, 34, 77, 0.66)" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <Box mt={-16}>
      <Btn
        title="Review"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      />
      <AddComent
        eventId={props.eventId}
        isOpen={isOpen}
        onClose={onClose}
        overlay={overlay}
      />
    </Box>
  );
}
