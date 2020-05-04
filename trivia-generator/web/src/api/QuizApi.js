import { handleResponse, handleError } from "../utils/ApiUtils";
const baseUrl = "http://localhost:3001";

export function getQuiz (id) {
  let url = `${baseUrl}/quiz/${id}`;

  return fetch(url, { method: 'GET' })
    .then(handleResponse)
    .catch(handleError);
}

export function postQuiz (quiz) {
  let url = `${baseUrl}/quiz`;

  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(quiz) })
      .then(handleResponse)
      .catch(handleError);
}

export function getTriviaParameters () {
  let url = `${baseUrl}/trivia`

  return fetch(url, { method: 'GET' })
    .then(handleResponse)
    .catch(handleError);
}