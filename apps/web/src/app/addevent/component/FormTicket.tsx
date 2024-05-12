import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputText from '@/components/InputText';
import { Box, Button, VStack, useToast } from '@chakra-ui/react';
import { createTicket } from '@/api/ticket';
import { useSearchParams } from 'next/navigation';

export default function FormTicket(props: { id: number; type: string }) {
  const searchParams = useSearchParams();
  const id: any = searchParams.get('id');
  const toast = useToast();
  const ticketSchema = Yup.object().shape({
    ticketType: Yup.string().required('Ticket Type is required'),
    price: Yup.number().required('Ticket Price is required'),
    count: Yup.number().required('Ticket Count is required'),
  });

  const actionAddTicket = async (values: any) => {
    if (props.type == 'unpaid') values.price = '0';
    const token = localStorage.getItem('token');

    try {
      const response = await createTicket(
        parseInt(id),
        values.ticketType,
        values.price,
        values.count,
        token,
      );
      toast({
        title: `Success to add ticket ${values.ticketType}`,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `Failed to add event`,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      ticketType: '',
      price: 0,
      count: '',
    },
    validationSchema: ticketSchema,
    onSubmit: (values) => {
      actionAddTicket(values);
    },
  });
  return (
    <form className=" mt-10" onSubmit={formik.handleSubmit}>
      <InputText
        label="Ticket type"
        name="ticketType"
        value={formik.values.ticketType}
        onChange={formik.handleChange}
      />
      {formik.touched.ticketType && formik.errors.ticketType && (
        <div style={{ color: 'red' }}>{formik.errors.ticketType}</div>
      )}
      {props.type == 'paid' ? (
        <InputText
          name="price"
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
      ) : null}
      {formik.touched.price && formik.errors.price && (
        <div style={{ color: 'red' }}>{formik.errors.price}</div>
      )}

      <InputText
        name="count"
        label="Count"
        value={formik.values.count}
        onChange={formik.handleChange}
      />
      {formik.touched.count && formik.errors.count && (
        <div style={{ color: 'red' }}>{formik.errors.count}</div>
      )}
      <VStack w={'100%'} alignItems={'end'} mt={8}>
        <Button w={'100%'} type="submit" colorScheme="red">
          Submit
        </Button>
      </VStack>
      <Box className=" border-b-2 border-redDark mt-16" />
    </form>
  );
}
