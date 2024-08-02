import { useState } from "react";

import Form from "../components/Form";
import List from "../components/List";
import { Timer } from "../components/Timer";
import { Book } from "../types/book";

import style from './app.module.scss';

function App() {
  const [book, setBook] = useState<Book[] | []>([]);
  const [selected, setSelected] = useState<Book>();

  function selectBook(selectedBook: Book) {
    setSelected(selectedBook);
    setBook(previousBook => previousBook.map(book => ({
      ...book,
      selected: book.id === selectedBook.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setBook={setBook} />
      <List
        book={book}
        selectBook={selectBook}
      />
      <Timer selected={selected} />
    </div>
  );
}

export default App;
