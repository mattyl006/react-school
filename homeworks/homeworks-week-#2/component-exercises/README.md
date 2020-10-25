# React School - homework week 2

## 1. Clickbait app

Napisz mini serwis informacyjny, czyli aplikację, która posiada dane w postaci tablicy obiektów np.:

```javascript
const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]
```

Dane możesz (jeszcze) przechowywać w komponencie **App**. Na podstawie danych zrób iterację po elementach tablicy, aby wyświetlić każdy pojedynczy artykuł. Do wyświetlenia artykułów możesz wykorzystać tagi **div**, **h2**, oraz **p** np.:

```html
<div>
  <h2>Tytuł</h2>
  <p>Intro</p>
</div>
```

Jeżeli intro jest dłuższe niż 25 znaków, wówczas wyświetl pierwsze 25 znaków, a następnie 3 kropki: .... Przykład: *Po przegranym zakładzie z...*

Następnie stwórz nowy komponent np. *BlogTile*, który wykorzystasz do wyświetlenia każdego pojedynczego wpisu w iteracji.

W aplikacji wykorzystaj stylowanie, ale spróbuj to zrobić za pomocą JavaScript (w CSS będzie zbyt łatwo ;).

## 2. UUID Generator

Napisz aplikację podobną do: (https://www.uuidgenerator.net/)[https://www.uuidgenerator.net/]. Zadaniem tej aplikacji będzie wyświetlenie na ekranie UUID w wersji 4 (np. *7fc72cee-32a1-4f58-97ff-32d202907fba*). Po odświeżeniu przeglądarki (tak, jeszcze zrobimy to w brzydki sposób). Za każdym razem powinniśmy otrzymywać nowy identyfikator.

Tips: przyda Ci się ten pakiet: (https://www.npmjs.com/package/uuid)[https://www.npmjs.com/package/uuid].

## 3. Timer

Napisz licznik, który będzie wyświetlał na stronie liczbę sekund, jakie upłynęły od momentu uruchomienia aplikacji. Czyli startujemy od 0, a następnie co jedną sekundę powinniśmy zaktualizować tę liczbę na ekranie.

Tips: przyda się wykorzystanie stanu komponentu

Tips: spróbuj napisać tę aplikację korzystają zarówno z klas jak i z komponentów funkcyjnych
