'use strict';

import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
