import React from 'react'

function UploadForm() {
  return (
    <form className='border-white text-white border h-[500px]'>
      <p>Upload files</p>
      <label htmlFor="myfile">Select a file:</label>
      <input type="file" id="myfile" name="myfile" />
    </form>
  )
}

export default UploadForm