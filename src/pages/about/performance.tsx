import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import MPTDetails from '@/container/About/MPTDetails'
// import Teams from '@/container/About/Team'
import Apprentice from '@/container/About/Apprentice'
import IDContext from '@/components/emp/idContext'
import { useContext, useEffect } from 'react'
const PerformancePage: React.FC = () => {
    const context = useContext(IDContext);
    if (!context) {
        throw new Error("TargetPage must be used within an IDProvider");
    }
    const { storedID } = context;

    useEffect(() => {
        console.log("storedID ", storedID);
    }, [storedID]);
    return (
        <TheLayout>
            <div className='performance-page page-default-bg'>
                <div className='container mx-auto'>
                    <h4 className='text-white'>ตัวอย่างผลงานของ ชื่อเจ้าของงาน</h4>
                    <div className="row mt-4">
                        {/* Start Card */}
                        <div className="col-md-4">
                            <div className="card" >
                                <img src="/images/port/panomwan.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">ชื่อชิ้นงาน</h5>
                                    <h6 className="card-subtitle mb-2 ">ประเภท (เว็บ/กราฟิก)</h6>
                                    <p className="card-text">รายละเอียดนิดหน่อย(ไม่จำเป็นต้องใส่ก็ได้)</p>
                                    <a href="#" className="btn mr-2"><i className="fas fa-link"></i> Visit </a>
                                    <a href="#" className="btn "><i className="fab fa-github"></i> Github</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </TheLayout>
    )
}
export default PerformancePage;
