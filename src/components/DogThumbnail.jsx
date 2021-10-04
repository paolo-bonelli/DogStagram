import React from 'react'

function DogThumbnail({dog}) {
  return (
    <article className="dog-thumbnail">
      <figure>
        <figcaption>{dog.breed}</figcaption>
        <img src={dog.image} alt={dog.breed} />
      </figure>
    </article>
  )
}

export default DogThumbnail
