'use client';
import * as Select from '@radix-ui/react-select';
import { SelectItem } from '@radix-ui/themes';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

const DeliveryTime: FC = () => {
  return (
    <div className='container flex flex-col max-w-[900px] mx-auto my-10'>
      <h1 className='text-[3rem] font-bold text-center'>GetStarted</h1>
      <h4 className='text-center text-[20px]'>Choose your delivery time</h4>
      <p className='py-8 text-center max-w-[700px] self-center'>
        Each day, your brief will arive in your inbox at the following time.You
        can change it to whatever you'd like! The news in your brief will be
        from within 24 hours prior to delivery.
      </p>
      <div className='flex gap-2'>
        <Select.Root>
          <Select.Trigger className='inline-flex w-fit items-center justify-center border-[1px] border-gray-300 rounded px-[15px] text-[13px] leading-none h-[35px] gap-[15px] bg-white outline-none'>
            <Select.Value placeholder='08:00' />
            <Select.Icon className=''>
              <ChevronDownIcon size={20} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className='overflow-hidden border-[1px] border-gray-300 bg-white rounded-md shadow'>
              <Select.Viewport className='p-4'>
                <Select.Group className='flex flex-col gap-4'>
                  <SelectItem className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' value='item1'>06:00</SelectItem>
                  <SelectItem className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' value='item2'>07:00</SelectItem>
                  <SelectItem className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' value='item3'>08:00</SelectItem>
                  <SelectItem className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' value='item4'>09:00</SelectItem>
                  <SelectItem className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' value='item5'>10:00</SelectItem>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <Select.Root>
          <Select.Trigger className='inline-flex w-full items-center border-[1px] border-gray-300 rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white outline-none'>
            <Select.Value placeholder='Select Time Zone' />
            <Select.Icon className=''>
              <ChevronDownIcon size={20} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className='overflow-hidden w-full bg-white rounded-md shadow'>
              <Select.Viewport className='p-4'>
                <Select.Group className='flex flex-col gap-4'>
                  <SelectItem value='item1' className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' >
                    Paris,Berlin - CET (Central European Time) - GMT+1
                  </SelectItem>
                  <SelectItem value='item2' className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' >
                    Paris,Berlin - CET (Central European Time) - GMT+1
                  </SelectItem>
                  <SelectItem value='item3' className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer' >
                    Paris,Berlin - CET (Central European Time) - GMT+1
                  </SelectItem>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <Link href='/summary'>
      <button className='w-full py-2 shadow mt-8 bg-gray-800 text-white text-[16px] rounded-md'>Continue</button>
      </Link>
      <Link href='/overview' className='text-center mt-6'>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default DeliveryTime;
