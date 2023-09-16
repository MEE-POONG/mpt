import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import MPTDetails from '@/container/About/MPTDetails'
import Teams from '@/container/About/Team'
import Apprentice from '@/container/About/Apprentice'
import IDContext from '@/components/emp/idContext'
import { useContext, useEffect } from 'react'
const ProfilePage: React.FC = () => {
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
                ProfilePage
            </div>
        </TheLayout>
    )
}
export default ProfilePage;
