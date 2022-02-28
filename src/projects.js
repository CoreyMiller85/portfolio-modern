import image1 from './img/clothes/1.png';
import image2 from './img/clothes/2.png';
import image3 from './img/clothes/3.png';
import image4 from './img/clothes/4.png';
import image5 from './img/clothes/5.png';
import casterImg from './img/castr-screen.png';
import brain1 from './img/brain/brain1.png';
import brain2 from './img/brain/brain2.png';

export const castr = {
  title: 'CASTr: Magic: The Gathering Visual Database',
  tags: ['React', 'Redux', 'node', 'axios', 'MongoDb'],
  desciption:
    'This is a server for my Caster App, this server controls the API end points for searching my extensive MongoDB database of all printed Magic: The Gathering cards. It also controls the user database that is used for authentication and creating a repo of each users collected cards if they so choose. Created as a personal project for myself and friends to use to create and store card collections, and deck lists for playing MTG. Uses JSON Web Tokens for auth',
  gitLink: 'https://github.com/CoreyMiller85/mtg-api-server',
  liveLink: 'https://cjm-castr2.herokuapp.com/',
  mainImage: casterImg,
  link: 'castr',
};

export const brain = {
  title: 'Smart Brain',
  tags: ['React', 'Redux', 'Node', 'Axios', 'PostgreSQL', 'Redis', 'Docker'],
  purpose: '',
  description: '',
  gitLink: 'https://github.com/CoreyMiller85/mtg-api-server',
  liveLink: 'https://cjm-castr2.herokuapp.com/',
  link: 'brain',
  images: [brain1, brain2],
  mainImage: brain1,
};

export const clothes = {
  title: 'Clothes',
  tags: ['React', 'Styled-Components'],
  purpose: '',
  description: '',
  images: [image1, image2, image3, image4, image5],
  gitLink: 'https://github.com/CoreyMiller85/mtg-api-server',
  liveLink: 'https://cjm-castr2.herokuapp.com/',
  link: 'clothes',
  mainImage: image4,
};

export const projectsList = [castr, brain, clothes];
