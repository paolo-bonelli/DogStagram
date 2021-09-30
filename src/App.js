import { useState } from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Dogs from "./components/Dogs";
import DogPrototype from "./models/DogPrototype";

function App() {
  const dogData = [
    {
      id: 1,
      breed: 'Alaskan Husky',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg',
    },
    {
      id: 2,
      breed: 'American Foxhound',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg',
    }
  ];

  const [dogs, setDogs] = useState(dogData.map((dog) => {
    const dogInstance = new DogPrototype(dog.id);
    return dogInstance.setBreed(dog.breed).setImg(dog.image);
  }));



  const updateDogs = (newDog) => {
    const newDogs = [...dogs.filter((dog) => {return dog.id !== newDog.id} ), newDog];
    newDogs.sort((dogOne,dogTwo) => (dogOne.id - dogTwo.id));
    setDogs(newDogs);
    console.log(dogs)
  }

  const toLikeDog = (id) => {
    const newDog = (dogs.find((dog) => {return dog.id === id})).likeDog() ;
    updateDogs(newDog);
  }

  const toDislikeDog = (id) => {
    const newDog = (dogs.find((dog) => {return dog.id === id})).dislikeDog() ;
    updateDogs(newDog)
  }

  const toPinDog = (id) => {
    const newDog = (dogs.find((dog) => {return dog.id === id})).pinDog() ;
    updateDogs(newDog)
  }

  return (
    <>
      <Header/>
      <div className="main-container">
        <Dogs dogs={dogs} onLike={toLikeDog} onDislike={toDislikeDog} onPin={toPinDog} />
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
