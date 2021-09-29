import Header from "./components/Header";
import Dog from "./components/Dog/Dog"
import NavigationBar from "./components/NavigationBar";

function App() {
  const dogs = [
    {
      id: 1,
      breed: 'Alaskan Husky',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg'
    },
    {
      id: 2,
      breed: 'American Foxhound',
      image:'https://upload.wikimedia.org/wikipedia/commons/e/e7/AmericanFoxhound2.jpg'
    }
  ];

  const listDogs = dogs.map((dog) => {
    return(<Dog key={dog.id.toString()} dog={dog} />)
  });

  return (
    <>
      <Header/>
      <div className="main-container">
        <section className="dog-posts">
        { listDogs }
        </section>
        <footer>
          <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </div>
      <NavigationBar />
    </>
  );
};

export default App;
