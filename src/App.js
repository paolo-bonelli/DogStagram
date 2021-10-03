import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Dogs from "./components/Dogs";
import DogPrototype from "./models/DogPrototype";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddDog from './components/AddDog'

function App() {
  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      const data = await res.json()
      return data
    }
    fetchDogs().then((data) => {
      console.log(data)
    });
  }, [])

  const dogData = [
    {
      id: 1,
      breed: 'Alaskan Husky',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg',
    },
    {
      id: 2,
      breed: 'American Foxhound',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/AmericanFoxhound2.jpg',
    }
  ];

  const [dogs, setDogs] = useState(dogData.map((dog) => {
    const dogInstance = new DogPrototype(dog.id);
    return dogInstance.setBreed(dog.breed).setImg(dog.image);
  }));

  const toLikeDog = (id) => {
    setDogs(dogs.map((dog) => dog.id === id ? dog.likeDog() : dog))
  }

  const toDislikeDog = (id) => {
    setDogs(dogs.map((dog) => dog.id === id ? dog.dislikeDog() : dog))
  }

  const toPinDog = (id) => {
    setDogs(dogs.map((dog) => dog.id === id ? dog.pinDog() : dog))
  }

  const toShare = (id) => {
    console.log(`Share it ${id}`);
  }

  return (
    <Router>
      <div className="main-container">
        <Header/>
        <Route path="/" exact render={(props) => (
          <Dogs dogs={dogs} onLike={toLikeDog} onDislike={toDislikeDog} onPin={toPinDog} onShare={toShare} />
        )} />
        <Route path="/add" component={ AddDog } />
        <footer>
          <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
        <NavigationBar />
      </div>
    </Router>
  );
};

export default App;
