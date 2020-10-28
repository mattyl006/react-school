# Komponenty

* klasowe
* funkcyjne
* stan komponentów

**Mała powtórka flow create reat app'a:**  
Do zrenderowania aplikacji używamy *ReactDOM.render*,  
który zawiera dwa argumenty:  
1. Pierwszym jest wskazanie komponentu, który się wyrenderuje.
2. Drugi natomiast odpowiada za wskazanie selektora w *index.html*, w którym główny komponent się znajdzie.

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```


## Po co korzystać z komponentów?

Gdy korzystamy z jakiś systemów po stronie *backendu*, to wygenerowanie w pętli takich struktur nie jest problemem:

```html
<div>
    <section>
        <h2>Header 1</h2>
        <p>Intro 1</p>
    </section>
    <section>
        <h2>Header 2: Breaking news</h2>
        <p>Intro 2</p>
    </section>
    <section>
        <h2>Header 3 </h2>
        <p>Intro 3: Noc mnie woła a ja wole grać w lola</p>
    </section>
    <!-- I tak dalej i dalej... -->
</div>
```

Natomiast na frontendzie musimy namnożyć tą treść kopiując i wklejając szablony,  
lub też rozwiązać to jakoś w *js* pobierać informacje z serwera, a następnie dynamicznie tworzyć 
te tagi w javascripcie, natomiast to też jest dosyć karkołomny sposób.

A nasze komponenty pozwolą nam na stworzenie czegoś takiego:

```javascript
<div>
    <News h2="Header 1" p="Intro 1" />
	<News h2="Header 2: Breaking news" p="Intro 2" />
    <News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
	<!-- I tak dalej i dalej... -->
