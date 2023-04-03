import Imageshow from './Imageshow'
import './imagelist.css'
function Imagelist({image}) {
  const renderedImages=image.map((image)=>{
    return <Imageshow image={image} key={image.id}/>
  })
    return (
    <div className='image-list'>{renderedImages}</div>
    );
  }
  
  export default Imagelist;
  