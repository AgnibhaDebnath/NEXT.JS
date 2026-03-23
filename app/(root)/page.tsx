import Heading from "@/components/heading"


const Home = () => {

  console.log("What type of components am i?")
  return (
    <main className="py-4 flex  flex-col items-center justify-center">
      <div className="">
        <h1 className="text-8xl font-bold bg-linear-to-r bg-clip-text text-transparent from-green-800 to-yellow-300 py-1">Welcome to next.js</h1>
      </div>
      <Heading/>
    </main>
    
  )
}

export default Home
