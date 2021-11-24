import { useState, useEffect, useCallback, useRef } from "react";
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Dogs from "./components/Dogs";
import DogPrototype from "./models/DogPrototype";
import AddDog from './components/AddDog'
import Explorer from "./components/Explorer";
import LoadingDog from "./components/dog.svg"

function App() {
  // dogs will contain the DogPrototype instances
  const [dogs, setDogs] = useState([])
  // dogBreeds will contain the list of available breeds for dogs
  const [dogBreeds, setDogBreeds] = useState([])
  // breedId determines the breed showed in the Explorer route
  const [breedId, setBreedId] = useState(1)
  // dogsThumbList contains the dogInstances to be showed in the Explorer route
  const [dogsThumbList, setThumbList] = useState([])
  
  /**
   * This observer is suppoused to fetch new dogs when the user reach the end of the list
   * The observer could be in the last Dog or could be in a different block so the logic does not
   *   become confuse
   **/ 
  const observer = useRef();

  /**
   * It is defined the asynchronous function to fetch the dogs of a specific breed from the API
   * with the useCallback method provided by react so the callback is able to use the state
   * breedId in the URL search parameters
   **/
  const fetchDogsByBreed = useCallback (async () => {
    const url = new URL('https://api.thedogapi.com/v1/images/search')
    url.searchParams.append('limit', 21)
    url.searchParams.append('mime_types', 'jpg')
    url.searchParams.append('breed_id', breedId)
    return await fetch(url).catch((err) => {
      console.error(err);
      return err
    }).then((breedsData) => {
      return breedsData.json()
    })
  }, [breedId])

  /**
   * Similar to the callback above this will fetch ten (10) random dogs to be displayed in the
   * home route
   **/
  const fetchDogs = async () => {
    const url = new URL('https://api.thedogapi.com/v1/images/search')
    url.searchParams.append('limit', 10)
    url.searchParams.append('mime_types', 'jpg')
    return await fetch(url).catch((err) => {
      console.error(err);
      return err
    }).then((dogsData) => {
      return dogsData.json()
    })
  }

  /**
   * This functions will fetch the list of breeds available in the API
   **/
  const fetchDogBreeds = async () => {
    const url = new URL("https://api.thedogapi.com/v1/breeds");
    return await fetch(url).catch((err) => {
      console.error(err);
      return err
    }).then((breedsData) => {
      return breedsData.json()
    })
  }

  /**
   * 
   * @param {DogPrototype} dog 
   * @param {*} index 
   * @param {*} self 
   * @returns 
   */
  const filterDuplicates = (dog, index, self) => {
    return (self.findIndex((element) => { return element.id === dog.id}) === index)
  }

  useEffect(() => {
    fetchDogs().catch((err) => {
      console.error(err);
      return err;
    }).then((dogsData) => {
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
          <Dogs dogs={dogs} loadingDog={LoadingDog} onLike={toLikeDog} onDislike={toDislikeDog} onPin={toPinDog} onShare={toShare} />
        )} />
        <Route path="/add" render={ (props) => {
          return (
            <AddDog dogBreeds={dogBreeds} />
          )
        } } />
        <Route path="/explorer" exact render={(props) => (
          <Explorer loadingDog={LoadingDog} dogBreeds={dogBreeds} toChangeBreed={setBreedId} dogs={dogsThumbList} onLike={toLikeDog} onDislike={toDislikeDog} onPin={toPinDog} onShare={toShare} />
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
