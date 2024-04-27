import React from 'react';
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  VStack,
  useSteps,
} from '@chakra-ui/react';

export default function SteperComponent() {
  const steps = [
    { title: 'Create Event' },
    { title: 'Add Ticket' },
    { title: 'Publish' },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <Stepper
      mx={'auto'}
      size="md"
      maxW={500}
      colorScheme="red"
      index={activeStep}
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
