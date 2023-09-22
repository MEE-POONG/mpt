import { LanguageContext } from '@/components/Language/LanguageContext';
import TheLayout from '@/components/TheLayout'
import IDContext from '@/components/emp/idContext'
import Article from '@/container/About/portfoilo/Article';
import MePortfoilo from '@/container/About/portfoilo/Me';
import { employee } from '@/data/about';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
type EmployeeType = typeof employee[0];

const ProfilePage: React.FC = () => {
    const router = useRouter();
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeType | null>(null);
    if (!context) {
        throw new Error("TargetPage must be used within an IDProvider");
    }
    const { storedID } = context;
    useEffect(() => {
        if (!storedID) {
            router.push('/about');
            return;
        }
        setSelectedEmployee(employee.find(emp => emp.id === storedID) || null);

    }, [storedID, router]);

    return (
        <TheLayout>
            <div className='profile-page page-default-bg'>
                <MePortfoilo />
                <Article />
            </div>
        </TheLayout>
    )
}
export default ProfilePage;
