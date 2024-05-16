interface SeparatorProps {
    message?:string
}
const Separator = ({}:SeparatorProps) => {
  return (
    <section className="py-10 md:flex xl:flex lg:flex justify-evenly items-center text-white bg-gradient-to-r from-indigo-700 to-[#7950f2]">
        <div className="mb-2">
            <h1 className="md:text-5xl text-3xl text-center font-bold">30+</h1>
            <h2 className="text-xl text-center">Clients</h2>
        </div>
        <div className="mb-2">
            <h1 className="md:text-5xl text-3xl text-center font-bold">50+</h1>
            <h2 className="text-xl text-center">Complete Projects</h2>
        </div>
        <div className="mb-2">
            <h1 className="md:text-5xl text-3xl text-center font-bold">300+</h1>
            <h2 className="text-xl text-center">Hours of Support</h2>
        </div>
        <div className="mb-2">
            <h1 className="md:text-5xl text-3xl text-center font-bold">30+</h1>
            <h2 className="text-xl text-center">Happy Customers</h2>
        </div>
        
    </section>
  )
}

export default Separator