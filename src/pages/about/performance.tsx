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
                <div className='container mx-auto bg-secondary bg-opacity-10 p-5 rounded-3'>
                    <h4 className='text-white'>ตัวอย่างผลงานของ ชื่อเจ้าของงาน</h4>

                    <div className="row text-info mt-3">
                        <div className="col-12 col-md-4 mb-sm-2 mb-2">
                            <div className="card border border-info rounded-1">
                                <img src="/images/port/panomwan.png" alt="" />

                                <div className="card-body">
                                    <h5 className='text-info'>Project Name</h5>
                                    <p className='mt-1'>Descript</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-sm-2 mb-2">
                            <div className="card border border-info rounded-1">
                                <img src="/images/port/panomwan.png" alt="" />

                                <div className="card-body">
                                    <h5 className='text-info'>Project Name</h5>
                                    <p className='mt-1'>Descript</p>
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
