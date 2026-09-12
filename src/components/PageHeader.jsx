export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-20 bg-gym-black overflow-hidden">
      <div className="absolute inset-0 bg-red-gradient opacity-10 blur-3xl" />
      <div className="relative z-10 text-center max-w-2xl mx-auto" data-aos="fade-up">
        <span className="section-eyebrow">{eyebrow}</span>
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="text-gym-white/60 mt-4">{subtitle}</p>}
      </div>
    </section>
  )
}
