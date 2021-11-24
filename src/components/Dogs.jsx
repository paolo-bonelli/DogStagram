import Dog from "./Dog";

function Dogs({dogs, loadingDog ,onLike, onDislike, onPin, onShare}) {
  const listDogs = dogs.map((dog) => {
    return(<Dog key={dog.id.toString()} loadingDog={loadingDog} dog={dog} onLike={onLike} onDislike={onDislike} onPin={onPin} onShare={onShare} />)
  });
  
  return (
    <section className="dog-posts">
      { listDogs }
    </section>
  )
}

export default Dogs
