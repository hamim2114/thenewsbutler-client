import { ArrowLeft, MailCheck, MailCheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ThankYou = () => {
  return (
    <div className='container flex flex-col max-w-[900px] mx-auto my-10'>
      <div className='flex relative justify-center items-center mb-4'>
        <Link href='/pricing'>
          <ArrowLeft className='absolute left-0' />
        </Link>
        <div className='flex flex-col justify-center items-center'>
          <MailCheckIcon size={80} />
          <h1 className='text-[3rem] font-bold text-center'>Thank you</h1>
          <h4 className='text-center text-[20px] text-gray-600 font-bold'>
            You are now subscribed
          </h4>
        </div>
      </div>
      <p className='text-center my-10'>
        Please confirm your registration via the email send to you!{' '}
        <a href=''>Refer us</a> to five of your friends with this link to get
        NewsBulter one mont for free
      </p>
      <Link href=''>
        <button className='w-full py-2 mt-4 bg-gray-800 text-white text-[16px] rounded-md'>
          Proceed to Sign In
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;
