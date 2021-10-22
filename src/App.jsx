import { useState, useEffect, useCallback } from "react";
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
  const [breedId, setBreedId] = useState(1)
  const [dogsThumbList, setThumbList] = useState([])

  const fetchDogsByBreed = useCallback (async () => {
    const url = new URL('https://api.thedogapi.com/v1/images/search')
    url.searchParams.append('limit', 21)
    url.searchParams.append('mime_types', 'jpg')
    url.searchParams.append('breed_id', breedId)
    const res = await fetch(url).catch((err) => {
      console.log(err);
      return {}
    })
    const byBreedsData = await res.json()
    return byBreedsData;
  }, [breedId])

  const fetchDogs = async () => {
    const url = new URL('https://api.thedogapi.com/v1/images/search')
    url.searchParams.append('limit', 10)
    url.searchParams.append('mime_types', 'jpg')
    const res = await fetch(url).catch((err) => {
      console.log(err);
      return {}
    })
    const data = await res.json()
    return data
  }

  const fetchDogBreeds = async () => {
    const url = new URL("https://api.thedogapi.com/v1/breeds");
    const res = await fetch(url).catch((err) => {
      console.log(err);
      return {}
    });
    const breedsData = await res.json();
    return breedsData
  }

  const filterDuplicates = (dog, index, self) => {
    return (self.findIndex((element) => { return element.id === dog.id}) === index)
  }

  useEffect(() => {
    fetchDogs().then((dogsData) => {
      setDogs(prevDogs => {
        const newDogs = [...new Set(...prevDogs,
          dogsData.map((dog) => {
          const dogInstance = new DogPrototype(dog.id)
          return dogInstance.setBreed(dog.breeds.length > 0 ? dog.breeds[0].name : 'No identificado').setImg(dog.url)
          })
        )]
        return newDogs.filter(filterDuplicates)
      })
    });

    fetchDogBreeds().then((dogBreeds) => {
      setDogBreeds([{name:"No identificado", id: 'NO'},...dogBreeds.map((dogBreed) => {
        return {name: dogBreed.name, id: dogBreed.id}
      })])
    })

    fetchDogsByBreed().then((dogsData) => {
      setThumbList( prevThumbList => {
        return [...new Set(...prevThumbList, dogsData.map((dog) => {
          const dogInstance = new DogPrototype(dog.id)
          return dogInstance.setImg(dog.url).setBreed(dog.breeds[0].name)
        }))]
      })
    })
  }, [fetchDogsByBreed])

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
        <Route path="/explorer" exact render={(props) => (
          <Explorer dogBreeds={dogBreeds} toChangeBreed={setBreedId} dogs={dogsThumbList} onLike={toLikeDog} onDislike={toDislikeDog} onPin={toPinDog} onShare={toShare} />
        )} />
        <NavigationBar />
        <footer>
          <a href="https://storyset.com/animal">Animal illustrations by Storyset</a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
