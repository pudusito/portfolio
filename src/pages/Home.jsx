import ModelChar from '../components/charactermodel'

export default function Home() {

  return (
    <>
      {/* Header */}
      <div className="relative top-0 bg-gradient-to-b from-[#14002e] to-[#000319] w-full h-[5rem] md:h-[8rem] neon-border-bottom "/>

      {/* Welcome Section */}
      <section className="relative w-full h-[88vh] bg-transparent flex items-center justify-center ">

        <ModelChar />

      </section>
    </>
  );
}