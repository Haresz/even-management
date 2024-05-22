'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, VStack, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createEvent } from '@/api/event';
import { useRouter } from 'next/navigation';
import InputText from '@/components/InputText';
import InputFile from '@/components/InputFile';
import InputDate from '@/components/InputDate';
import InputSelect from '@/components/InputSelect';

const eventSchema = Yup.object().shape({
  eventName: Yup.string().required('Event Name is required'),
  price: Yup.string().required('Price is required'),
  dateTime: Yup.string().required('Date is required'),
  location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required'),
  categoryId: Yup.string().required('Category Id is required'),
});

export default function CreateEvent({
  type,
  setType,
  setStep,
}: {
  type: any;
  setType: any;
  setStep: any;
}) {
  const [file, setFile] = useState<any>(null);
  const toast = useToast();
  const router = useRouter();

  const handleAddEvent = async (values: any) => {
    try {
      const dateTime = new Date(values.dateTime);
      const time = `${dateTime
        .getHours()
        .toString()
        .padStart(2, '0')}:${dateTime
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      const token = sessionStorage.getItem('token');
      const id: any = sessionStorage.getItem('id');
      const response = await createEvent(
        id,
        values.eventName,
        file,
        values.price,
        values.dateTime,
        time,
        values.location,
        values.description,
        type,
        values.categoryId,
        token,
      );
      setStep(2);
      router.push(`/addevent?id=${response.data.data.event.id}`);
      toast({
        title: 'Success to add event',
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to add event',
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      eventName: '',
      price: 0,
      dateTime: '',
      location: '',
      description: '',
      eventType: '',
      categoryId: '',
    },
    validationSchema: eventSchema,
    onSubmit: handleAddEvent,
  });

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token || isTokenExpired(token)) {
      router.push('/');
    }
  }, []);

  const isTokenExpired = (token: string) => {
    const creationTime = sessionStorage.getItem('created') as any;
    const expirationTime: any = new Date(creationTime + 60 * 60 * 1000);
    return expirationTime < Date.now();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mt={8} />
      <InputText
        name="eventName"
        value={formik.values.eventName}
        onChange={formik.handleChange}
        label="Event Name"
        error={formik.touched.eventName && formik.errors.eventName}
      />
      <InputSelect
        name="eventType"
        label="Event Type"
        value={type}
        onChange={handleChangeType}
        options={[
          { value: 'paid', label: 'Paid' },
          { value: 'unpaid', label: 'Unpaid' },
        ]}
        error={!type && 'Event type is required'}
      />
      <InputFile
        name="file"
        onChange={handleChangeFile}
        error={!file && 'File is required'}
      />
      {type !== 'unpaid' && (
        <InputText
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          label="Starting Price"
          error={formik.touched.price && formik.errors.price}
        />
      )}
      <InputDate
        name="dateTime"
        label="Date - Time"
        value={formik.values.dateTime}
        onChange={formik.handleChange}
        error={formik.touched.dateTime && formik.errors.dateTime}
      />
      <InputText
        name="location"
        value={formik.values.location}
        onChange={formik.handleChange}
        label="Location"
        error={formik.touched.location && formik.errors.location}
      />
      <InputText
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        label="Description"
        error={formik.touched.description && formik.errors.description}
      />
      <InputSelect
        name="categoryId"
        label="Category"
        value={formik.values.categoryId}
        onChange={formik.handleChange}
        options={[
          { value: 1, label: 'Music' },
          { value: 2, label: 'Nightlife' },
          { value: 3, label: 'Performing & Visual Arts' },
          { value: 4, label: 'Holidays' },
          { value: 5, label: 'Hobbies' },
          { value: 6, label: 'Food & Drink' },
        ]}
        error={formik.touched.categoryId && formik.errors.categoryId}
      />
      <VStack justifyContent="end" alignItems="end" my={8} w="100%">
        <Button type="submit" colorScheme="red">
          NEXT
        </Button>
      </VStack>
    </form>
  );
}
