import Carousel from "../Carousel";

const About = () => {

  const aboutArr = [
    'https://source.unsplash.com/1920x1080?bamboo',
    'https://source.unsplash.com/1920x1080?charcoal',
    'https://source.unsplash.com/1920x1080?maple',
  ]

  return (
    <>
      <div className="about-us">
        <h1 className='placeholder'>About Page</h1>
        <Carousel w={50} h={30} imgArr={aboutArr} />
      </div>
    </>
  )
}

export default About;