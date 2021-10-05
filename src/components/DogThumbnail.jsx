import React from 'react'

function DogThumbnail({dog}) {
  return (
    <article className="dog-thumbnail" >
      <figure id={dog.id}>
        <figcaption>{dog.breed}</figcaption>
        <img src={dog.image} alt={dog.breed} />
        <a href={`#${dog.id}`} className="target-dog"></a>
        <a href="#" className="target-explorer"></a>
      </figure>
    </article>
  )
}

export default DogThumbnail
