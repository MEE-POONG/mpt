import { FiAperture } from "react-icons/fi";
import Layout from "@/components/TheLayout";

export default function GuildPage() {
    return (
        <Layout>
            <section className="container mx-auto py-24 font-font01">

                <h1>Welcome to GuildPage</h1>

                <div>
                    <p className="text-xs">ประเภทของกิล์</p>


                    <a className="flex items-center text-2xl hover:text-cyan-600" href="#">
                        <FiAperture />
                        <p className="ml-2">Click</p>
                    </a>

                </div>

            </section>
        </Layout>
    )
}