'use strict';
import HeaderImg from '../../assets/react-core-concepts.png';
import './Header.css';

const captions = ['Crucial', 'Fundamental', 'Core'],
  randomNum = (num) => Math.floor(Math.random() * (num + 1)),
  randomCaption = captions[randomNum(2)];

export default function Header() {
  return (
    <header>
      <img src={HeaderImg} alt="Stylized Atom" />
      <h1>React Essentials</h1>
      <p>
        {randomCaption}React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
