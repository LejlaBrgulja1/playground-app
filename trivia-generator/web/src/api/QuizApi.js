import { handleResponse, handleError } from "./ApiUtils";

export function getQuiz (id) {
  let url = "http://localhost:3001/quiz/" + id;

  return fetch(url, { method: 'GET' })
    .then(handleResponse)
    .catch(handleError);
}

export function postQuiz (quiz) {
    let url = "http://localhost:3001/quiz";

    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(quiz) })
        .then(handleResponse)
        .catch(handleError);
}
