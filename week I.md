---
title: "Szkoła Reacta Week #1"
tags: ""
---

# Szkoła Reacta Week #1

## Twój cel

-   systematyczność,
-   aktywność na slack'u,
-   teoretyczne jak i praktyczne opanowanie React'a

## Przygotowanie środowiska

Jednym z najważniejszych elementów w budowe aplikacji React jest Node js.  
Pozwala on na wygodne rozwiązania po stronie lokalnej, które ułatwiają pracę.

`node --version`

Npm jest to manager paczek, który pozwala pobierać różne biblioteki.

`npm --version`

Czasami, gdy mamy doczynienia z komercyjnymi projektami, potrzebujemy różnych wersji _node'a_.  
Może się zdarzyć że klient dla którego pracujemy wymaga starszej wersji, więc musimy się  
wtedy "przepiąć". Tutaj pojawia się _nvm_ - menadżer wersji node'a. Jest to program, który  
pozwala odpalać różne wersje _node'a_ na jednym komputerze.

**nvm na systemy Linux / Mac** - <https://github.com/nvm-sh/nvm>.

**nvm na windows** - <https://github.com/coreybutler/nvm-windows>.

`nvm list`

Po instalacji można przetestować nvm:  
`node -v` -> v12.18.0.  
`nvm install 12.17.0` -> instalacja node o wersji 12.17.0.  
`nvm use 12.17.0` -> przestawienie się na starszą wersję.  

## Korzystanie z NPM

W pliku konfiguracyjnym _package.json_ będziemy zawierać informację z jakich  
bibliotek korzystamy, a nasz _npm_ będzie nimi zarządzać.

Tak możemy zainstalować przykładowy pakiet: `npm install --save is-odd`  

Tak zainstalowane biblioteki są dostępne zarówno po stronie _node'a_ (czyli lokalnej)  
jak i po stronie serwera, czyli w przeglądarce.

Gdy jesteśmy ciekawi danego rozwiązania, to zawsze możemy podejrzeć na githubie  
pliki źródłowe danej paczki / biblioteki.

Możemy zainicjować pracę z _npm_ za pomocą: `npm init`.  
`npm init -y` - automatycznie zatwierdzi nam zadawane pytania konfiguracyjne.  

Utworzy nam się plik _package.json_, który będzie przechowywać pobrane biblioteki,  
oraz skrypty, które będziemy wykorzystywać w projekcie.

### Skrypty z pliku package.json

```json
{
    "name": "jsproject",
    "version": "1.0.0",
    "description": "My awesome project",
    "main": "index.js",
    
    "scripts": {
        "ok": "echo \"Hello React School!\"",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Mateusz",
    "license": "ISC"
}
```

`npm run ok` -> wyświetli _Hello React School!_

Prosty skrypt _index.js_:

```javascript
const a = 5;
const b = 6;
console.log(`a + b = ${a + b}`);

```

Dopiszmy w **package.json** odpowiedni skrypt w sekcji _scripts_:

```json
{
    "name": "jsproject",
    "version": "1.0.0",
    "description": "My awesome project",
    "main": "index.js",
    
    "scripts": {
        "ok": "echo \"Hello React School!\"",
        "test": "echo \"Error: no test specified\" && exit 1",
        "console": "node index.js"
    },
    "author": "Mateusz",
    "license": "ISC"
}
```

Teraz po wywołaniu `npm run console` uruchomi się _index.js_;  
-> 11

Istnieją pewne prefixy, które umożliwają uruchomienie kilku skryptów  
w odpowiedniej kolejności **pre** oraz **post**;

```json
{
    "name": "jsproject",
    "version": "1.0.0",
    "description": "My awesome project",
    "main": "index.js",
    
    "scripts": {
        "ok": "echo \"Hello React School!\"",
        "test": "echo \"Error: no test specified\" && exit 1",
        "preconsole": "before 'index.js'",
        "console": "node index.js",
        "postconsole": "after'index.js'"
    },
    "author": "Mateusz",
    "license": "ISC"
}
```

\-> before index.js  
11  
after index.js

Czasami potrzeba takiego łańcuchu procesów, aby najpierw usunąć jakieś pliki,  
coś zminifikować i tak dalej...

### Instalowanie i zarządzanie zależnościami

`npm install --save is-odd`

Flaga **"--save"** służy do tego, aby nasza paczka zapisała się w pliku _package.json_.  
Dzięki temu po wywołaniu `npm install` zainstalują się nam wszystkie paczki / biblioteki  
występujące w danym projekcie (pliku package.json). 

Flaga **--save-dev** również zapisuje nam zależności, ale będą one w innej sekcji -_devDependencies_,  
i nie będą one wypuszczane na produkcje, czyli po wywołaniu **build**, gdyż są to strykte narzędzia deweloperskie.

#### Save

-   Rozwój logiki biznesowej aplikacji
-   Z tych zależności również korzystają użytkownicy
-   Kod bibliotek wchodzi na produkcję

#### Save Dev

-   Biblioteki usprawniające i ułatwiające nam prace, nie użytkownikom
-   Znajdzie się tutaj _lintowanie_, rzeczy poprawiające jakość kodu, _testowaniem_, _walidacją_ itd.
-   Źródłowe pliki tych paczek, nie idą na produkcję

W **node_modules/.bin** znajdują się wszystkie polecenia wykonywalne.  
Polecenie `eslint index.js` może nie zadziałać, natomiast `./node_modules/.bin/eslint index.js` już powinno.

Jednak wykonywanie za każdym razem czegoś takiego nie jest zbyt wygodne,  
dlatego właśnie mamy skrypty w **package.json**.

