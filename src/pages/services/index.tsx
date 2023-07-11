import Image from 'next/image'
import Layout from '@/components/TheLayout'
import Link from 'next/link'
import WorkTapbar from '../ourwork'

export default function Services() {
  return (
    <Layout>
      <div className="container mt-10 mx-auto p-8 font-font01 mb-64">
        <h2 className='text-3xl text-gray-600 mb-10 text-center font-semibold p-2 '>Services</h2>
        <div className="bg-[#F4F5FA] p-10 rounded-xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-2xl">
              เลือกบริการที่เหมาะกับะูรกิจของคุณ
            </div>
            {/* <div className="font-light max-w-lg mt-5 text-sm">
              All devices come with free delivery or new-logoup as standard. See information on available shopping
              options for your location.
            </div> */}
          </div>

          {/* Card1 */}
          <div
            className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
            <div className="bg-[#FFFBEC] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 md:w-96">
                <div className="mt-3 font-semibold text-lg">Basic</div>
                <div className="text-sm font-light py-3">
                  <p>✓ ชื่อ + โลโก้บริษัท</p>
                  <p>✓ Domain name (.com/.net) </p>
                  <p>✓ SSL (HTTPS)`</p>
                  <p>✓ ดีไซน์หน้า Home Page ใหม่ รองรับทั้งหน้าจอ Desktop และ Mobile</p>
                  <p>✓ หน้าหลัก 5 หน้า ย่อยเพื่ออ่าน 2 หน้า</p>
                  <p>✓ &quot;สามารถปรับลดจำนวนหน้าหลักลงได้ และนำมาทำเป็นหน้าย่อยได้&quot; หน้าตามใจ 3</p>
                  <p>✓ แนะนำการใช้งานเว็บไซต์ เบื้องต้น</p>
                  <p>✓ จำนวนผู้ดูแลเว็บไซต์ 3 User</p>
                  <p>✓ รูป ไม่เกิน 100 รูปเนื้อหาไม่เกิน 2 GB</p>
                  <p>✓ ได้ 2 ภาษา ไทย/อังกฤษ</p>
                  <p>✓ ตรวจสอบงาน และแก้ไข 2 ครั้ง</p>
                </div>
                <div className="my-4 text-end">
                  <span className="font-bold text-base">4,500.-</span>
                  <span className="font-light text-sm">/ปี</span>
                </div>

                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:underline hover:bg-yellow-200/50">
                  รายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>

            {/* Card2 */}
            <div className="bg-[#F9ECFF] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 md:w-96">
                <div className="mt-3 font-semibold text-lg">Standard</div>
                <div className="text-sm font-light py-3">
                  <p>✓ ชื่อ + โลโก้บริษัท</p>
                  <p>✓ Domain name (.com/.net) </p>
                  <p>✓ SSL (HTTPS)</p>
                  <p>✓ ดีไซน์หน้า Home Page ใหม่ รองรับทั้งหน้าจอ Desktop และ Mobile</p>
                  <p>✓ หน้าหลัก 7 หน้า และมีย่อยเพื่ออ่าน 6 </p>
                  <p>✓ &quot;สามารถปรับลดจำนวนหน้าหลักลงได้ และนำมาทำเป็นหน้าย่อยได้&quot; หน้าตามใจ 3</p>
                  <p>✓ มีระบบ Back Office สำหรับจัดการข้อมูลของเว็บไซต์</p>
                  <p>✓ แนะนำการใช้งานเว็บไซต์ เบื้องต้น</p>
                  <p>✓ รูปไม่เกิน 200 รูป เนื้อหาไม่เกิน 5GB</p>
                  <p>✓ ได้ 2 ภาษา ไทย/อังกฤษ</p>
                  <p>✓ ตรวจสอบงาน และแก้ไข 2 ครั้ง</p>

                </div>
                <div className="my-4 text-end">
                  <span className="font-bold text-base">6,000.-</span>
                  <span className="font-light text-sm">/ปี</span>
                </div>

                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  รายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>

            {/* Card3 */}
            <div className="bg-[#ECEEFF] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 md:w-96">
                <div className="mt-3 font-semibold text-lg">E-Commerce&amp;Corporate</div>
                <div className="text-sm font-light w-60 md:w-auto">
                  <p>✓ ชื่อ + โลโก้บริษัท</p>
                  <p>✓ Domain name (.com/.net) </p>
                  <p>✓ SSL (HTTPS)</p>
                  <p>✓ ดีไซน์หน้า Home Page ใหม่ รองรับทั้งหน้าจอ Desktop และ Mobile</p>
                  <p>✓ หน้าเว็บสูงสุด 40หน้า</p>
                  <p>✓ &quot;สามารถปรับลดจำนวนหน้าหลักลงได้ และนำมาทำเป็นหน้าย่อยได้&quot;</p>
                  <p>✓ ลงสินค้า รวมข้อมูลอื่น ๆ ได้สูงสุด 500 รายการ</p>
                  <p>✓ มีระบบ Back Office สำหรับจัดการข้อมูลของเว็บไซต์</p>
                  <p>✓ แนะนำการใช้งานเว็บไซต์ เบื้องต้น</p>
                  <p>✓ รูปไม่เกิน 500 รูป เนื้อหาไม่เกิน 5GB</p>
                  <p>✓ ได้ 2 ภาษา ไทย/อังกฤษ</p>
                  <p>✓ ตรวจสอบงาน และแก้ไข 4 ครั้ง</p>

                </div>
                <div className="my-4 text-end">
                  <span className="font-bold text-base">3x,xxx+.-</span>
                  <span className="font-light text-sm">/ปี</span>
                </div>


                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  <a href='./services/packageDetail'>รายละเอียดเพิ่มเติม</a>
                </button>

              </div>
            </div>

          </div>

          <div className="flex justify-center">
            <button className="mt-12 text-white p-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">สอบถามเพิ่มเติม</button>
          </div>
        </div>

        <div>
          <WorkTapbar/>
        </div>
      </div>
    </Layout>
  )
}
