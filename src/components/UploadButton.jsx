import {FaCloudUploadAlt} from 'react-icons/fa'

function UploadButton({ isSelected, fileRoute, fileName }) {
  return (
    <>
      <label htmlFor="dog-image">
        <div className={`dog-image-placeholder ${isSelected ? 'hidden' : ''}`}>
          <FaCloudUploadAlt className="upload-icon" />
          <p>No ha elejido ningún archivo</p>
        </div>
        <figure>
          <img src={fileRoute} alt="No ha elegido ninguna imagen" className={`dog-image ${ !isSelected ? 'hidden' : ''}`} />
          <figcaption>{isSelected ? fileName : ''}</figcaption>
        </figure>
      </label>
    </>
  )
}

export default UploadButton
