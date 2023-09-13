
import "./image.css"
export default function Image({src,alt,rounded,responsive}) {

  return (
    <img 
    src={src} 
    alt={alt} 
    className={`img ${responsive?"responsive":""} ${rounded ? "rounded" :""} `}/>
  )
}
