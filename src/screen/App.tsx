import { useState } from "react";

import Form from "../components/Form";
import List from "../components/List";
import { Timer } from "../components/Timer";
import { Book } from "../types/book";

import style from './app.module.scss';

function App() {
  const [book, setBook] = useState<Book[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setBook={setBook} />
      <List book={book} />
      <Timer />
    </div>
  );
}

export default App;
