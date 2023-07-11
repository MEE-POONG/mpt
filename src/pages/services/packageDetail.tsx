import { FiPhoneCall } from "react-icons/fi";
import Layout from "@/components/TheLayout";


export default function PackageDetail() {
    return (
        <Layout>
            <div className="container mx-auto py-24 font-font01">
                <div className="flex justify-between">
                    <p className="text-4xl">Package Basic</p>

                    <div className="p-2 rounded-3xl bg-cyan-600 text-white flex items-center">
                    <FiPhoneCall/> <a className="px-2"  href="tel:+">  ปรึกษา/สอบถาม</a>
                    </div>
                </div>

                <div className="mt-10">
                    <p>รายละเอียด</p>
                </div>

            </div>
        </Layout>
    )
}