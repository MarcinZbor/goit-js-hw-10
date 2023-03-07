import { Notify } from 'notiflix/build/notiflix-notify-aio';
const START_URL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  return fetch(`${START_URL}/name/${name}`)
    .then(response => {
      if (!response.ok) {
        return Notify.failure('Nie ma takiego kraju');
      }
      return response.json();
    })
    .catch(error => console.log(error));
}