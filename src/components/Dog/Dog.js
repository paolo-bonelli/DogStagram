import LikeBtn from './LikeBtn';
import DislikeBtn from './DislikeBtn';
import SaveBtn from './SaveBtn';



const Dog = ({dog}) => {
  return (
    <article className="dog-post">
      <figure>
        <figcaption>{dog.breed}</figcaption>
        <img className="dog-img" src={ dog.image } alt={dog.reed} />
      </figure>
      <section className="dog-actions">
        <div className="btn-group">
          <LikeBtn/>
          <DislikeBtn/>
        </div>
        <SaveBtn/>
      </section>
    </article >
  )
}

export default Dog
