
function Main() {
    return (
        <div className="main-section flex justify-between">
            <div className="h-screen md:w-1/2  flex justify-center items-center px-10">
                <div className=" ">
                    <h1 className="main-text text-7xl">Fuel Your Day </h1>
                    <h1 className="main-text text-7xl">With Perfect <span className="font-extralight text-red-800 "> Cup of Tea☕</span></h1>
                </div>
            </div>
            <div className="h-screen w-1/2  justify-center items-center hidden md:flex">
                <div className="main-image  rounded-3xl">

                </div>
            </div>
        </div>
    )
}

export default Main
