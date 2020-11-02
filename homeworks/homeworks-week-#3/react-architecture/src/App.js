import React from 'react';
import './App.css';

import {Button, Input, Textarea} from "./components/Form";
import Card from "./components/Card/";

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import dish from './assets/kurczak-curry.jpg';

const colors = {
    alizarin: '#e74c3c',
    turquoise: '#1abc9c',
    emerald: '#2ecc71',
};

const cardData = {
    header: 'chicken curry',
    date: 'August 14, 2018',
    describe: `Tłumaczenie z języka angielskiego-Curry z kurczaka to danie pochodzące z subkontynentu indyjskiego.
    Występuje powszechnie na subkontynencie indyjskim, Azji Południowo-Wschodniej i Wielkiej Brytanii, a także na Karaibach.`
};

function App() {
  return (
      <main className="App">
        <h1>Hello react-architecture!</h1>
          <Button icon={faCoffee} color={colors.alizarin} bgColor={colors.turquoise}>Click me!</Button>
          <Input color={colors.alizarin} bgColor={colors.turquoise} borderColor={colors.emerald} borderRadius={16} borderSize={12}/>
          <Textarea color={colors.alizarin} bgColor={colors.turquoise} borderColor={colors.emerald} borderRadius={16} borderSize={12}/>
          <Card header={cardData.header} date={cardData.date} photo={dish} describe={cardData.describe} showMore={false} />
      </main>
  );
}

export default App;
