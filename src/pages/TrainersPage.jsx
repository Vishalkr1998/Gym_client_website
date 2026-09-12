import PageHeader from '../components/PageHeader'
import Trainers from '../components/Trainers'

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        eyebrow="The People Behind The Program"
        title="Our Trainers"
        subtitle="Certified coaches dedicated to your progress, every single session."
      />
      <Trainers />
    </>
  )
}
