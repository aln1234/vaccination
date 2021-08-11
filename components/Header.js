


function Header() {
    return (
        <div>
        <div className="flex mx-16 my-10">
            <div className="flex-grow" >
            <h1 className="text-2xl font-bold"><span className="text-red-400">Vaccine</span><span className="text-gray-400">.go.id</span></h1>

            </div>
            <div className="flex items-center space-x-20">
                <h1 className="text-gray-500 text-lg font-semibold cursor-pointer active:border-b-2 border-red-600 ">Home</h1>
                <h1 className="text-gray-500  text-lg font-semibold cursor-pointer active:border-b-2 border-red-600">Schedule</h1>
                <h1 className="text-gray-500  text-lg font-semibold cursor-pointer active:border-b-2 border-red-600">Quota</h1>
                <h1 className="text-gray-500  text-lg font-semibold cursor-pointer active:border-b-2 border-red-600">Info</h1>
                <h1 className="px-4 py-2 bg-red-500 rounded-full text-white  text-lg font-semibold hover:scale-105 transform:scale transition duration-150 ease-in-out cursor-pointer ">Call Center</h1>
            </div>
        
        </div>
        </div>
    )
}

export default Header
