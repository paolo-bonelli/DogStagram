function DogPrototype(id) {
  this.id = id;
  this.liked = false;
  this.disliked = false;
  this.pinned = false;

  this.setBreed = function (breed){
    this.breed = breed
    return this
  }

  this.setImg = function (image){
    this.image = image
    return this
  }

  this.likeDog = function () {
    this.liked = true;
    this.disliked = false;
    return this;
  }

  this.dislikeDog = function() {
    this.liked = false;
    this.disliked = true;
    return this;
  }

  this.pinDog = function () {
    this.pinned = !this.pinned;
    return this;
  }

  return this;
}

export default DogPrototype