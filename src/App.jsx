import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Dogs from "./components/Dogs";
import DogPrototype from "./models/DogPrototype";
import {HashRouter as Router, Route} from 'react-router-dom'
import AddDog from './components/AddDog'
import Explorer from "./components/Explorer";

function App() {
  const [dogs, setDogs] = useState([])
  const [dogBreeds, setDogBreeds] = useState([])
  useEffect(() => {
    fetchDogs().then((dogData) => {
      setDogs(dogData.map((dog) => {
        const dogInstance = new DogPrototype(dog.id)
        return dogInstance.setBreed(dog.breeds.length > 0 ? dog.breeds[0].name : 'No identificado').setImg(dog.url)
      }))
    });

    fetchDogBreeds().then((dogBreeds) => {
      setDogBreeds(dogBreeds.map((dogBreed) => {
        return {name: dogBreed.name, id: dogBreed.id}
      }))
    })
  }, [])

  const fetchDogs = async () => {
    const url = new URL('https://api.thedogapi.com/v1/images/search')
    url.searchParams.append('limit', 10)
    url.searchParams.append('mime_types', 'jpg')
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  const fetchDogBreeds = async () => {
    const url = new URL("https://api.thedogapi.com/v1/breeds");
    const res = await fetch(url);
    const breedsData = await res.json();
    return breedsData
  }

  // const dogData = [
  //   {
  //     id: 1,
  //     breed: 'Alaskan Husky',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg',
  //   },
  //   {
  //     id: 2,
  //     breed: 'American Foxhound',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/AmericanFoxhound2.jpg',
  //   }
  // ];

  // const [dogs, setDogs] = useState(dogData.map((dog) => {
  //   const dogInstance = new DogPrototype(dog.id);
  //   return dogInstance.setBreed(dog.breed).setImg(dog.image);
  // }));

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
        <Route path="/add" render={ (props) => {
          return (
            <AddDog dogBreeds={dogBreeds} />
          )
        } } />
        <Route path="/explorer" render={(props) => (
          <Explorer dogBreeds={dogBreeds} />
        )} />
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
