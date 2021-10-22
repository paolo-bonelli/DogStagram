import loadingDog from './dog.svg'

function DogThumbnail({dog, onLike, onDislike, onPin, onShare}) {
  const changeSrc = (target) => {
    target.src = dog.image;
  }

  return (
    <article className="dog-thumbnail" >
      <div className={false ? "dog-container" : ''}>
        <figure  id={dog.id}>
          <img onLoad={(e) => { changeSrc(e.target) }} src={ loadingDog } alt={dog.breed} />
        </figure>
      </div>
    </article>
  )
}

export default DogThumbnail
