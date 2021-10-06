import DogThumbnail from './DogThumbnail'

function Explorer({dogs, dogBreeds, onLike, onDislike, onPin, onShare, toChangeBreed}) {

  const breedsList = dogBreeds.map((dogBreed) => {
    return (
      <option value={dogBreed.id} key={dogBreed.id}>{dogBreed.name}</option>
    )
  })

  const dogThumbList = dogs.map((dog) => {
    return (
      <DogThumbnail dog={dog} />
    )
  })

  const toSubmit = (event) => {
    event.target.preventDefault()
  }

  return (
    <section className="explorer">
      <form onSubmit={toSubmit} method="get" onChange={(event) => {toChangeBreed(event.target.value)}}>
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
