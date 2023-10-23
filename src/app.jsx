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

const Book = ({ title, author }) => {
  const getBook = () => {
    const book = books.find((book) => book.title === title);
    console.log(book);
  };
  return (
    <div style={{ marginBottom: '20px', backgroundColor: '#333333' }}>
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={getBook}>Klik me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </div>
  );
};
export default App;
