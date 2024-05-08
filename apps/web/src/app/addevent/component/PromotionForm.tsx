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
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createPromotion } from '@/api/promotion';

const promotionSchema = Yup.object().shape({
  name: Yup.string().required('input name is required'),
  startDate: Yup.date().required('input start date is required'),
  endDate: Yup.date().required('input end date is required'),
  discount: Yup.number().required('input discount is required'),
  codeReferal: Yup.string().required('input code is required'),
});

export default function PromotionForm(props: any) {
  const toast = useToast();
  const actionAddPromotion = async (values: any) => {
    try {
      const response = await createPromotion(
        props.id,
        values.name,
        values.startDate,
        values.endDate,
        values.discount,
        values.codeReferal,
      );
      toast({
        title: `Success to add promotion`,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `Failed to add promotion`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const formik: any = useFormik({
    initialValues: {
      name: '',
      startDate: '',
      endDate: '',
      discount: '',
      codeReferal: '',
    },
    validationSchema: promotionSchema,
    onSubmit: (values: any) => {
      console.log(values);
      actionAddPromotion(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <InputText
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              label="Promotion Name"
            />
            {formik.touched.name && formik.errors.name && (
              <div style={{ color: 'red' }}>{formik.errors.name}</div>
            )}
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
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
              />
              {formik.touched.startDate && formik.errors.startDate && (
                <div style={{ color: 'red' }}>{formik.errors.startDate}</div>
              )}
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
                name="endDate"
                value={formik.values.endDate}
                onChange={formik.handleChange}
              />
              {formik.touched.endDate && formik.errors.endDate && (
                <div style={{ color: 'red' }}>{formik.errors.endDate}</div>
              )}
            </>
            <InputText
              name="discount"
              value={formik.values.discount}
              onChange={formik.handleChange}
              label="Discount"
            />
            {formik.touched.discount && formik.errors.discount && (
              <div style={{ color: 'red' }}>{formik.errors.discount}</div>
            )}
            <InputText
              name="codeReferal"
              value={formik.values.codeReferal}
              onChange={formik.handleChange}
              label="Code Referal"
            />
            {formik.touched.codeReferal && formik.errors.codeReferal && (
              <div style={{ color: 'red' }}>{formik.errors.codeReferal}</div>
            )}
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
