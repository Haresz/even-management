import Axios from 'axios';

export function createReview(
  id_event: number,
  id_user: number,
  rating: number,
  feedBack: string,
  token: any,
) {
  return Axios.post(
    `http://localhost:8000/review/${id_event}/${id_user}`,
    {
      rating,
      feedBack,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export function getAllReview() {
  return Axios.get(`http://localhost:8000/review`);
}

export function getDetailReview(id_review: number) {
  return Axios.get(`http://localhost:8000/review/${id_review}`);
}

export function updateReview(
  id_review: number,
  rating: number,
  feedBack: string,
  token: any,
) {
  return Axios.patch(
    `http://localhost:8000/review/${id_review}`,
    {
      rating,
      feedBack,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export function deleteReview(id_review: number, token: any) {
  return Axios.delete(`http://localhost:8000/review/${id_review}`, {
    headers: {
      Authorization: token,
    },
  });
}

export function getReviewEvent(id_event: number) {
  return Axios.get(`http://localhost:8000/review/${id_event}`);
}
