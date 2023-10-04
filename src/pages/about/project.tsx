import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import MPTDetails from '@/container/About/MPTDetails'
import Teams from '@/container/About/team'
import Apprentice from '@/container/About/Apprentice'
import { useContext, useEffect } from 'react'
import IDContext from '@/components/emp/idContext'
const ProjectPage: React.FC = () => {
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
            <div className='project-page page-default-bg'>
                ProjectPage
            </div>
        </TheLayout>
    )
}
export default ProjectPage;
