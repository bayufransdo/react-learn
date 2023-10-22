const books = [
  {
    title: 'first book',
    author: 'babayo',
    id: 1,
  },
  {
    title: 'second book',
    author: 'babaji',
    id: 2,
  },
];

const Book = ({ id, title, author }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">{id}</a>
        </li>
        <li>
          <a href="#">{title}</a>
        </li>
        <li>
          <a href="#">{author}</a>
        </li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {books.map((book) => {
        return <Book {...book} asd="234" key={book.id} />;
      })}
    </div>
  );
};
export default App;
