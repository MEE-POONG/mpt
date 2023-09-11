import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Author from '@/container/OurWork/Author'
export default function OurWorkPage() {
  return (
    <TheLayout>

      <div className='ourwork-page'>
        <Author />
      </div>
    </TheLayout>
  )
}
