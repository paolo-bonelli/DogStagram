
import { FaThumbsUp, FaThumbsDown, FaPaperPlane, FaBookmark } from 'react-icons/fa'
import loadingDog from './dog.svg'

const Dog = ({dog, onLike, onDislike, onPin, onShare}) => {
  const changeSrc = (target) => {
    target.src = dog.image;
  }
  
  return (
    <article className="dog-post">
      <figure>
        <figcaption>{dog.breed}</figcaption>
        <img onLoad={(event) => {changeSrc(event.target)}} className="dog-img" src={ loadingDog } onDoubleClick={(event) => {onLike(dog.id)}} alt={dog.breed} />
      </figure>
      <section className="dog-actions">
        <div className="btn-group">
          <FaThumbsUp className={`btn-icon ${dog.liked ? 'btn-icon-check' : ''}`} onClick={(event)=>{onLike(dog.id)}} />
          <FaThumbsDown className={`btn-icon ${dog.disliked ? 'btn-icon-check' : ''}`} onClick={(event)=>{onDislike(dog.id)}} />
          <FaPaperPlane className="btn-icon" onClick={(event)=>{onShare(dog.id)}} />
        </div>
        <FaBookmark className={`btn-icon ${dog.pinned ? 'btn-icon-check' : ''}`} onClick={(event)=>{onPin(dog.id)}} />
      </section>
    </article >
  )
}

export default Dog
