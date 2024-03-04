'use client';
import React from 'react';
import { ArrowLeft, CheckCheck } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const WhatYouGet = () => {
  return (
    <div className='container flex flex-col max-w-[900px] mx-auto my-10'>
      <div className='flex relative justify-center items-center mb-16'>
        <Link href='/summary'>
          <ArrowLeft className='absolute left-0' />
        </Link>
        <div className='self-center'>
          <h1 className='text-[2.5rem] leading-none font-bold text-center'>
            What you get <br /> with NewsBulter
          </h1>
        </div>
      </div>
      <div className='flex flex-col mb-4 shadow py-4 px-6 rounded-md bg-white'>
        <CheckCheck />
        <p>Unlimited access to all Blinks in audio and text on web and app</p>
      </div>
      <div className='flex flex-col mb-4 shadow py-4 px-6 rounded-md bg-white'>
        <CheckCheck />
        <p>Unlimited access to all Blinks in audio and text on web and app</p>
      </div>
      <div className='flex flex-col mb-4 shadow py-4 px-6 rounded-md bg-white'>
        <CheckCheck />
        <p>Unlimited access to all Blinks in audio and text on web and app</p>
      </div>
      <div className='flex flex-col mb-4 shadow py-4 px-6 rounded-md bg-white'>
        <CheckCheck />
        <p>Unlimited access to all Blinks in audio and text on web and app</p>
      </div>
      <h6 className='text-center my-4 font-bold text-[20px]'>
        Frequently Asked Questions
      </h6>
      <Accordion.Root
        className='bg-mauve6 w-full rounded-md shadow'
        type='single'
        defaultValue='item-1'
        collapsible
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      <h6 className='text-center my-4 font-bold text-[20px]'>Reviews</h6>
      <div className='flex flex-col mb-4 shadow py-4 px-6 rounded-md bg-white'>
        <div className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
        <p className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint optio eligendi nesciunt earum hic dolorem.</p>
        <h6 className='font-bold'>Ronald Richards</h6>
      </div>
      <Link href='/pricing'>
        <button
          className='w-full py-2 mt-4 bg-gray-800 text-white text-[16px] rounded-md'
          type='submit'
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default WhatYouGet;
