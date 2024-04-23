import { HStack, Button, Text } from '@chakra-ui/react';
import { Plus, Minus } from '@phosphor-icons/react';
import React, { useState } from 'react';

export default function CategoryTicket(props: any) {
  const { title, qtyTicket } = props;
  const [qty, setQty] = useState<number>(0);

  const handleMinus = () => {
    setQty(qty - 1);
    props.setOrder({ ...props.order, [title]: qty - 1 });
  };

  const handlePlus = () => {
    setQty(qty + 1);
    props.setOrder({ ...props.order, [title]: qty + 1 });
  };

  return (
    <HStack
      py={2}
      px={8}
      justifyContent={'space-between'}
      className="border-2 rounded-md border-black mt-2"
    >
      <Text fontWeight={'semibold'} fontSize="lg">
        Ticket {title}
      </Text>
      <HStack>
        <Button
          onClick={() => (qty > 0 ? handleMinus() : null)}
          backgroundColor={'#FF204E'}
          color={'white'}
          padding={0}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          variant="solid"
        >
          <Minus size={20} />
        </Button>
        <Text fontSize="lg">{qty}</Text>
        <Button
          onClick={() => (qtyTicket > qty ? handlePlus() : null)}
          backgroundColor={'#FF204E'}
          color={'white'}
          padding={0}
          _hover={{
            color: '#FF204E',
            backgroundColor: 'white',
            border: '1px',
          }}
          variant="solid"
        >
          <Plus size={20} />
        </Button>
      </HStack>
    </HStack>
  );
}
