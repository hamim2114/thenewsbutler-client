'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Image from 'next/image';
import paymentIcon from '@/public/images/payment-icon.png'

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('standard');

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };
  return (
    <div className='container flex flex-col max-w-[900px] mx-auto my-10'>
      <div className='flex relative justify-center items-center mb-4'>
        <Link href='/deliverytime'>
          <ArrowLeft className='absolute left-0' />
        </Link>
        <div className='self-center'>
          <h1 className='text-[3rem] font-bold text-center'>Pricing</h1>
          <h4 className='text-center text-[20px] text-gray-600 font-bold'>Choose an plan</h4>
        </div>
      </div>

      {/* Pricing section */}
      <div className='flex flex-col gap-8 mt-12'>

        <div onClick={() => handlePlanSelect('basic')} className='relative cursor-pointer w-full h-[120px] py-6 px-2 md:px-14 flex justify-between rounded-lg items-center shadow bg-white'>
          <div className='flex items-center gap-4'>
            {
              selectedPlan === 'basic' ? <Image src='/dot-fill.svg' alt='dot' width={40} height={40}/>
              : <Image src='/dot.svg' alt='dot' width={40} height={40}/>
            }
            <div>
              <h2 className='text-[22px] font-bold'>1 Month</h2>
              <p>21,02 &euro;</p>
            </div>
          </div>
          <div>
            <h2 className='text-[22px] font-bold'>21,02 &euro;</h2>
            <p>/Month</p>
          </div>
          <div className={`absolute ${selectedPlan === 'basic' ? 'block' : 'hidden'} w-full h-[100%] left-0 rounded-lg border-[1px] border-black`}>
            <div className='bg-black absolute top-0 text-center border-[1px] border-black rounded-t-lg w-full h-[25px] text-white'>
              Basic
            </div>
          </div>
        </div>

        <div onClick={() => handlePlanSelect('standard')} className='relative cursor-pointer w-full h-[120px] py-6 px-2 md:px-14 flex justify-between rounded-lg items-center shadow bg-white'>
          <div className='flex items-center gap-4'>
          {
              selectedPlan === 'standard' ? <Image src='/dot-fill.svg' alt='dot' width={40} height={40}/>
              : <Image src='/dot.svg' alt='dot' width={40} height={40}/>
            }
            <div>
              <h2 className='text-[22px] font-bold'>6 Months</h2>
              <p>31,02 &euro;</p>
            </div>
          </div>
          <div>
            <h2 className='text-[22px] font-bold'>31,02 &euro;</h2>
            <p>/Months</p>
          </div>
          <div className={`absolute ${selectedPlan === 'standard' ? 'block' : 'hidden'} w-full h-[100%] left-0 rounded-lg border-[1px] border-black`}>
            <div className='bg-black absolute top-0 text-center border-[1px] border-black rounded-t-lg w-full h-[25px] text-white'>
            Standard
            </div>
          </div>
        </div>

        <div onClick={() => handlePlanSelect('premium')} className='relative cursor-pointer w-full h-[120px] py-6 px-2 md:px-14 flex justify-between rounded-lg items-center shadow bg-white'>
          <div className='flex items-center gap-4'>
          {
              selectedPlan === 'premium' ? <Image src='/dot-fill.svg' alt='dot' width={40} height={40}/>
              : <Image src='/dot.svg' alt='dot' width={40} height={40}/>
            }
            <div>
              <h2 className='text-[22px] font-bold'>12 Months</h2>
              <p>321,02 &euro;</p>
            </div>
          </div>
          <div>
            <h2 className='text-[22px] font-bold'>321,02 &euro;</h2>
            <p>/Months</p>
          </div>
          <div className={`absolute ${selectedPlan === 'premium' ? 'block' : 'hidden'} w-full h-[100%] left-0 rounded-lg border-[1px] border-black`}>
            <div className='bg-black absolute top-0 text-center border-[1px] border-black rounded-t-lg w-full h-[25px] text-white'>
            Premium
            </div>
          </div>
        </div>

      </div>

      <h4 className='text-center text-[20px] text-gray-600 font-bold mt-8'>Discount</h4>
      <div className="flex gap-3 mb-2">
        <input className='border-[1px] border-gray-300 py-2 px-3 mt-2 w-full rounded-md' type="text" placeholder='Input discount code here' />
        <button className='border-[1px] border-gray-300 py-1 px-6 mt-2 w-fit rounded-md'>Apply</button>
      </div>
      <Link href='/thankyou'>
        <button className='w-full py-2 mt-4 bg-gray-800 text-white text-[16px] rounded-md'>CheckOut</button>
      </Link>
      <Image className='self-center mt-10' src={paymentIcon} alt='payment' />
    </div>
  );
};

export default Pricing;
