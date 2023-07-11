import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import Layout from "@/components/TheLayout";

export default function ContentsPage() {
    return (
        <Layout>
            <section className="container mt-10 mx-auto p-8 font-font01 mb-36">
                <div className="mt-5">
                <h2 className="text-2xl text-gray-600 mb-10 text-center font-semibold p-2">กิจกรรม</h2>
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6" >
                    <Card className="mt-6 w-80 p-5 ">
                        <CardHeader color="blue-gray" className="relative -translate-y-6">
                            <img className="" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />
                        </CardHeader>
                        <CardBody className="py-2 px-2 font-font01">
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography className="font-font01">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                and near to &quot;สวัสดี&quot; where you can enjoy the main night life
                                in Barcelona.
                            </Typography>
                        </CardBody>
                        <CardFooter className="p-1 text-right">
                            <Button className=" bg-black rounded-full hover:bg-sky-500 text-sm font-font01 p-3">อ่านเพิ่ม</Button>
                        </CardFooter>
                    </Card>
                </div>
                </div>
            </section>
        </Layout>
    )
}