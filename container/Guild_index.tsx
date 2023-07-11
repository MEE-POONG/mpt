import { FiArrowRight } from "react-icons/fi";

export default function GuildIndex() {
    return (
        <section className=" mt-10 mx-auto p-8 mb-64">
            <h2 className=' text-gray-600 mb-8 text-center font-semibold p-2'>Guild</h2>
            <div className="bg-[#F4F5FA] p-10 rounded-xl">
                <div className="flex justify-end mb-6 items-center">
                    <a href="" className="text-md text-cyan-800 hover:underline hover:text-cyan-600">More</a>
                    <span><FiArrowRight /> </span>
                </div>
                <div className="flex gap-4">
                    <div className="mx-auto mt-11 w-72 h-96 overflow-hidden rounded-lg bg-white shadow-md">
                        <img className="h-48 w-full object-cover object-center p-5" src="images/new-logo.png" alt="Product Image" />
                        <div className="p-4">
                            <p className=" topic mb-2 font-medium text-gray-900">Topic</p>
                            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Topic description description description description description.</p>
                            <div className="flex items-center">
                                <a href="" className=" text-cyan-800 hover:underline hover:text-cyan-600">Read More</a>
                                <span><FiArrowRight /> </span>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-11 w-72 h-96 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 ">
                        <img className="h-48 w-full object-cover object-center p-5" src="images/new-logo.png" alt="Product Image" />
                        <div className="p-4">
                            <p className=" topic mb-2 font-medium text-gray-900">Topic</p>
                            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Topic description description description description description.</p>
                            <div className="flex items-center">
                                <a href="" className=" text-cyan-800 hover:underline hover:text-cyan-600">Read More</a>
                                <span><FiArrowRight /> </span>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-11 w-72 h-96 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 ">
                        <img className="h-48 w-full object-cover object-center p-5" src="images/new-logo.png" alt="Product Image" />
                        <div className="p-4">
                            <p className=" topic mb-2 font-medium text-gray-900">Topic</p>
                            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Topic description description description description description.</p>
                            <div className="flex items-center">
                                <a href="" className=" text-cyan-800 hover:underline hover:text-cyan-600">Read More</a>
                                <span><FiArrowRight /> </span>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-11 w-72 h-96 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 ">
                        <img className="h-48 w-full object-cover object-center p-5" src="images/new-logo.png" alt="Product Image" />
                        <div className="p-4">
                            <p className=" topic mb-2 font-medium text-gray-900">Topic</p>
                            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Topic description description description description description.</p>
                            <div className="flex items-center">
                                <a href="" className=" text-cyan-800 hover:underline hover:text-cyan-600">Read More</a>
                                <span><FiArrowRight /> </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}