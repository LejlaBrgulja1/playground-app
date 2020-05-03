import { handleResponse, handleError } from "./ApiUtils";

function getTriviaParameters () {
  let url = "http://localhost:3001/trivia"

  return fetch(url, { method: 'GET' })
    .then(handleResponse)
    .catch(handleError);
}

export default getTriviaParameters;