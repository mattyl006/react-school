import React from 'react';
import './App.css';

import {Menu, MenuLink} from "./components/Menu";
import {Button, Input, Textarea} from "./components/Form";
import Card from "./components/Card/";
import Employees from "./components/Employees";

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
    describe: `Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, 
    Southeast Asia, and Great Britain, as well as in the Caribbean (where it is usually referred to as curry chicken). 
    A typical curry from the Indian subcontinent consists of chicken stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, 
    tomato puree, chilli peppers and a variety of spices, often including turmeric, cumin, coriander, cinnamon, and cardamom. Outside South Asia, 
    curry chicken is often made with a pre-made spice mixture known as curry powder.`
};

const employeesData = [
    {
        id: 1,
        name: 'Mateusz Kowalski',
        detail: '25 years old, 3000zł, programmer'
    },
    {
        id: 2,
        name: 'Patryk Kowalski',
        detail: '26 years old, 3500zł, analyst'
    },
    {
        id: 3,
        name: 'Marcel Kowalski',
        detail: '27 years old, 3000zł, programmer'
    },
    {
        id: 4,
        name: 'Bartosz Kowalski',
        detail: '32 years old, 4000zł, lawyer'
    },
];

function App() {
  return (
      <main className="App">
        <h1>Hello react-architecture!</h1>
          <Menu>
              <MenuLink to="/">Home</MenuLink>
              <MenuLink to="/">About</MenuLink>
              <MenuLink to="/" isActive={true}>Contact</MenuLink>
              <MenuLink to="/">Posts</MenuLink>
          </Menu>
          <Button icon={faCoffee} color={colors.alizarin} bgColor={colors.turquoise}>Click me!</Button>
          <Input color={colors.alizarin} bgColor={colors.turquoise} borderColor={colors.emerald} borderRadius={16} borderSize={12}/>
          <Textarea color={colors.alizarin} bgColor={colors.turquoise} borderColor={colors.emerald} borderRadius={16} borderSize={12}/>
          <Card header={cardData.header} date={cardData.date} photo={dish} describe={cardData.describe} showMore={false} />
          <Employees data={employeesData}/>
      </main>
  );
}

export default App;
