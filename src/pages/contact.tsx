import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import FormCreate from '@/container/Contact/FormCreate';
import Address from '@/container/Contact/address';

const ContactPage: React.FC = () => {
  return (
    <TheLayout>

      <div className='Contact-page page-default-bg'>
        <Address />
        <FormCreate />
      </div>
    </TheLayout>
  )
}
export default ContactPage;
