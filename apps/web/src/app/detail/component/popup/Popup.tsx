import { Modal } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import OrderContent from './OrderContent';
import PayMethod from './PayMethod';
import CodePayment from './CodePayment';
import { getDetailevent } from '@/api/event';
import { useParams } from 'next/navigation';

export default function PopUp(props: any) {
  const [step, setStep] = React.useState(1);
  const [event, setEvent] = useState<any>();
  const params = useParams<{ id: string }>();

  const [ticket, setTicket] = useState([]);
  const [orders, setOrders] = useState({});
  const [payment, setPayment] = useState('');

  const getDetail = async () => {
    try {
      const response = await getDetailevent(params.id);
      setEvent(response.data.data);
      setTicket(response.data.data.ticket);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  useEffect(() => {
    console.log(payment);
  }, [payment]);
  return (
    <Modal size={'xl'} isCentered isOpen={props.isOpen} onClose={props.onClose}>
      {props.overlay}
      {step == 1 ? (
        <OrderContent
          event={event}
          ticket={ticket}
          orders={orders}
          setOrders={setOrders}
          set={setStep}
        />
      ) : step == 2 ? (
        <PayMethod setValue={setPayment} value={payment} set={setStep} />
      ) : (
        <CodePayment
          method={payment}
          ticket={ticket}
          orders={orders}
          set={setStep}
        />
      )}
    </Modal>
  );
}
