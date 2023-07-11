/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Layout from "@/components/TheLayout";
import { FiFacebook, FiPhone } from "react-icons/fi";
import CoopTeam from "./Co-opTeam";

export default function Personals() {
  return (
    <Layout>
      <section className='font-font01 py-24'>
        <div className="container mx-auto mb-24">
          <h2 className='text-3xl text-violet-800 font-bold mb-8 text-center'>Team Me Promt</h2>
          <div className=" flex flex-col md:flex-row justify-center items-center">
            {/* card start */}
            <div className="relative overflow-hidden w-64 h-80 rounded-xl shadow-purple-400/50 shadow-lg hover:scale-95 md:mr-5 mb-5">
              <img className=" absolute w-full h-full object-cover" src="images/employee/est.jpg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>
              <div className="absolute top-60 left-5">
                <h3 className="text-xl font-bold text-white ">Natthavee</h3>
                <p className="text-sm leading-6 text-gray-300">CEO & Co-Found</p>
              </div>

              <a href="" className="absolute right-11 bottom-4 text-slate-200 hover:text-purple-400"><FiFacebook size={18} /></a>
              <a href="tel:+" className="absolute right-5 bottom-4 text-slate-200 hover:text-blue-400"><FiPhone size={18} /></a>
            </div>
            {/* card end */}

            {/* card start */}
            <div className="relative overflow-hidden w-64 h-80 rounded-xl shadow-purple-400/50 shadow-lg hover:scale-95 md:mr-5 mb-5">
              <img className=" absolute w-full h-full object-cover" src="images/employee/chun.jpg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>
              <div className="absolute top-60 left-5">
                <h3 className="text-xl font-bold text-white ">Warayut</h3>
                <p className="text-sm leading-6 text-gray-300">Consultant</p>
              </div>

              <a href="" className="absolute right-11 bottom-4 text-slate-200 hover:text-purple-400"><FiFacebook size={18} /></a>
              <a href="tel:+" className="absolute right-5 bottom-4 text-slate-200 hover:text-blue-400"><FiPhone size={18} /></a>
            </div>
            {/* card end */}
            
            {/* card start */}
            <div className="relative overflow-hidden w-64 h-80 rounded-xl shadow-purple-400/50 shadow-lg hover:scale-95 md:mr-5 mb-5">
              <img className=" absolute w-full h-full object-cover" src="images/employee/sam.jpeg" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>
              <div className="absolute top-60 left-5">
                <h3 className="text-xl font-bold text-white ">Warayut</h3>
                <p className="text-sm leading-6 text-gray-300">Co-Found</p>
              </div>

              <a href="" className="absolute right-11 bottom-4 text-slate-200 hover:text-purple-400"><FiFacebook size={18} /></a>
              <a href="tel:+" className="absolute right-5 bottom-4 text-slate-200 hover:text-blue-400"><FiPhone size={18} /></a>
            </div>
            {/* card end */}


          </div>
        </div>
        <div className="bg-violet-900/10">
          <div className="container mx-auto py-10">
          <h2 className='text-3xl text-violet-800 font-bold mb-8 text-center'>Team Co-op</h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* card start */}
              <a href="about" className="relative overflow-hidden w-64 h-80 rounded-xl shadow-cyan-400/50 shadow-lg hover:scale-95 mb-5">
                <img className=" absolute w-full h-full object-cover" src="images/est.jpg" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>
                <div className="absolute top-60 left-5">
                  <h3 className="text-xl font-bold text-white ">Apprentice</h3>
                  <p className="text-sm leading-6 text-gray-300">Co-operative Education G1</p>
                </div>

                {/* <a href="" className="absolute right-11 bottom-4 text-slate-200 hover:text-purple-400"><FiFacebook size={18} /></a> */}
                {/* <a href="tel:+" className="absolute right-5 bottom-4 text-slate-200 hover:text-blue-400"><FiPhone size={18} /></a> */}
              </a>
              {/* card end */}
            </div>
          </div>
        </div>


      </section>


    </Layout>
  )
}
