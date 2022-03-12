import {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailContent, setEmailContent] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, emailContent })
    });
    setEmail('');
    setEmailContent('');
  }

  return (<>
      <Header />
      <form onSubmit={sendEmail} className='max-w-[1080px] mx-auto grid grid-cols-1 p-5 space-y-4'>
        <label className='dark:text-slate-100 font-black' for='email'>E-Mail</label>
        <input name='email' className='dark:bg-slate-800 dark:text-slate-100 p-2 outline-none rounded' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <label className='dark:text-slate-100 font-black' for='content'>Gönderilcek içeriğiniz</label>
        <textarea name='content' className='min-h-[400px] dark:bg-slate-800 dark:text-slate-100 p-2 outline-none rounded resize-none' onChange={(e) => setEmailContent(e.target.value)} value={emailContent} ></textarea>
        <div className='flex items-center justify-end'><button className='w-full md:w-auto dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-slate-100 p-2 px-6 rounded' type='submit' >Gönder</button></div>
      </form>
      <Footer />
    </>);
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}

export default Contact;
