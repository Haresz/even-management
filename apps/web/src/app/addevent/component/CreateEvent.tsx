'use client';
import React, { useEffect, useState } from 'react';
import InputText from '@/components/InputText';
import InputFile from '@/components/InputFile';
import { Box, Button, VStack, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createEvent } from '@/api/event';
import { useRouter } from 'next/navigation';
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

export default function CreateEvent(props: any) {
  const [file, setFile] = useState<any>([]);
  const toast = useToast();
  const router = useRouter();
  const actionAddEvent = async (values: any) => {
    const dateTime = new Date(values.dateTime);
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    try {
      const response = await createEvent(
        1,
        values.eventName,
        file,
        values.price,
        values.dateTime,
        time,
        values.location,
        values.description,
        props.type,
        values.categoryId,
      );
      props.setStep(2);
      router.push(`/addevent?id=${response.data.data.event.id}`);
      toast({
        title: `Success to add event`,
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
      eventName: '',
      price: 0,
      dateTime: '',
      location: '',
      description: '',
      eventType: '',
      categoryId: '',
    },
    validationSchema: eventSchema,
    onSubmit: (values) => {
      actionAddEvent(values);
    },
  });

  const handleChangeFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleChangeType = (e: any) => {
    props.setType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mt={8} />
      <>
        <InputText
          name="eventName"
          value={formik.values.eventName}
          onChange={formik.handleChange}
          label="Event Name"
        />
        {formik.touched.eventName && formik.errors.eventName && (
          <div style={{ color: 'red' }}>{formik.errors.eventName}</div>
        )}
      </>
      <InputSelect
        name="eventType"
        label="Event Type"
        value={props.type}
        onChange={handleChangeType}
        options={[
          { value: 'paid', label: 'Paid' },
          { value: 'unpaid', label: 'Unpaid' },
        ]}
      />
      {props.type == '' && (
        <div style={{ color: 'red' }}>event type required</div>
      )}
      <>
        <InputFile name="file" onChange={handleChangeFile} />
        {file == null && <div style={{ color: 'red' }}>File is required</div>}
      </>
      <>
        {props.type == 'unpaid' ? null : (
          <InputText
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            label="Starting Price"
          />
        )}

        {formik.touched.price && formik.errors.price && (
          <div style={{ color: 'red' }}>{formik.errors.price}</div>
        )}
      </>
      <>
        <InputDate
          name="dateTime"
          label={'Date - Time'}
          value={formik.values.dateTime}
          onChange={formik.handleChange}
        />
        {formik.touched.dateTime && formik.errors.dateTime && (
          <div style={{ color: 'red' }}>{formik.errors.dateTime}</div>
        )}
      </>
      <>
        <InputText
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          label="Location"
        />
        {formik.touched.location && formik.errors.location && (
          <div style={{ color: 'red' }}>{formik.errors.location}</div>
        )}
      </>
      <>
        <InputText
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          label="Description"
        />
        {formik.touched.description && formik.errors.description && (
          <div style={{ color: 'red' }}>{formik.errors.description}</div>
        )}
      </>
      <>
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
        />
        {formik.touched.categoryId && formik.errors.categoryId && (
          <div style={{ color: 'red' }}>{formik.errors.categoryId}</div>
        )}
      </>

      <VStack justifyContent={'end'} alignItems={'end'} mt={8} w={'100%'}>
        <Button type="submit" colorScheme="red">
          NEXT
        </Button>
      </VStack>
    </form>
  );
}