```json
{
    "name": "jsproject",
    "version": "1.0.0",
    "description": "My awesome project",
    "main": "index.js",
    
    "scripts": {
        "lint": "eslint index.js",
    },
    "author": "Mateusz",
    "license": "ISC"
}
```

Wywołanie naszego skryptu `npm run lint` zadziała, i nie musieliśmy pisać tej całej długiej  
ścieżki z _node_modules_, ponieważ sekcja _scripts_ z **package.json** wywołuje skrypty z poziomu _node'a_.

Aby usunąć daną zależność zarówno z poziomu _node'a_ jak i _package.json_, możemy wywołać:  
`npm unistall --save-dev eslint`

## Stworzenie pierwszej aplikacji

Do inicjalizacji projektu będziemy korzystać z narzędzia **Create React App**.

    npx create-react-app myApp
    cd myApp
    npm start

**Npx** jest specjalnym programem, który służy nam do instalowania innych programów,  działających w obrębie naszego komputera. Działa w taki sposób, że zawsze stara się wykonać dany program w jak najnowszej wersji.

Przy globalnej instalacji `npm install -g create-react-app` trzeba pilnować czy mamy aktualną wersję itp.

Innymi słowy, **npx** automatycznie wykona _update_ dla naszej aplikacji.

`npm start` - Serwer deweloperski.

W **package.json** znajdziemy takie zależności jak:

-   _react_, czyli nasza biblioteka / framework,
-   _react-dom_, do renderowania naszych aplikacji w obiektowym modelu DOM,
-   _react-scripts_, pozwala bez zbędnej konfiguracji na uruchomienie _testowania_ i _budowania_ naszej aplikacji, 
-   i wiele wiele więcej...

W _public/index.html_ znajdziemy takie element jak:

```html
<div id="root"></div>
```

Jest to głowny pojemnik do którego "wstrzykujemy" naszą aplikację.  
Pliku **index.html** zazwyczaj nie ruszamy, ewentualnie aby dopisać jakieś _meta tagi_.

W katalogu _src_, pierwszym plikiem realizowanym po uruchomieniu naszej aplikacji jest index.js.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // style naszej aplikacji
import App from './App';
import * as serviceWorker from './serviceWorker'; // jest po to aby zapewnić działanie offline

ReactDOM.render(
    /* React.StrictMode służy do pilnowania czy odpowiednie piszemy aplikację,  
    taki komponent sugerujący dobrą składnię */
    <React.StrictMode> 
    	<App />
    </React.StrictMode>,
    document.getElementById('root') // I tutaj właśnie znajduje się to "wstrzyknięcie"
);

serviceWorker.unregister();
```

W pliku **App.js** znajdziemy funkcję, która zwraca głowny widok aplikacji.

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        	<p>
        	   Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
			>
              Learn React
            </a>
		  <header>
    	</div>
    );
}

export default App;
```

W _React'e_ (w Jsx) wykorzystujemy w selektorach **className**, zamiast **class**, gdyż _class_  
jest słowem kluczowym na klasy w kontekście programowania obiektowego.

## Konfiguracja ESLint

Eslint pomaga wypracować styl pisania kodu, aby był jednolity i powtarzalny.  
Przydaje się to w pracy zespołowej, aby każdy kod był jednolity, jest to bardzo ważne.  

_Np;_ 

-   pisanie '' czy "", 
-   typowanie zawsze danych, czy też nie,
-   maksymalna długość lini,
-   czy stawiasz spację po {,
-   czy stawiasz zawsze średnik ;, czy też nie,
-   i wiele wiele innych...

W _Create React App_ jest już zawarty **Eslint**.  
Konfiguracja polega na tym, że w odpowiednim pliku _json'owym_ określamy pewne reguły;

```json
{
  "extends": "react-app", /* te rozszerzenie jest potrzebne aby lint   
    odpowiednie działał na React'cie */
  "rules": {
    "semi": ["error", "always"],
    "no-extra-semi": ["error"],
    "eqeqeq": ["error", "always"]
  }
}
```

Takie przykładowe zasady powinny się znaleźć w naszym pliku **.eslintrc.json**.  
Taki plik umieszczamy w katalogu głownym i zasady powinny działać.

[Tutaj można znaleźć wszelkie reguły które można skonfigurować](eslint.org/docs/rules/). 

Istnieją też przeróżne rozszerzenia zewnętrzne :)

## Konfiguracja testów

Zazwyczaj aplikacje komercyjne są stale rozwijane, co oznacza że kod się zmienia, dochodzą  
kolejne zmiany lub nowe funkcjonalności. Aby zapobiec wielu awarii aplikacji tworzy się testy  
jednostkowe, które informują czy aplikacja działa poprawnie, tak jak byśmy chcieli. Jest to  
bardzo pomocne aby odpalić sobie odpowiednie testy, po wprowadzeniu jakiś modyfikacji.

Głownym plikiem w aplikacji _React'owej_ odpowiadającym za testy jest **App.test.js**;

```javascript
import React from 'react';
import { render } from '@testing-library/react'; // biblioteka testowania React'a
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const helloElement = getByText(/hello react!/i);
  expect(helloElement).toBeInTheDocument(); // sprawdzenie czy dany element znajduje się w DOM'ie
});
```

To takie bardziej "testowanie testów", gdyż zazwyczaj takie teksty,  
będą nam przychodzić z zewnątrz (jakiegoś serwera czy plików).

Warto zdać sobie sprawę że w projektach komercyjnych często zanim zaczniemy realizować  
jakieś zadanie, to najpierw piszemy testy jednostkowe.
