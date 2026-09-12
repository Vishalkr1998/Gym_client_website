import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Ironforge"
        subtitle="Fifteen years of building strength, discipline, and community."
      />
      <About />
      <Testimonials />
    </>
  )
}
