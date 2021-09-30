// import LikeBtn from './Dog/LikeBtn';
// import DislikeBtn from './Dog/DislikeBtn';
// import SaveBtn from './Dog/SaveBtn';
import ButtonImage from './ButtonImage';
import Like from './icons/like.svg';
import Dislike from './icons/dislike.svg';
import Send from './icons/send.svg';
import Pin from './icons/pin.svg';

const Dog = ({dog, onLike, onDislike, onPin}) => {
  
  return (
    <article className="dog-post">
      <figure>
        <figcaption>{dog.breed}</figcaption>
        <img className="dog-img" src={ dog.image } alt={dog.breed} />
      </figure>
      <section className="dog-actions">
        <div className="btn-group">
          <ButtonImage src={Like} text='Me gusta' cb={(event)=>{onLike(dog.id)}} />
          <ButtonImage src={Dislike} text="No me gusta" cb={(event)=>{onDislike(dog.id)}} />
          <ButtonImage src={Send} text="Enviar" cb={(event)=>{console.log("Send")}} />
        </div>
        <ButtonImage src={Pin} text="Guardar" cb={(event)=>{onPin(dog.id)}} />
      </section>
    </article >
  )
}

export default Dog
