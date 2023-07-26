import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import FormCreate from '@/container/Contact/FormCreate';
import Address from '@/container/Contact/address';
import FormCreateCopy from '@/container/Contact/FormCreatecopy';

const ContactPage: React.FC = () => {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='Contact-page page-default-bg'>
        <Address />
        <FormCreate />
        {/* <FormCreateCopy /> */}
      </div>
    </TheLayout>
  )
}
export default ContactPage;
