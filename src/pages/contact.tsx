import Image from 'next/image'
import Layout from '@/components/TheLayout'
import { AiFillAlert } from "react-icons/ai";

export default function Contact() {
  return (
    <Layout>
      <section className='container mx-auto font-font01 py-24'>
        <h2 className=' text-gray-600 mb-10 text-center font-semibold p-2'>ติดต่อเรา</h2>
        <div className='h-1 rounded-full bg-black mb-16 bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500'></div>

        <div className="px-10 ">
          {/* Contact */}
          <div className='flex flex-col lg:flex-row justify-evenly'>
            <div className=' lg:w-4/12'>
              <img src="images/new-logo.png" className="md:w-64 w-52" />
              <p className=" font-bold text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                บริษัท มี พร้อมท์ เทคโนโลยี จำกัด
              </p>
              <p className='mt-5 mb-2'><strong>ที่อยู่ :</strong> <a href="tel:+0998876554"> 46/3&nbsp;ถนนราชนิกูล ตำบลในเมือง อำเภอเมืองนครราชสีมา &nbsp;จังหวัดนครราชสีมา 30000</a> </p>
              {/* <p className='mt-5 mb-2'><strong>Address: :</strong> <a href="tel:+0998876554"> 46/3&nbsp;Ratchanikun&nbsp;Road, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000</a> </p> */}
              <p className='mb-2'><strong>โทรศัพท์ :</strong> <a href="tel:+0998876554"> 0998876554 </a> </p>
              <p className='mb-2'><strong>อีเมล : </strong> <a href="mailto:support@meprompt.org">support@meprompt.org</a> </p>
              <p><strong>ไลน์@ : </strong> <a href="mailto:support@meprompt.org">@meepoong</a> </p>

              <div className='flex space-x-2 sm:justify-start sm:mt-0'>
                <a href="#" className="text-gray-500 hover:text-violet-500 dark:hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-500 dark:hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Instagram page</span>
                </a>
              </div>
            </div>

            {/* Mail Form */}
            <form action="" className='w-full lg:w-96 mt-10 lg:mt-0'>
              <h4 className='text-2xl font-semibold text-violet-700'>ส่งเมลติดต่อ</h4>
              <div className='mt-4 mb-3'>
                <label htmlFor="pjname" className='block mb-2 text-sm font-medium text-gray-900 '>Project Name :</label>
                <input className=' text-sm border rounded-sm p-1.5 px-2 hover:border-cyan-700  w-full'
                  type="text" name="" id=""
                  placeholder='*กรุณากรอกชื่อของท่าน'
                  required />
              </div>
              <div className='mb-3'>
                <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900'>Name :</label>
                <input className='text-sm border rounded-sm p-1.5 px-2 hover:border-cyan-700  w-full'
                  type="text" name="" id=""
                  placeholder='*กรุณากรอกชื่อของท่าน'
                  required />
              </div>
              <div className='mb-3'>
                <label htmlFor="lastname" className='block mb-2 text-sm font-medium text-gray-900'>Lastname :</label>
                <input className=' border rounded-sm p-1.5 px-2 hover:border-cyan-700 w-full '
                  type="text" name="" id=""
                  placeholder='*กรุณากรอกชื่อของท่าน'
                  required />
              </div>
              <div className='mb-3'>
                <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Phone :</label>
                <input className='text-sm border rounded-sm p-1.5 px-2 hover:border-cyan-700 w-full '
                  type="text" name="" id=""
                  placeholder='*กรุณากรอกชื่อของท่าน'
                  required />
              </div>
              <label htmlFor="description" className='block mb-2 text-sm font-medium text-gray-900'>Description: </label>
              <textarea name="desscription" id="" rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                           rounded-lg border border-gray-300"
                placeholder="Your message..."
                required>
              </textarea>

              <div className="relative flex flex-col  justify-center  py-3 ">
                <button className="text-sm bg-gradient-to-b mx-auto text-purple-500 font-semibold from-slate-50 to-purple-100 px-3 py-3 rounded-2xl shadow-purple-400 shadow-md border-b-4 hover  border-violet-200 hover:shadow-sm transition-all ">Send Message</button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="mt-5 lg:mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.410881370793!2d102.09982811484463!3d14.969879789568058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194d8e8317c351%3A0xd84c052ad6cf5c55!2sME%20PROMPT%20TECHNOLOGY!5e0!3m2!1sen!2sth!4v1688444864442!5m2!1sen!2sth"
              className="h-96 w-full border-0 rounded-lg shadow-lg" loading="lazy">
            </iframe>
          </div>

        </div>
      </section>



    </Layout>
  )
}
