import Axios from 'axios';

export function createTicket(
  id_event: number,
  ticketType: string,
  price: number,
  AvailableTicket: number,
) {
  return Axios.post(`http://localhost:8000/ticket/${id_event}`, {
    ticketType,
    price,
    AvailableTicket,
  });
}

export function deleteTicket(id_ticket: number) {
  return Axios.delete(`http://localhost:8000/ticket/delete/${id_ticket}`);
}
