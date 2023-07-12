import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import FormCreate from '@/container/Contact/FormCreate';

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
      <div className='Contact-page'>
        <FormCreate />
      </div>
    </TheLayout>
  )
}
export default ContactPage;
