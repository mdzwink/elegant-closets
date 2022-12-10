import Carousel from "../Home-Page/Carousel";

const Closet = () => {

  const walkInClosetImgs = [
    'https://source.unsplash.com/1920x1080?walk-in-closet',
    'https://source.unsplash.com/1920x1080?closet',
    'https://source.unsplash.com/1920x1080?shelves'
  ]
  
  return (
    <>
      <h1 className='placeholder'>Closet Page</h1>
      <Carousel imgArr={walkInClosetImgs} />
    </>
  )
}

export default Closet;