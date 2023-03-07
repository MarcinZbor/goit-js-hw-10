import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const API_LINK = 'https://restcountries.com/#api-endpoints-v3-name';

fetch(API_LINK)
  .then(res => res.json())
  .then(data => console.log(data));
