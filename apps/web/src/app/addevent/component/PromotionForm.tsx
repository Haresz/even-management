import InputText from '@/components/InputText';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Accordion,
  Heading,
  Input,
  VStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export default function PromotionForm() {
  return (
    <Accordion
      className=" text-redDark border-redDark"
      defaultIndex={[0]}
      allowMultiple
    >
      <AccordionItem border={'2px'} borderRadius={5}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading my={2} as="h4" size="md">
                PROMOTION
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel borderBottom={'2px'} borderRadius={5} pb={4}>
          <form action="">
            <InputText
              name="promotion"
              //   value={formik.values.price}
              //   onChange={formik.handleChange}
              label="Promotion Name"
            />
            <>
              <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
                Start Date
              </Heading>
              <Input
                border={2}
                borderColor={'#A0153E'}
                borderStyle={'solid'}
                focusBorderColor={'gray.400'}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name="dateTime"
                // value={formik.values.dateTime}
                // onChange={formik.handleChange}
              />
              {/* {formik.touched.dateTime && formik.errors.dateTime && (
                <div style={{ color: 'red' }}>{formik.errors.dateTime}</div>
              )} */}
            </>
            <>
              <Heading pt={4} className="text-redDark" mb={2} as="h4" size="md">
                End Date
              </Heading>
              <Input
                border={2}
                borderColor={'#A0153E'}
                borderStyle={'solid'}
                focusBorderColor={'gray.400'}
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name="dateTime"
                // value={formik.values.dateTime}
                // onChange={formik.handleChange}
              />
              {/* {formik.touched.dateTime && formik.errors.dateTime && (
                <div style={{ color: 'red' }}>{formik.errors.dateTime}</div>
              )} */}
            </>
            <InputText
              name="discount"
              //   value={formik.values.price}
              //   onChange={formik.handleChange}
              label="Discount"
            />
            <InputText
              name="codeReferal"
              //   value={formik.values.price}
              //   onChange={formik.handleChange}
              label="Code Referal"
            />
            <VStack w={'100%'} alignItems={'end'} mt={8}>
              <Button w={'100%'} type="submit" colorScheme="red">
                Submit
              </Button>
            </VStack>
          </form>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
