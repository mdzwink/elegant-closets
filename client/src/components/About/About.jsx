import Carousel from "../Home-Page/Carousel";

const About = () => {

  const aboutArr = [
    'https://source.unsplash.com/1920x1080?bamboo',
    'https://source.unsplash.com/1920x1080?charcoal',
    'https://source.unsplash.com/1920x1080?maple',
  ]

  return (
    <>
      <h1 className='placeholder'>About Page</h1>
      <Carousel w={60} imgArr={aboutArr} />
    </>
  )
}

export default About;