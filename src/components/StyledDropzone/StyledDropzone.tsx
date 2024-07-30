import { useMemo, CSSProperties } from 'react'
import { useDropzone } from 'react-dropzone'

const baseStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: 'rgb(17 24 39)',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle: CSSProperties = {
  borderColor: '#2196f3'
}

const acceptStyle: CSSProperties = {
  borderColor: '#00e676'
}

const rejectStyle: CSSProperties = {
  borderColor: '#ff1744'
}

export const StyledDropzone = () => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({ accept: { 'image/*': [] } })

  const fileNames = acceptedFiles.map(file => <li key={file.name}>{file.name}</li>);
  console.log(fileNames, '###')
  const style: CSSProperties = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ])

  return (
    <div className="mt-5">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {fileNames.length > 0 && (
        <aside className='mt-4'>
          <h4 className='text-xl'>Accepted Files</h4>
          <ol className='text-xs'>{fileNames}</ol>
        </aside>
      )}
    </div>
  )
}
