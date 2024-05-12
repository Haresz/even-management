import Axios from 'axios';

export function createEvent(
  id_user: number,
  eventName: string,
  file: any,
  price: any,
  date: any,
  time: string,
  location: string,
  description: string,
  eventType: string,
  categoryId: any,
  token: any,
) {
  const formData = new FormData();
  formData.append('eventName', eventName);
  formData.append('file', file);
  formData.append('price', price);
  formData.append('date', date);
  formData.append('time', time);
  formData.append('location', location);
  formData.append('description', description);
  formData.append('eventType', eventType);
  formData.append('categoryId', categoryId);
  return Axios.post(`http://localhost:8000/events/2`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  });
}

export function getAllEvent(
  page: number,
  category?: number,
  search?: string,
  upcoming?: number,
  promotion?: boolean,
  publish?: boolean,
) {
  let url = `http://localhost:8000/events/?page=${page}`;

  if (category !== undefined) {
    url += `&category=${category}`;
  }

  if (search !== undefined) {
    url += `&search=${search}`;
  }

  if (upcoming !== undefined) {
    url += `&upcoming=${upcoming}`;
  }

  if (promotion !== undefined) {
    url += `&promotion=${promotion}`;
  }

  if (publish !== undefined) {
    url += `&publish=${publish}`;
  }

  const res = Axios.get(url);
  return res;
}

export function getDetailevent(event_id: string) {
  return Axios.get(`http://localhost:8000/events/detail/${event_id}`);
}

export function publishEvent(event_id: number, token: string) {
  return Axios.patch(
    `http://localhost:8000/events/publish/${event_id}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    },
  );
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
  token: any,
) {
  return Axios.patch(
    `http://localhost:8000/events/${event_id}`,
    {
      file,
      price,
      date,
      time,
      location,
      description,
      category_id,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export function deleteEvent(event_id: number, token: any) {
  return Axios.delete(`http://localhost:8000/events/${event_id}`, {
    headers: {
      Authorization: token,
    },
  });
}
