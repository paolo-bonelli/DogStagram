
function DogThumbnail({dog, onLike, onDislike, onPin, onShare}) {
  return (
    <article className="dog-thumbnail" >
      <div className={false ? "dog-container" : ''}>
        <figure  id={dog.id}>
          <img src={dog.image} alt={dog.breed} />
        </figure>
      </div>
    </article>
  )
}

export default DogThumbnail
