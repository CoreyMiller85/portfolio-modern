import image1 from './img/clothes/1.png';
import image2 from './img/clothes/2.png';
import image3 from './img/clothes/3.png';
import image4 from './img/clothes/4.png';
import image5 from './img/clothes/5.png';
import casterImg from './img/castr-screen.png';
import brain1 from './img/brain/brain1.png';
import brain2 from './img/brain/brain2.png';
import castr1 from './img/castr/castr1.png';
import castr2 from './img/castr/castr2.png';
import castr3 from './img/castr/castr3.png';
import castr4 from './img/castr/castr4.png';
import castr5 from './img/castr/castr5.png';

export const castr = {
  title: 'CASTr: Magic: The Gathering Visual Database',
  tags: ['React', 'Redux', 'Node', 'Axios', 'MongoDb'],
  description:
    "A Magic: The Gathering visual card database. Search through all of the cards in Magic, with filters for name, color, rarity, and set. Using React and Redux, the cards are displayed in a mobile first responsive layout. When you click on a card it brings up a single card page, with exploded details of the card's mechanics. The apps server is built with node and express, with MongoDb serving as the database. The collections were populated from Scryfall’s API allowing me to have the most complete and current data.",
  purpose:
    'I wanted to build a larger app to really test my skills and learn Redux. What I ended up learning the most with this project was setting up URL query strings. I feel now more confident with setting up servers with more advanced queries to end points from an API server.',
  gitLink: 'https://github.com/CoreyMiller85/mtg-api-server',
  liveLink: 'https://cjm-castr2.herokuapp.com/',
  mainImage: castr1,
  images: [castr1, castr2, castr3, castr4, castr5],
  link: 'castr',
};

export const brain = {
  title: 'Smart Brain',
  tags: ['React', 'Redux', 'Node', 'Axios', 'PostgreSQL', 'Redis', 'Docker'],
  description:
    'A face recognition app that takes in a URL of an image and highlights the faces inside the image. Built with React, Redux, Express, with Postgres and Redis for the databases. Postgres and JavaScript Web Tokens handle the user data and authentication, while Redis is in control of the session storage and timing out of JavaScript Web Tokens.',
  purpose:
    'To gain greater knowledge of user authentication and authorization, as well as learning to better use relational databases and SQL. I also wanted to try my hand at session storage with Redis. Working with an API outside of one that I created also presented unique challenges with a changing code base, and how the responses were formed from the API’s endpoints.',
  gitLink: 'https://github.com/CoreyMiller85/mtg-api-server',
  link: 'brain',
  images: [brain1, brain2],
  mainImage: brain1,
};

export const clothes = {
  title: 'Clothes',
  tags: ['React', 'Styled-Components'],
  purpose:
    'To increase my skill with CSS and layouts, viewing some popular clothing outlets I try to build from their layouts and create something of my own that still is familiar to the user.',
  description:
    'A front end for a fictional clothing store. Clothes has a  fully built front splash page, sliding banner images, products page, cart, and checkout. Also having a UI for user login and registration. All that is needed is a backend with routes and Stripe support for a full user experience. I am currently working on this at the moment.',
  images: [image1, image2, image3, image4, image5],
  gitLink: 'https://github.com/CoreyMiller85/mtg-api-server',
  link: 'clothes',
  mainImage: image4,
};

export const projectsList = [castr, brain, clothes];
