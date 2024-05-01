import React from 'react';
import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  VStack,
} from '@chakra-ui/react';

export default function SteperComponent(props: { step: number }) {
  const steps = [
    { title: 'Create Event' },
    { title: 'Add Ticket' },
    { title: 'Publish' },
  ];

  return (
    <Stepper
      mx={'auto'}
      size="md"
      maxW={500}
      colorScheme="red"
      index={props.step}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <VStack mt={8} justifyContent={'end'}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
            </Box>
          </VStack>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
