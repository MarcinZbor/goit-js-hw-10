import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { fetchCountries };

const URL = 'https://restcountries.com/#api-endpoints-v3-name';

function fetchCountries(name) {
  return fetch(
    `${URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      return Notify.warning('Nie ma takiego kraju.');
    }
    return response.json();
  });
}
