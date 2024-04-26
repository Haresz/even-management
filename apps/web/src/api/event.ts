import Axios from 'axios';

export function createEvent(
  id_user: number,
  file: any,
  price: number,
  date: Date,
  time: number,
  location: string,
  description: string,
  category_id: number,
) {
  return Axios.post(`http://localhost:8000/events/${id_user}`, {
    file,
    price,
    date,
    time,
    location,
    description,
    category_id,
  });
}

export function getAllEvent() {
  return Axios.get(`http://localhost:8000/events`);
}

export function getAllEventPagination(page: number) {
  return Axios.get(`http://localhost:8000/events/${page}`);
}

export function getDetailevent(event_id: string) {
  return Axios.get(`http://localhost:8000/events/${event_id}`);
}

export function publishevent(event_id: number) {
  return Axios.patch(`http://localhost:8000/events/publish/${event_id}`);
}

export function updateEvent(
  event_id: number,
  file: any,
  price: number,
  date: Date,
  time: number,
  location: string,
  description: string,
  category_id: number,
) {
  return Axios.patch(`http://localhost:8000/events/${event_id}`, {
    file,
    price,
    date,
    time,
    location,
    description,
    category_id,
  });
}

export function deleteEvent(event_id: number) {
  return Axios.delete(`http://localhost:8000/events/${event_id}`);
}
