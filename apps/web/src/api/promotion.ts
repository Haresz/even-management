import Axios from 'axios';

export function createPromotion(
  eventId: number,
  name: string,
  startDate: Date,
  endDate: Date,
  discount: number,
  codeReferal: string,
  token: any,
) {
  return Axios.post(
    `http://localhost:8000/promotion/${eventId}`,
    {
      name,
      startDate,
      endDate,
      discount,
      codeReferal,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}
