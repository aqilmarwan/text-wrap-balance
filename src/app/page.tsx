
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="mb-16 mt-14 sm:mt-20 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          CSS Text Balancing with <span className="font-mono text-blue-600">'text-wrap:balance'</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-400 sm:text-lg">
          An innovative CSS feature designed to enhance text equilibrium,
          providing a revolutionary solution for optimizing the balance
          and visual appeal of textual content on digital interfaces.
          This feature within Cascading Style Sheets (CSS) transformative
          approach is to achieve optimal text balance for
          an enhanced and aesthetically pleasing user experience.
        </p>
      </div>
    </main>
  )
}
