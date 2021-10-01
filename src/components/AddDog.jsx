function AddDog() {
  return (
    <form className='add-form' encType="multipart/form-data" method="POST">
      <div className="form-control">
        <label htmlFor="dog-breed">Breed</label>
        <input type="text" name="breed" id="dog-breed" />
      </div>
      <div className="form-control">
        <label htmlFor="dog-image">Image</label>
        <input type="file" name="image" id="dog-image" accept="image/png, image/jpeg" />
      </div>

      <input type="submit" value="Agregar" className="btn-submit" />
    </form>
  )
}

export default AddDog
