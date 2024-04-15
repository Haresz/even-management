import { Modal } from '@chakra-ui/react';
import React from 'react';
import OrderContent from './OrderContent';
import PayMethod from './PayMethod';
import CodePayment from './CodePayment';

export default function PopUp(props: any) {
  const [step, setStep] = React.useState(1);
  return (
    <Modal size={'xl'} isCentered isOpen={props.isOpen} onClose={props.onClose}>
      {props.overlay}
      {step == 1 ? (
        <OrderContent set={setStep} />
      ) : step == 2 ? (
        <PayMethod set={setStep} />
      ) : (
        <CodePayment set={setStep} />
      )}
    </Modal>
  );
}
