import { useState, useEffect } from 'react'
import UploadButton from './UploadButton'

function AddDog({ dogBreeds }) {
  const [isSelected, setSelected] = useState(false);
  const [file, setFile] = useState({});
  const [fileRoute, setFileRoute] = useState("");
  const [fileName, setFileName] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
  }

  const breedsList = [...dogBreeds.map((dogBreed) => {
    return (
      <option key={dogBreed.id} value={dogBreed.id}>{dogBreed.name}</option>
    )
  }), (<option key="0" value="0" >No identificado</option>)]

  useEffect((props)=>{

    if (file instanceof  File){
      setFileName(file.name)
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setFileRoute(reader.result);
      })

      reader.readAsDataURL(file)
    } else {
      setFileName("")
      setSelected(false)
    }
  }, [file])

  const onSure = (e) => {
    setFile(e.target.files[0]);
    setSelected(true)
  }

  return (
    <form  onSubmit={onSubmit} className='add-form' encType="multipart/form-data" method="POST">
      <div className="form-control">
        <label htmlFor="dog-breed">Raza de perro:</label>
        <select name="dog-breed" id="dog-breed">
          { breedsList }
        </select>
      </div>
      <div className="form-control-upload">
        <UploadButton isSelected={isSelected} fileName={fileName} fileRoute={fileRoute} />
        <input onChange={onSure} type="file" name="dog-image" id="dog-image" accept="image/png, image/jpeg" required hidden />
      </div>

      <input type="submit" value="Agregar" className="form-control btn-submit" />
    </form>
  )
}

export default AddDog