</div>
```

Kod został ograniczony i jest większy porządek :) Daje to ogrom możliwości.  
Można tworzyć własne biblioteki komponentów i razem z zespołem korzystać z określonych.

## Stworzenie pierwszego komponentu

W przegladarce mamy DOM - *document object model*, natomiast React korzysta z  
**Virtual DOM'u**, gdzie najpierw porównuje jakie są zmiany pomiędzy *komponentami*, ich *stanem* 
oraz ich *atrybutami*, następnie jeżeli jest taka potrzeba i zachodzi konieczność przemiany  
jakiegoś fragmentu na ekranie, to wówczas ta zmiana nastąpi - nie zawsze dla całej aplikacji,  
często tylko dla pewnego wycinku danej aplikacji, dlatego *React* jest dosyć szybki.

Aby to zapewnić, nasze komponenty muszą być renderowane gdzieś w *drzewie DOM* za pomocą  
*ReactDOM* renderer'a.

Komponenty są to funkcje, które zwracają najczęściej *html'a*.

```javascript
function App() {
    return (
        <div className="App">
        	<p>Hello!</p>
        	<p>Szkoło Reacta</p>
        </div>
    );
}
```

Spróbujmy osadzić nasz kod dotyczący nowości w komponencie App;

```javascript
function App() {
    return (
        <News h2="Header 1" p="Intro 1" />
		<News h2="Header 2: Breaking news" p="Intro 2" />
    	<News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
    );
}
```

Zostanie nam zwrócony błąd, ponieważ komponenty muszą zwracać tylko **jeden** element.  
Zróbmy to w ten sposób:

```javascript
function App() {
    return (
        <div>
            <News h2="Header 1" p="Intro 1" />
            <News h2="Header 2: Breaking news" p="Intro 2" />
            <News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}
```

Teraz zwracamy poprawnie, jednak nasz element *News* musi być zdefiniowany, oraz musi być  
funcją zwracającą łańcuch znaków, a właściwie jakieś selektory *html*.

```javascript
const News = () => null // funkcja strzałkowa zwracająca null'a - czyli nic

function App() {
    return (
        <div>
            <News h2="Header 1" p="Intro 1" />
            <News h2="Header 2: Breaking news" p="Intro 2" />
            <News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}
```

W tym momencie powinna wyrenderować się nam pusta strona.

```javascript
function News() {
	return (
        <section>
        	<h2>Header</h2>
        	<p>Intro</p>
        </section>
    );
} // Ostatnio taki zapis funkcyjny jest bardziej popularny

function App() {
    return (
        <div>
            <News h2="Header 1" p="Intro 1" />
            <News h2="Header 2: Breaking news" p="Intro 2" />
            <News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}
```
![](image-kglz2vht.png)

Teraz powinny się wyświetlić nasze 3 komponenty, jednak co z przemienną trześcią przekazywaną w argumentach?

## Komponenty funkcyjne

Jak było wspomniane, komponenty mogą być tak naprawdę funkcjami, a funkcje posiadają argumenty.  
Więc możemy przekazać pewne dynamiczne wartości w ten o to sposób;

```javascript
function News(props) { // dane przekazywane do funkcji w postaci json to tak zwany "props"
    return (
        <section>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </section>
    );
} /* za pomocą klamerek {} bindujemy jakieś dynamiczne wartości, bez nich dostaniemy normalny    
łańcuch string */

function App() {
    return (
        <div>
            <News h2="Header 1" p="Intro 1" />
            <News h2="Header 2: Breaking news" p="Intro 2" />
            <News h2="Header 3" p="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}
```

![](image-kglzilq5.png)

W końcu mamy nasze komponenty z dynamicznie przekazywaną treścią.

Aczkolwiek nasz kod, jeszcze nie jest idealny, zróbmy co nie co refaktor poprzez destrukturyzacje 
propsa, oraz odpowiedniego nazewnictwa zmiennych.

```javascript
function News({header, intro}) { // destrukturyzacja propsa, popularna metoda gdy jest mało zmiennych  
    /*Gdy jest wiele zmiennych zaleca się taki sposób: `const {header, intro, ...} = props`*/
    return (
        <section>
            <h2>{header}</h2>
            <p>{intro}</p>
        </section>
    );
} /* za pomocą klamerek {} bindujemy jakieś dynamiczne wartości, bez nich dostaniemy normalny    
łańcuch string */

function App() {
    return (
        <div>
            <News header="Header 1" intro="Intro 1" />
            <News header="Header 2: Breaking news" intro="Intro 2" />
            <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
        </div>
    );
}
```
Teraz kod jest "czystszy" :)

## Czym jest JSX?

Jest to format, którego zadaniem jest połączenie *html'a* i *javascriptu*.  
Mogłoby się wydawać, że jest to szalona mieszanka porównując to np. do Angulara, który  
wyraźnie dzieli *html'a*, *js'a* i *stylowanie*.  

Aczkolwiek okazuje się, że jeśli dobrze do tego podejdziemy, to jest w tym sens.  
W końcu *Reacta* stworzyli deweloperzy facebooka więc musieli to zrobić w oparciu o jakieś cenne doświadczenia.

Dzięki temu na przykład, łatwo stworzyć uniwersalny *komponent*, który będziemy mogli  
osadzać w innych aplikacjach.

*Przykład instrukcji warunkowej;*

```javascript
import React from 'react';

const DAY = 'saturday';

function News({header, intro}) {
    return (
        <section>
            <h2>{header}</h2>
            <p>{intro}</p>
        </section>
    );
}

function App() {
    return (
        <div>
        	<h1>Hello React School!</h1>
        	{(DAY == 'monday')
    		?
        	<div>
                <News header="Header 1" intro="Intro 1" />
                <News header="Header 2: Breaking news" intro="Intro 2" />
                <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
        	</div>
    		:
    		<p>We dont have news from monday.</p>
        	}
        </div>
    );
}
```

Jednak z czystym sumieniem możemy stwierdzić, że taki kod jest paskudny!  
Nie należy przesadzać ze stosowanie skróconej instrukcji warunkowej *"? :"*.  
Ta metoda jest dobra, dla szybkich / krótkich instrukcji **"tak"** lub **"nie"**.  
Natomiast dla takiej struktury powinno to wyglądać bardziej tak;

```javascript
import React from 'react';

const DAY = 'saturday';

function News({header, intro}) {
    return (
        <section>
            <h2>{header}</h2>
            <p>{intro}</p>
        </section>
    );
}

function App() {
    const checkDay = () => {
      if(DAY === 'monday') {
        return (
          <div>
            <h1>Hello React School!</h1>
            <News header="Header 1" intro="Intro 1" />
            <News header="Header 2: Breaking news" intro="Intro 2" />
            <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
          </div>
        );
      }
      else {
        return(
          <div>
            <h1>Hello React School!</h1>
            <p>We dont have news from monday.</p>
          </div>
        );
      }
    }
    return (
        <div>
          {checkDay()}
        </div>
    );
}
```

Zawarliśmy funkcję pomocniczą w funkcji, gdyż w *JSX* w ciele *return*, nie możemy używać  
normalnych instrukcji *if else*.

## Pisanie html w JSX

Oczywiście *JSX* bez zaimportowania naszego Reacta nie będzie działać.

```javascript
import React from 'react';
```

To jest istotne, aby **babelowi**, który zamienia podspodem nasz kod, na już właściwy *html*,  
przekazać informację, że plik w którym się znajdujemy zawiera *JSX* i trzeba go odpowiednio  
przeformatować. Czyli tam gdzie piszemy *JSX* powinniśmy zaimportować Reacta.

```javascript
function News({header, intro}) {
  return (
	<div>
      <h2>{header}</h2>
      <p>{intro}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <News header="Header 1" intro="Intro 1" />
      <News header="Header 2: Breaking news" intro="Intro 2" />
      <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
    </div>
  );
}
```

Jeśli posiadamy wtyczkę React Devtools to w sekcji **Components** znajdziemy strukturę naszych  
komponentów. Obecnie będzie ona wyglądać tak;

```
App
	News
    News
    News
```

Jednak gdy zajrzymy do normalnego DOM'a;

```html
<div id="root">
    <div> <!-- Ten kontener wydaje się nie potrzebny -->
      <div>
          <h2>Header 1</h2>
          <p>Intro 1</p>
      </div>
      <div>...</div>
      <div>...</div>
    </div>
</div>
```
Przy tym widoku element pod divem o id *root* wydaje się nie potrzebny. Możemy uniknąć wrapowania 
komponentu w *divie*, są na to dwa sposoby.

1. Zaimportowanie komponentu **Fragment** i wykorzystanie go zamiast *div'a*.

```javascript
import React, { Fragment } from 'react';

import './App.css';

function News({header, intro}) {
  return (
	<div>
      <h2>{header}</h2>
      <p>{intro}</p>
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <News header="Header 1" intro="Intro 1" />
      <News header="Header 2: Breaking news" intro="Intro 2" />
      <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
    </Fragment>
  );
}
```

2. Użycia skrótowców (pustych znaczników selektorowych). Bardziej polecany na początek jest poprzedni sposób.

```javascript
import React from 'react';

import './App.css';

function News({header, intro}) {
  return (
	<div>
      <h2>{header}</h2>
      <p>{intro}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <News header="Header 1" intro="Intro 1" />
      <News header="Header 2: Breaking news" intro="Intro 2" />
      <News header="Header 3" intro="Intro 3: Noc mnie woła a ja wole grać w lola" />
    </>
  );
}
```

W obu przypadkach nasz DOM będzie tym razem wyglądać tak;

```html
<div id="root">
  <div>
    <h2>Header 1</h2>
    <p>Intro 1</p>
  </div>
  <div>...</div>
  <div>...</div>
</div>
```
Czyli teraz pod *rootowym divem* nie mamy niepotrzebnego kontenera, który mógłby nam  
przeszkadzać, chociażby przy stylowaniu.

A w ten sposób możemy *przeiterować* nasze komponenty;

```javascript
const data = [
    {
        header: 'Header 1', intro: 'Intro 1',
    }, {
        header: 'Header 2: Breaking news', intro: 'Intro 2',
    }, {
        header: 'Header 3', intro: 'Intro 3: Noc mnie woła a ja wole grać w lola',
    }
];

function App() {
    return (
      <div>
        {data.map((elem, index) => ( // Trzeba wprowadzić jeszcze klucz w propsie "key"
          <News key={`news-${index}`} header={elem.header} intro={elem.intro} />
        ))} 
      </div>
    );
}
```
Klucze są po to, aby w razie zmiany,  
React przerenderował tylko jeden element z iteracji, a nie wszystkie.  
Bardzo łatwo można się z nimi pomylić i Reacta wprowadzić w błąd,  
dlatego tworzymy prefiksy tak jak tutaj - `news-${index}`.

## Stylowanie

*React* jest biblioteką, i tak na dobrą sprawę twórcy nie określili konkretnego schematu.  
Jak należy stylować. Metod jest wiele, bardziej szczegółowo o nich będzie w **module VI**.  
Na razie opracujemy pewne dwa sposoby.

### Stylowanie przez CSS'y

```javascript
function News({header, intro}) {
  return (
	<div className="News"> // Za pomocą propsa className
      <h2>{header}</h2>
      <p>{intro}</p>
    </div>
  );
}
```

```css
.News {
    background-color: green;
    border: red 1px solid;
    padding: 10px;
}

.News p {
    background: yellow;
}
```

Aby kolory były mniej "choinkowe" można skorzystać z tej [palety kolorów](https://flatuicolors.com/).

### Za pomocą obiektu styles w JS

```javascript
const styles = {
    backgroundColor: '#ecf0f1', // nazwy musimy pisać cammel case'em
    border: '#95a5a6 1px solid',
    padding: 10, // nie musimy podawać px, sam number wystarczy w przypadku js
    p: {
        background: '#f1c40f',
    }
};

function News({header, intro}) {
  return (
	<div style={styles}> // Za pomocą propsa className
      <h2>{header}</h2>
      <p style={styles.p}>{intro}</p>
    </div>
  );
}
```

Stylowanie przez Javascript ma swoje zalety - mianowicie możemy zmienne typu kolory trzymać  
w jednym pliku gdzie mamy wspólne wartości dla jakiejś skórki (coś jak w przypadku Sass'a SCSS'a).  

## Komponenty klasowe

Dlaczego komponenty klasowe, skoro już teraz bardziej popularne jest działanie na *hookach*  
(funkcyjnych komponentach) - dlatego, że te klasowe są obecne już w wielu projektach i raczej  
zostaną jeszcze na długo. Nie da się każdego projektu łatwo refaktoryzować na *hooki*,  
klasy były o wiele wcześniej, a *hooki* dopiero pojawiły sie w 19-astym roku. Znajomość klas również  przyda się na rekrutacji, często padają pytania jak 
działają komponenty klasowe w JavaScripcie. Więc znajomość zarówno komponentów klasowych jak i funkcyjnych tych opartych na hookach się przyda.

Komponenty klasowe mają swoje cykle życia - będzie o tym w kolejnych lekcjach.  
Natomiast, aby cokolwiek móc zwrócić na ekranie, to trzeba korzystać ze specjalnego API.
I tutaj się pojawia metoda **render()**, która może zwracać *JSX'a*.

```javascript
class News extends React.Component { // musi rozszerzać klasę dostarczoną przez React
    // Dzieki temu mamy dostęp do niektórych metod z Component i możemy je teraz nadpisywać
    render() {
      const { header, intro } = this.props;
      return(
        <div style={styles}>
          <h2>{header}</h2>
          <p style={styles.p}>{intro}</p>
        </div>
      );   
    }
}
```

W metodzie *render*, mamy też dostęp do pola **this.props**, dzięki któremu możemy przekazywać argumenty.  
Musimy dziedziczyć z klasy *React.Component*, bo dopiero ona dostarcza nam metody, które w  
odpowiedni sposób będą obsługiwały nasz komponent. Wewnątrz tej klasy znajdują się *metody cyklu 
życia komponentu*, ale też wymogiem jest napisanie cokolwiek do metody *render*.

To co może być czytelniejsze w komponentach klasowych, to metody, które mówią nam w jakim cyklu  
życia nasz komponent aktualnie się znajduje. To może być cykl:
* Montowania komponentu
* Gdy komponent zmienił jakieś dane
* Kiedy komponent się odmontowywuje (już nie jest potrzebny na ekranie)  

To do tego wszystkiego mamy odpowiednie metody, w których zawieramy odpowiednie intrukcje  
zgodne z tymi funkcjonalnościami.

Bardzo często wykorzystuje się w komponentach klasowych również **konstruktor**, który  
przyjmuje propsy z zewnątrz i warto je przekazać do komponentu nadrzędnego - przynajmniej  
taka była kiedyś praktyka.

```javascript
class News extends React.Component {
    constructor(props) {
      super(props); // przekazanie propsów do komponentu nadrzędnego
    }
    render() {
      const { header, intro } = this.props;
      return(
        <div style={styles}>
          <h2>{header}</h2>
          <p style={styles.p}>{intro}</p>
        </div>
      );   
    }
}
```

Na szczęście *babel* cały czas się rozwija i za jakiś czas w ogóle nie będziemy musieli  
korzystać z instrukcji *super*.

Konstruktor tak jak w innych językach programowania wywoływany jest w momencie, kiedy  
powstaje instancja danej klasy.

## Stan komponentów

Do tej pory korzystaliśmy z *props'ów* i możemy o nich myśleć jak o argumentach funkcji  
przekazywanych z zewnątrz.

Natomiast **stan** jest to wartość / obiekt, który znajduje się wewnątrz komponentu i  
definiuje jakieś jego wartości.

Gdy mamy jakiś formularz *html'owy*, to w inpucie zachowane są wszelkie informację jak  
wprowadzana wartość została zmieniana - tak samo możemy przechowywać informację wewnątrz  
naszych komponentów i je potem udostępniać komponentom, które są niżej osadzone albo  
ewentualnie wysyłać gdzieś na serwer.

```javascript
class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = { // stan w komponencie klasowym jest przechowywany jako obiekt
        date: new Date(),
        score: 5
      };
    }
    render() {
      const { header, intro } = this.props;
      const { score } = this.state; /* to tego co jest w stanie, możemy odwoływać się tak jak w
        propsach */
      return(
        <div style={styles}>
          <h2>{header}</h2>
          <p style={styles.p}>{intro}</p>
		  <p>{score}</p>
        </div>
      );   
    }
}
```
Stan i propsy są tylko do odczytu, więc nie można sobie nagle zmienić `this.state = 6`.
Do zmianu stanu służy specjalna metoda **this.setState**.

```javascript
class News extends React.Component {
    
    state = {
      date: new Date(),
      score: 5
    };

    render() {
      const { header, intro } = this.props;
      const { score } = this.state;
      return(
        <div style={styles}>
          <h2>{header}</h2>
          <p style={styles.p}>{intro}</p>
		  <p>{score}</p>
        </div>
      );   
    }
}
```
Zmiany stanu mogą się odbywać w zależności od interakcji, która będzie się odbywać w naszym  
projekcie. Na przykład jakiś przycisk, lub nasłuchiwanie na jakieś zdarzenia i wtedy nasz stan  
może się zmienić.

```javascript
class News extends React.Component {
    
    state = {
      date: new Date(),
      score: 5
    };

	componentDidMount() { // Ta metoda odbywa się gdy komponent zostanie zamontowany
        this.setState({ score: 6 });
    }

    render() {
      const { header, intro } = this.props;
      const { score } = this.state;
      return(
        <div style={styles}>
          <h2>{header}</h2>
          <p style={styles.p}>{intro}</p>
		  <p>{score}</p>
        </div>
      );   
    }
}
```

To wiąże się z tym, kiedy React przemalowuje nasze komponenty na ekranie / kiedy się  
przerenderuje. I tu zachodzą trzy przypadki:
* gdy zmienią się propsy, czyli gdy dostaniemy nowe wartości dla naszych props'ów,
* gdy zmieni się stan, czyli naszą metodę **this.setState**,
* i kiedy się wykona *force update*, ale to jest raczej nie zalecane.

Metoda **setState** jest operacją **asynchroniczną**, a to oznacza, że tak do końca nie wiemy  
kiedy ten stan się zaaktualizuje. Czyli gdy sobie postawimy jakąś przykładową zmienną *loading*:

```javascript
componentDidMount() {
  let loading = true;
  this.setState({ score: 6 });
  loading = false;
}
```
To po wykonaniu inicjalizacji *loading*, metoda *setState* odłoży się na stos JavaScript'owy  
(tak na później), a następnie *loading* zmieni wartość na *false*, czyli tak naprawdę, bardzo  
możliwe że operacja zmianu stanu zrealizuje się jako ostatnia, mimo że instynktownie moglibyśmy  
sądzić, że wykona się jako druga.

Dlatego taki kod jest bez sensu, i aby się upewnić, że operacja zmiany stanu została dokonana,  
aby po nim wykonać jakąś operację, to możemy skorzystać z drugiego argumentu *setState'u*;

```javascript
componentDidMount() {
  let loading = true;
  this.setState({ score: 6 }, () => {
    loading = false;
  });
}
```
A drugim argumentem tej metody jest właśnie *callback*, który odbędzie się właśnie wtedy  
kiedy ten stan zostanie już faktycznie zaaktualizowany. Więc kod powinien wyglądać właśnie tak,  
jak powyżej.

Zazwyczaj *komponenty klasowe* używało się wtedy, kiedy trzeba było mieć dostęp do stanu, jednak 
wprowadzono również obsługę stanów w *komponentach funkcyjnych*, dzięki *hook'om*.

Wystarczy zimportować odpowiedniego *hook'a* **useState** - i to jest funkcja udostępniająca tablice z *nazwąZmiennej* i *callback*  (funkcja służąca do zmiany tej pierwszej wartości).

```javascript
import React, { useState } from 'react';

function News({ header, intro }) {
    const [score, setScore] = useState(5);
    // setScore(10);
    /* zmienia wartość score na 10, ale nie można robić tego w tym miejscu, bo
    wtedy za każdym razem nasz komponent zacznie się renderować, to będzie błąd */
    return (
      <div style={styles}>
        <h2>{header}</h2>
		<p style={styles.p}>{intro}</p>
		<p>{score}</p>
      </div>
    )
}
```
Dobrym miejscem do wywołania *setScore* są jakieś *call'backi*, albo chociażby  
*effectUseEffects*, z którego będziemy korzystać później.

Podsumowując **stan** są to wewnętrzne informacje, które znajdują się w obrębie komponentu.

W przypadku komponentów klasowych musimy skorzystać z **state** zdefiniowanym w taki sposób:
```javascript
state = {
    ...
};
```
albo w konstruktorze odwołujemy się za pomocą `this.state`.

Natomiast w komponentach funkcyjnych korzystamy z *hook'a* **useState**, który przyjmuje  
domyślną wartość, a następnie zwraca nam tablicę gdzie na pozycji zerowej określamy nazwę  
zmiennej, która będzie przechowywać ten *stan*, a w następnym funkcję, która będzie obsługiwać  
zmianę tego *stanu*.

## DOM vs Virtual DOM

Budowa **Timera**, ale bez *React'a*.

```html
<html>
  <body>
    <div id="root">
        <div id="timer"></div>
    </div>
  </body>
</html
```

```javascript
const timerElement = document.getElementById('timer');
let timerValue = 1;

const render = (value) => {
    timerElement.textContent = `Value: ${value}`;
}

const timer = setInterval(() => { // setInterval to funkcja realizująca coś z opóźnieniem
    render(timerValue);
    timerValue++;
}, 1000);
```

W funkcji *render* znajduje się tylko tekst, gdybyśmy mieli tam *html'a* i bardziej  
rozbudowaną, zagnieżdżoną strukturę, to tworzenie tego kontentu za pomocą sklejania  
*string'ów* i wartości mogło by się okazać karkołomne i nie wygodne.

Wyobraźmy sobie na przykład sytuację obsługi **formularzy** albo sytuację, gdzie  
mamy tablicę z obiektami i chcielibyśmy każdy obiekt z tej tablicy wyrenderować  
na ekranie.

Oczywiście można by było to zrobić wykorzystając **map'a** albo **foreach'a**.  
Potem musielibyśmy skleić te wszystkie elementy i napisać do nich *html*, czyli  
prawdopodobnie przed lub po obiekcie owrapować to np. w *div'a*. A następnie  
wstawić za pomocą *js'a* w odpowiednie miejsce.

Te operacje musiałyby tak przebiegać, ponieważ operujemy bezpośrednio na drzewie **DOM**.

Natomiast nasz **React**, jeżeli ma komponent klasowy i tą metodę **render** - będzie  
wyświetlał to co zdefiniujemy w tym *renderze*. Jeśli mamy komponent funkcyjny  
no to wyświetli nam tą wartość, która zostanie przekazana jako wynik, czyli jako  
*return* do komponentu funkcyjnego.

React nie działa bezpośrednio na *Drzewie DOM*. Pomiędzy naszym kodem, a *DOM'em*  
*javascriptowym* istnieje jeszcze **Virtual DOM**, czyli struktura *React'owa*, za  
pomocą której *React* porównuje sobie te operacje, które my wykonujemy na **stanie**,  
albo jeśli zmieniają się w **propsach**, następnie w swoim *Virtual DOM'e* je modyfikuje  
i **tylko to co się zmieniło, on już sam nam wstrzykuje do DOM'u**.

Aplikację *React'owe* przeważnie osadzamy w tym miejscu `<div id="root"> ...` - jednym  
głownym elemencie, więc zanim coś się faktycznie wyrenderuje to *React* za pomocą swoich  
algorytmów przekalkuluje czy *warto* i czy ma *sens*.

Nasz aplikację będą się oczywiście zmieniały, same będą się *malowały* na ekranie,  
nie będziemy musieli tych funkcji *renderujących* wykonywać, czy to w przypadku  
*timeoutu*, czy innej jednej zmiennej. Ponieważ o to zadba *React*, a jeżeli zmieni się  
w nim wartość stanu lub komponent dostanie nowe *propsy*, to komponent automatycznie  
*przemaluje* się na ekranie.

To się właśnie dzieje pod spodem, to wszystko dzieje się z wykorzystaniem *Virtual DOM'u*,  
więc z naszej perspektywy pisząc w *React'cie* musimy się właściwie tylko skupić na  
tym jak *treść* ma wyglądać, *komponenty*, jak zarządzać *stanem* i jak odczytywać *propsy*.
