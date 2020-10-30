# Architektura Aplikacji

## Wprowadzenie

W tym tygodniu zajmowałem się podziałem plików i folderów w projekcie oraz *architekturą aplikacji*.  
Projekty mogą się rozrastać do nieprzewidywalnych rozmiarów, dlatego jeżeli od początku dobrze  
nie podejrzemy do struktury, może być w przyszłości problem. Dobrze jest trzymać się pewnych  
określonych zasad - zwłaszcza jeżeli pracuje się zespołowo. Zostanie tutaj przedstawione kilka  
różnych podejść dotyczących zadbania o dobry przepływ danych.

Odtwarzacz webowy *Spotify* jest napisany w *React'cie*. Ta aplikacja jest dobrym przykładem  
rozbudowanego drzewa komponentów, w którym można pracować zespołowo w taki sposób, aby  
każdy deweloper pracował nad innym zestawem komponentów jednocześnie nie przeszkadzając innym  
pracownikom. Dany deweloper nie musi też posiadać szczegółowej wiedzy na temat tego, co się dzieje  
w innych komponentach.

Jeżeli mamy zainstalowaną wtyczkę **React Developer Tools**, to na każdej stronie wykonanej w *React*,  
powinna nam się pokazać ikonka React'a w panelu. Jesteśmy wtedy w stanie podejrzeć jak wygląda  
drzewo komponentów *React'owych*.

## Struktura plików i katalogów

*Mała uwaga*;  
Czasami, gdy mamy wiele propsów do przekazania komponentowi, to warto przekazać jednego  
propsa z całym obiektem.


```javascript
function App() {
    return(
        <Fragment>
            <h1>Hello React School!</h1>
            <div>
                {newsData.map((elem) => (
                    <News
                        key={`news-${elem.id}`}
                       	data={elem}
                    />
                ))}
            </div>
        </Fragment>
    );
}
```

**Modyfikacja naszej traningowej aplikacji:**

*Wstawienie danych z zadania domowego;*
```javascript
const newsData = [
    {id: 1, author: 'Marcello', title: 'Important! Goverment in chaos!', intro: 'Mr President broke down.'},
    {id: 2, author: 'Matchew', title: 'You can be fit before one month!', intro: 'New diet compile by korean pop stars!'},
    {id: 3, author: 'Martin', title: 'Linux overthrow Windows.', intro: 'All developers recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, author: 'Davido', title: 'Mac Os become open source!', intro: 'Apple have recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open source.'},
];
```

*Dodanie poszczególnych elementów do News i zawarcie ich w komponentach;*
```javascript
const Scoring = ( {score} ) => <p>Ocena: {score}</p>;
const Author = ( {author} ) => <p>Author: {author}</p>;

function News({ header, intro, author }) {
    const [score] = useState(5);

    return (
        <div style={styles}>
            <h2>{header}</h2>
            <p style={styles.p}>{intro}</p>
            <Author author={author} />
            <Scoring score={score} />
        </div>
    );
}
```

*Tablica styli;*
```javascript
const styles = {
    backgroundColor: '#ecf0f1',
    border: '#95a5a6 1px solid',
    padding: 10,
    p: {
        background: '#f1c40f',
    }
};
```

*Główny komponent App;*
```javascript
function App() {
    return(
        <Fragment>
            <h1>Hello React School!</h1>
            <div>
                {newsData.map((elem) => (
                    <News
                        key={`news-${elem.id}`}
                        header={elem.title}
                        intro={elem.intro}
                        author={elem.author}
                    />
                ))}
            </div>
        </Fragment>
    );
}
export default App;
```

