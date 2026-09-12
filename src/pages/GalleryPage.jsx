import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inside Ironforge"
        title="Our Gallery"
        subtitle="Take a look at our state-of-the-art facility, premium equipment, and our community in action."
      />
      <div className="py-12 bg-gym-dark">
        <Gallery />
      </div>
      <CTA />
    </>
  )
}

