export const umaruMessages = {
  firstWelcome: 'Welcome to the u-weather chan app',
  secondWelcome: 'I am Umaru and ill be your guide',
  startSearching: 'Start by searching a city',
  successMessageAfterCitySearch: 'Succes, I found that city',
  failureMessageAfterCitySearch: 'Sorry, I couldnt find that city',
  questionMessage: 'Do you really want to do that?',
  successCityMessage: (data) => successCityMessage(data),
  deleteCityMessage: (data) => deleteCityMessage(data),
  failureCityMessage: (data) => failureCityMessage(data),
};

function successCityMessage (data) {
  return `Success, I found ${data.name}`;
}

function deleteCityMessage (data) {
  return `I deleted ${data.name}`;
}

function failureCityMessage (data) {
  return `Sorry, I couldnt find ${data.name}`;
}
