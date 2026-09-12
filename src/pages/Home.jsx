import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import GalleryTrainers from '../components/GalleryTrainers'
import Trainers from '../components/Trainers'
import Testimonials from '../components/Testimonials'
import Transformations from '../components/Transformations'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <GalleryTrainers />
      <Trainers />
      <Testimonials />
      <Transformations />
      <Pricing />
      <CTA />
    </>
  )
}
