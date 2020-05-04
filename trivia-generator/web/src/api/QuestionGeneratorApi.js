import { handleResponse, handleError } from "../utils/ApiUtils";

function getGeneratedQuestions (question) {
  let url = `https://opentdb.com/api.php?${question.numberOfQuestions ? "amount=" + question.numberOfQuestions + "&" : ""}${question.category ? "category=" + question.category + "&" : ""}
    ${question.difficulty ? "difficulty=" + question.difficulty + "&" : ""}${question.type ? "type=" + question.type + "&" : ""}${question.encoding ? "encoding=" + question.encoding : ""}`;
  url = url[url.length - 1] === "&" ? url.substring(0, url.length - 1) : url ;

  return fetch(url, { method: 'GET' })
    .then(handleResponse)
    .catch(handleError);
}

export default getGeneratedQuestions;