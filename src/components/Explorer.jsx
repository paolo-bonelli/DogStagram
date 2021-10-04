import {useState, useEffect} from 'react'
import DogPrototype from '../models/DogPrototype'
import DogThumbnail from './DogThumbnail'

function Explorer({dogBreeds}) {
  const [breedId, setDogBreed] = useState(1)
  const [dogs, setDogs] = useState([])
  const [dogThumbList, setThumbList] = useState([])
  
  useEffect(() => {
    const fetchDogsByBreed = async () => {
      const url = new URL('https://api.thedogapi.com/v1/images/search')
      url.searchParams.append('limit', 21)
      url.searchParams.append('mime_types', 'jpg')
      url.searchParams.append('breed_id', breedId)
      const res = await fetch(url)
      const byBreedsData = await res.json()
      return byBreedsData;
    }
  
    fetchDogsByBreed().then((dogsData) => {
      setDogs(
        dogsData.map((dog) => {
          const dogInstance = new DogPrototype(dog.id)
          return dogInstance.setImg(dog.url).setBreed(dog.breeds.name)
        })
      )
    })

    setThumbList(dogs.map((dog) => {
      return <DogThumbnail key={dog.id} dog={dog} />
    }))

  }, [ dogs, breedId])

  const breedsList = dogBreeds.map((dogBreed) => {
    return (
      <option value={dogBreed.id} key={dogBreed.id}>{dogBreed.name}</option>
    )
  })

  const toSubmit = (event) => {
    event.preventDefault()
  }

  const toChange = (event) => {
    setDogBreed(event.target.value)
  }

  return (
    <section className="explorer">
      <form onSubmit={toSubmit} method="get" onChange={toChange}>
        <select name="dog-breeds" id="dog-breeds">
          {breedsList}
        </select>
      </form>
      <section className="dogs-list-thumbnails">
          {dogThumbList}
      </section>
    </section>
  )
}

export default Explorer
