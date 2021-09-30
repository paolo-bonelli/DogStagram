import Dog from "./Dog";

function Dogs({dogs, onLike, onDislike, onPin}) {
  const listDogs = dogs.map((dog) => {
    return(<Dog key={dog.id.toString()} dog={dog} onLike={onLike} onDislike={onDislike} onPin={onPin} />)
  });
  
  return (
    <section className="dog-posts">
      { listDogs }
    </section>
  )
}

export default Dogs
