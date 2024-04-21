import Axios from 'axios';

export function createReview(
  id_event: number,
  id_user: number,
  rating: number,
  feedBack: string,
) {
  return Axios.post(`http://localhost:8000/review/${id_event}/${id_user}`, {
    rating,
    feedBack,
  });
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
) {
  return Axios.patch(`http://localhost:8000/review/${id_review}`, {
    rating,
    feedBack,
  });
}

export function deleteReview(id_review: number) {
  return Axios.delete(`http://localhost:8000/review/${id_review}`);
}

export function getReviewEvent(id_event: number) {
  return Axios.get(`http://localhost:8000/review/${id_event}`);
}
