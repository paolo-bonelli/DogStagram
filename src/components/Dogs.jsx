import Dog from "./Dog";

function Dogs({dogs, onLike, onDislike, onPin, onShare}) {
  const listDogs = dogs.slice(0,11).map((dog) => {
    return(<Dog key={dog.id.toString()} dog={dog} onLike={onLike} onDislike={onDislike} onPin={onPin} onShare={onShare} />)
  });
  
  return (
    <section className="dog-posts">
      { listDogs }
    </section>
  )
}

export default Dogs
