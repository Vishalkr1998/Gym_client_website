import PageHeader from '../components/PageHeader'
import Programs from '../components/Programs'
import BMI from '../components/BMI'

export default function Classes() {
  return (
    <>
      <PageHeader
        eyebrow="Train With Purpose"
        title="Our Programs"
        subtitle="From strength to recovery — find the training style that fits your goals."
      />
      <Programs />
      <BMI />
    </>
  )
}
