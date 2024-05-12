'use client';
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

export default function InputText(props: any) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading pt={4} className="text-white" mb={2} as="h4" size="md">
        {props.label}
      </Heading>
      <InputGroup size="md">
        <Input
          bg={'white'}
          color={'darkblue'}
          border={2}
          focusBorderColor={'gray.400'}
          size="md"
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          type={props.type ? (show ? 'text' : props.type) : 'text'}
        />
        {props.type == 'password' ? (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        ) : null}
      </InputGroup>
    </>
  );
}