Pierwszym i najlepszym podziałem na ułożenie naszego projektu jest założenie katalogu **components/** i  
przeniesienie logiki wszystkich komponentów do niego (opcjonalnie główny komponent App można zostawić).

`components/Scoring.js`
```javascript
import React from 'react';

const Scoring = ( {score} ) => <p>Ocena: {score}</p>;
    export default Scoring;

```

`components/Author.js`
```javascript
import React from 'react';

const Author = ( {author} ) => <p>Author: {author}</p>;
    export default Author;

```

`components/News.js`
```javascript
import React, {useState} from 'react';

import Author from './Author';
import Scoring from './Scoring';

const styles = {
    backgroundColor: '#ecf0f1',
    border: '#95a5a6 1px solid',
    padding: 10,
    p: {
        background: '#f1c40f',
    }
};

function News({ header, intro, author }) {
    const [score] = useState(5);

    return (
        <div style={styles}>
            <h2>{header}</h2>
            <p style={styles.p}>{intro}</p>
            <Author author={author} />
            <Scoring score={score} />
        </div>
    );
}

export default News;
```

```javascript
import React, {Fragment} from 'react';

import News from "./components/News";
import './App.css';

const newsData = [
    {id: 1, author: 'Marcello', title: 'Important! Goverment in chaos!', intro: 'Mr President broke down.'},
    {id: 2, author: 'Matchew', title: 'You can be fit before one month!', intro: 'New diet compile by korean pop stars!'},
    {id: 3, author: 'Martin', title: 'Linux overthrow Windows.', intro: 'All developers recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, author: 'Davido', title: 'Mac Os become open source!', intro: 'Apple have recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open source.'},
];

function App() {
    return(
        <Fragment>
            <h1>Hello React School!</h1>
            <div>
                {newsData.map((elem) => (
                    <News
                        key={`news-${elem.id}`}
                        header={elem.title}
                        intro={elem.intro}
                        author={elem.author}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default App;
```

Teraz mamy większy porządek w kodzie, jak i w strukturze plików.

## Podział domenowy

Wybieramy sobie pewien wycinek - zakres aplikacji, gdzie jest podobna logika.  
W każdym wycinku poszczególne komponenty będą odpowiedzialne za tą logikę.

Wyobraźmy sobie, że przyjdzie ktoś z biznesu i powie, że oprócz tego że wyświetlamy  
nasze *newsy* chcemy mieć też listę użytkowników ze swoimi profilami i za jakiś czas  
możliwość wyświetlania video w odrębnej sekcji.

W tym momencie jeśli popatrzymy na naszą aplikację, to w katalogu *components* mamy  
**Author.js**, **News.js** i **Scoring.js** - komponenty odpowiedzialne za nasze *newsy*.  
Aplikacja jest na razie mała, ale jeśli chcielibyśmy już przygotować projekt na taką  
większą rozbudowę, to możemy to zrobić właśnie **domenowo**, czyli wyodrębnić te elementy /   
wycinki, na które moglibyśmy rozbić nasz projekt.

Czyli w tym przypadku powinniśmy pomyśleć o **artykułach**, **użytkownikach** i **materiałach video**  
jako o trzech odrębnych obszarach aplikacji, gdzie będziemy musieli napisać oddzielne komponenty i logikę.

A więc rozdzielamy nasze komponenty pomiędzy katalogami `articles/`, `movies/` i `users/`.

Załóżmy teraz, że nasze *artykuły* się jeszcze bardziej rozrastają i rozbudowują.  
Mamy wstawione dane to *const'a data* i jeżeli będziemy za jakiś czas te dane pobierać, sortować, filtrować, paginować itd...  
To trochę tej logiki dojdzie. Może się też okazać, że artykuły będą miały być wyświetlane  
w różnych widokach, np. jedne w formie *listy* a inne w formie *grida*.

Więc ten zakres będzie potrzebował komponentów prezentacyjnych, czyli takich które przyjmują 
tylko propsy, a następnie je wyświetlają na ekranie. Jak i będzie potrzebował jakiegoś miejsca związanego z tym jak pobrać dane (sortowanie / filtrowanie / paginacja) i jak je przekazać dalej. 
Zatem jeszcze wewnątrz **articles**, zakładamy jeszcze folder `components/` i `containers/`.
**Containers** jest bliskim tematem *Reduxa*, ale często jest też wykorzystywany w przypadku  komponentów, które muszą jakąś logikę zapewnić.
Więc komponenty reprezentacyjne wkładamy do `articles/components`, a te z logiką do `articles/containers/`.

Gdybyśmy nie mieli takiego podziału na **prezentację** i **logikę**, to wyszukiwanie  
miejsc gdzie trzeba coś pobrać lub zmienić byłoby dość karkołomne. A ten układ pozwoli nam  
w łatwy sposób dojść do komponentu, gdzie jakaś zmiana jest potrzebna.

Katalog *components* w `src/`, możemy zostawić, ponieważ nasza aplikacja może wykorzystywać
również współdzielone komponenty, które będą się znajdować w różnych miejscach w naszej aplikacji. Chociażby *przyciski*, *pola tekstowe*, *inputy* itd...

Dlatego w mniejszych aplikacjach w takim katalogu `src/components` takie komponenty współdzielone, które będą mogły się znaleźć zarówno w części "użytkownicy" czy "artykuły",
a gdy aplikacja będzie dość obszerna, to można się zastanowić czy nie nazwać tego jakoś inaczej np. `src/ui`.

Może się też okazać, że te komponenty współdzielone są potrzebne w wielu projektach, wtedy
taki folder z komponentami wnosi się do osobnej biblioteki i instaluje się ją za pomocą *npm'a*.

Taki podział, na pewno przyda się w wielkich projektach.

## Atomic design

*Atomic design* jest metodologią zaproponowaną przez Brada Frosta, która pozwala podzelić  
aplikację na 5 różnych poziomów, dzięki temu możemy stworzyć uporządkowany *design system*.  
Każdy z tych poziomów jest bardziej zaawansowany, niż poprzedni. Nazwy poziomów nawiązują do terminów chemiczno-fizycznych.

### Poziom I - Atomy

Atom jest najmniejszym elementem interfejsu, którego nie możemy w żaden sposób rozbić na mniejsze cząsteczki. Wszystkie elementy w interfejsie użytkownika możemy wydzielić właśnie jako atomy.

### Poziom II - Molekuły

Również znane jako cząsteczki. Jest to grupa składająca się z dwóch lub więcej atomów.
Każda molekuła / cząsteczka powinna spełniać zasadę pojedyńczej odpowiedzialności, czyli odpowiadać tylko za jedną daną funkcjonalność naszej aplikacji. Oczywiście powinna też być zdatna do wielokrotnego użytku w naszej aplikacji.

### Poziom III - Organizmy

Organizmy mogą być połączone z molekułami lub pojedyńczymi atomami, ale również mogą się z kładać z innych organizmów. Bardzo ważne jest aby elementy połączone ze sobą miały sens.  
Przykładem organizmu w aplikacjach internetowych jest chociażby *header* zawierający *logo*, *nawigację* czy *wyszukiwarkę*.

### Poziom IV - Szablony

Jest to połączenie organizmów, które odwzoruwują finalną wersję strony. Szablony zawierają przykładowe treści - zamiast obrazków są implementowane *placeholdery* a w miejscu danych lorem ipsum.

### Poziom V - Strony

Gotowy widok, szablon wypełniony prawdziwymi danymi. Działają za pomocą *routingów*, czyli adresów url, które się zmieniają w przeglądarce, albo na podstawie danych pobranych z aplikacji. Więc to jest już to co końcowy użytkownik widzi i z tym wykonuje interakcje.

![](image-kgtsppeq.png) 

### Wykorzystanie podziału Atomic Design w React

Tworzymy katalog najwyższej warstwy - czyli strony.

```
src/
    pages/
        Articles.js
        Contact.js
        Home.js
        Movies.js
        Users.js
```

Oraz tworzymy strukturę dla naszych *atomów*, *molekułów*, *organizmów* oraz *szablonów*.

```
src/
	components/
    	atoms/
        molecules/
        organisms/
        templates/
        
    pages/
        Articles.js
        Contact.js
        Home.js
        Movies.js
        Users.js
```

Każdy poziom wykorzystuje elementy / komponenty z niższych poziomów.

![](image-kgtvflbx.png)

Taka metodologia dobra jest do tworzenia designu lub stron internetowych.

## Podejście - pages

Jest to podejście, które się stosuje w **next.js** - to framework wykorzystujący *React'a* ze 
wsparciem *backendu*. Można za jego pomocą zbudować pełną aplikację pobierającą i   
udostępniającą dane. Wspiera również serwer *side-rendering*, czyli wszystkie treści i  
informacje, które do naszej aplikacji *Reactowej* domyślnie są przekazywane, to *next.js*  
potrafi je utrwalić i zrobić z tego *snapshot*, który jest przekazywany w odpowiednie miejsca, dzięki czemu uzyskujemy lepsze pozycjonowanie.

Bardzo dojrzałe rozwiązanie, już coraz więcej aplikacji korzysta z *next'a*.
*Next.js* wykorzystał pewne podejście do struktury projektu, które jest wykorzystywane również w aplikacjach innego typu - jest unikalne.

Również jak w *atomic design* mamy strony w katalogu *pages*. W tym przypadku będą one nam odpowiadały za dane ścieżki, które będą znajdować się w przeglądarce.

Czyli w `src/pages` będą znajdować się komponenty, które pobierać dane (np rest api, graphQL) i udostępniać je w dół za pomocą innych komponentów.

Natomiast w `src/components`, możemy wydzielić nasze pozostałe komponenty zwyczajnie, lub też zastosować konwencje *domenową*, jeśli projekt będzie się mocno rozrastać. Jednak często sporą część logiki możemy mieć w komponentach *pages*.

```
src/
	components/
    	Author/
        	Author.js
        Scoring/
        	Scoring.js
    pages/
    	Articles.js
        Contact.js
        Home.js
        Movies.js
        Users.js
```

```javascript
import Author from '../components/Author/Author';
import Scoring from '../components/Scoring/Scoring';
```
Takie *importy* są mało czytelne, więc jako udogodnienie możemy zastosować **index.js** z *importem* i *exportem* na właściwy komponent. Wtedy `../components/Author` wystarczy.

## Barrels

Jak zarządzać *importami*, gdy mamy bardziej rozbudowaną strukturę plików i katalogów?

Przykładowy *Header* z logo oraz linkami, osadzony w `src/components/Header/Header.js`, może po pewnym czasie się rozrastać.

```javascript
import React from 'react';

function Header() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
      </div>
    </div>
  );
}

export default Header;
```

Można stwierdzić, że *Logo* potrzebuje być zawarte jako osobny komponent, tak jak i *linki*,  aby chociażby inne osoby z zespołu mogli nad nimi pracować. W którym miejscu stworzyć te komponenty?

Jako że raczej, będą wykorzystywane tylko w *Header*, to można je utworzyć w katalogu `src/components/Header/`. Ale jeśli okaże się, że są potrzebne również w innych miejscach, to *importowanie* ich, może być uciążliwe.

I tutaj pojawia się pojęcie **barrel**;

`Header/index.js`:

```javascript
import Header from './Header';
import Logo from './Logo';
import NavLink from './Navlink';

export default Header;
export {
  Logo,
  NavLink
};
```

Wtedy struktura *importów* w *App.js* może się zmienić następująco;

```javascript
import {
    Logo, NavLink
} from './components/Header';
```

Istnieje również inny zapis, który umożliwia nam zapisać te *importy* z `Header/index.js` w jednej linijce.

```javascript
export { default } from './Header';
export { default as Logo } from './Logo';
export { default as NavLink } from './NavLink';
```

## Kompozycja komponentów

To naturalny wzorzec projektowy - tworzymy komponenty, które mogą być *reużywalne*.
Na przykład wspólny kontener dla listy linków, listy kontaktów i listy użytkowników.
To spowodowałoby, że właściwie to mielibyśmy jeden komponent, ale z różnymi danymi.
A jeśli nasz kontener miałby przyjmować po prostu listę (obojętnie czego) i byłby stylowany w ten sam sposób, to czy jego powinno interesować to jakie komponenty są wewnątrz czy nie?
Jeżeli się okaże, że nie, i ma to tylko *owrapować*, to nie będziemy musieli tworzyć osobnych komponentów pod takie opakowanie - przekażemy mu tylko komponenty **podrzędne**, które już mają swoje własne definicje i osobnych plikach będą zarządzane, utrzymywane i dalej rozwijane.

```javascript
import React from 'react';

const styles = {
    marginBottom: 24,
};

function Menu({ children }) {
    return (
      <nav style={styles}>
        {children}
	  </nav>
	);
}

export default Menu;
```

Możemy użyć danego komponentu jako selektora grupowego, dzięki specjalnemu *propsowi* dostarczonego przez *reacta* - **children**.

```javascript
function Header() {
	return (
      <div>
        <Logo />
        <Menu>
          <NavLink to="/" label="Link 1" />
          <NavLink to="/" label="Link 1" />
          <NavLink to="/" label="Link 1" />
        </Menu>
      </div>
    );
}
```

Teraz osobne siły mogą pracować nad *Menu*, a inne nad *Linkami*, gdyż te elementy będą stylowane osobno, i kontenera *Menu* nie musi interesować co jest w środku pod nim.

## Tworzenie szablonu aplikacji za pomocą komponentów

```
pages/
	Articles.js
    Contact.js
    Home.js
    Movies.js
    User.js
```

Te wszystkie strony mogą mieć ten sam szablon. Czyli nagłówek nawigacyjny i stopkę taką samą, a jedyne co będzie je różnić to treść w głównym kontenerze treści strony, czyli nasze artykuły.

Stwórzmy stronę - *Articles.js*.  
Komponent *News.js* będzie odpowiadał za naszą treść;

```javascript
import React, {useState} from 'react';

import Author from '../Author';
import Scoring from '../Scoring';

const styles = {
    backgroundColor: '#ecf0f1',
    border: '#95a5a6 1px solid',
    padding: 10,
    p: {
        background: '#f1c40f',
    }
};

function News({ header, intro, author }) {
    const [score] = useState(5);

    return (
        <div style={styles}>
            <h2>{header}</h2>
            <p style={styles.p}>{intro}</p>
            <Author author={author} />
            <Scoring score={score} />
        </div>
    );
}

export default News;
```

Naszą strukturę danych dotyczącą artykułów przenosimy z *App.js* do *Articles.js*.
Iterację komponentu *News.js* również.

```javascript
import React from 'react';

import News from '../components/News';

const newsData = [
    {id: 1, author: 'Marcello', title: 'Important! Goverment in chaos!', intro: 'Mr President 	  broke down.'},
    {id: 2, author: 'Matchew', title: 'You can be fit before one month!', intro: 'New diet 		compile by korean pop stars!'},
    {id: 3, author: 'Martin', title: 'Linux overthrow Windows.', intro: 'All developers        	   recognize that Windows is very shoddy and start use only Linux systems.'},
    {id: 4, author: 'Davido', title: 'Mac Os become open source!', intro: 'Apple have 		     recognized that Mac Os is the same as Linux softwares so they have shared Mac Os as open     source.'},
];

function Articles() {
     return (
        <div>
            {newsData.map((elem) => (
                <News
                	key={`news-${elem.id}`}
                    header={elem.title}
                    intro={elem.intro}
                    author={elem.author}
                />
            ))}
        </div>
    );
}

export default Articles;
```

Zakładamy komponent *Content.js*, aby mieć kontener na naszą treść na stronie.

```javascript
import React from 'react';

function Content({ children }) {
	return <main>{children}</main>;   
}

export default Content;
```

Stworzenie Footera;

```javascript
import React from 'react';

function Footer() {
	<footer>&copy; 2020 Szkoła Reacta</footer>   
}

export default Footer;
```

Końcowy wygląd *App.js*;

```javascript
import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Articles from './components/Articles';
import './App.css';

function App() {
	return (
      <div>
        <Header />
        <Content>
          <Articles />
        </Content>
        <Footer />
      </div>
    );
}

export default App;
```

Końcowa struktura plików;

```
src/
	components/
    	Author/
        	Author.js
            index.js
        Content/
        	Content.js
            index.js
        Footer/
        	Footer.js
            index.js
        Header/
        	Header.js
            index.js
        News/
        	News.js
            index.js
        Scoring/
        	Scoring.js
            index.js
    pages/
    	Articles.js
        Contact.js
        Home.js
        Movies.js
        Users.js
```

## Komponenty stanowe a bezstanowe

Komponenty **stanowe** są komponentami, które mają swój **wewnętrzny stan**.

W tej chwili w naszej aplikacji komponentem stanowym jest *News.js*, ponieważ korzysta
z **useState**, na razie trochę na wyrost gdyż jest tam wartość *5*, której jeszcze nie zmieniamy. Natomiast on swój *wewnętrzny stan* ma, tak jak np. *formularze* będą posiadać swój stan, którym będziemy sterowali.

A komponenty które nie posiadają stanu (useState, czy state) są komponentami **bezstanowymi**. Tak jak u nas *NavLink.js* czy chociażby *Header.js*.

Przed wprowadzaniem *hook'ów* ten podział był bardzo prosty. Jeśli komponent potrzebował *wewnętrznego stanu*, to wtedy pisaliśmy go **klasowo**, natomiast jeśli nie, to **funkcyjnie**.

Teraz możemy w komponentach *funkcyjnych* również korzystać ze **stanu** dzięki właśnie **hook'om** takim jak np. **useState**.

Teraz mamy wybór, a nie przymus.
