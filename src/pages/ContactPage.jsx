import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We'd Love To Hear From You"
        title="Get In Touch"
        subtitle="Questions about membership, classes, or trainers? Send us a message."
      />
      <Contact />
    </>
  )
}
