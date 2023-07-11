import Image from 'next/image'
import Responsive from '@/container/AboutSlider'
import TheLayOut from '@/components/TheLayout'

export default function About() {
  return (
    <TheLayOut>
      <img className=' w-screen' src='/images/banner.png' alt='Logo Me Prompt' />
      <div className='py-10 my-28 bg-blue-gray-100/20 px-10 rounded-lg container mx-auto'>
        <div className='py-24 bg-slate-100/50 rounded-md font-font01'>
          <div className="text-center animate-jump-in animate-once animate-delay-300 md:mb-32 lg:mb-20 xl:mb-5">
            <img src="images/new-logo.png" className="w-72 mx-auto mb-2" />
            <p className=" font-bold text-xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500">
              Me Prompt Technology Company Limited
            </p>
          </div>
          <div className="px-2 mt-16">
            <h3 className=' font-bold text-violet-800 mb-10'>รู้จักเรา</h3>
            <p className='mb-2 indent-8 lg:text-lg break-before-auto'>เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต</p>
            <p className='indent-8 lg:text-lg break-before-auto'>เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ</p>
          </div>
        </div>
        <div className='container mx-auto text-center '>
          {/* <ResponsiveSlide /> */}
        </div>

        <div className='container mx-auto mt-24'>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <div>
              <img className="h-auto max-w-full rounded-lg animate-jump-in" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg animate-jump-in" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg animate-jump-in" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
            </div>
          </div>
          <div className='h-1 rounded-full mt-10 bg-gradient-to-l from-blue-400 via-purple-500 to-indigo-500'></div>
        </div>
      </div>
    </TheLayOut>
  )
}
