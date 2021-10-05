import React from 'react'
import Dog from './Dog'

function DogThumbnail({dog, onLike, onDislike, onPin, onShare}) {
  return (
    <article className="dog-thumbnail" >
      <figure  id={dog.id}>
        <figcaption>{dog.breed}</figcaption>
        <img src={dog.image} alt={dog.breed} />
      </figure>
    </article>
  )
}

export default DogThumbnail
