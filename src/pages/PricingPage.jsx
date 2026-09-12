import PageHeader from '../components/PageHeader'
import Pricing from '../components/Pricing'

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership Plans"
        title="Simple, Honest Pricing"
        subtitle="No hidden fees. Cancel or upgrade anytime."
      />
      <Pricing />
    </>
  )
}
