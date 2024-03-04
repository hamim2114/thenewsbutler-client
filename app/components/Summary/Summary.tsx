'use client';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  initTopicsFromSStorage,
  removeTopic,
  updateTopic,
} from '@/redux/features/topicSlice';
import * as Select from '@radix-ui/react-select';
import { SelectItem } from '@radix-ui/themes';
import { ChevronDownIcon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { GripVertical, Pencil, Plus, Trash2, X } from 'lucide-react';
import Link from 'next/link';

const Summary = () => {
  const [editTopicOn, setEditTopicOn] = useState<boolean>(false);
  const [editTopicId, setEditTopicId] = useState<number>(NaN);
  const [inputValue, setInputValue] = useState<string>('');
  const [words, setWords] = useState<string[]>([]);
  const [updatedTopicTitle, setUpdatedTopicTitle] = useState<string>('');
  const [deliveryTimeEditOn, setDeliveryTimeEditOn] = useState<boolean>(false);

  const { allTopics } = useAppSelector((state) => state.topicSlice);
  const dispatch = useAppDispatch();

  const handleTopicRemove = (id: number) => {
    dispatch(removeTopic(id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setWords([...words, inputValue.trim()]);
      setInputValue('');
    }
  };
  const handleAddPress = () => {
    if (inputValue) {
      setWords([...words, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = (index: number) => {
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
  };

  const handleTopicTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTopicTitle(e.target.value);
  };

  const handleUpdatedTopic = () => {
    const updatedTopic = {
      id: editTopicId,
      topicTitle: updatedTopicTitle,
      keywords: words,
    };
    dispatch(updateTopic(updatedTopic));
    setEditTopicOn(false);
  };

  useEffect(() => {
    const editTopic = allTopics.find((topic) => topic.id === editTopicId);
    setWords(editTopic ? editTopic.keywords : []);
    setUpdatedTopicTitle(editTopic ? editTopic.topicTitle : '');
  }, [editTopicOn && editTopicId]);

  useEffect(() => {
    dispatch(initTopicsFromSStorage());
  }, [dispatch]);
  return (
    <div className='container flex flex-col max-w-[900px] mx-auto my-10'>
      <div className='flex relative justify-center items-center mb-4'>
        <Link href='/deliverytime'>
          <ArrowLeft className='absolute left-0' />
        </Link>
        <div className='self-center'>
          <h1 className='text-[3rem] font-bold text-center'>Summery</h1>
          <h4 className='text-center text-[20px]'>
            What you get with NewsBulter
          </h4>
        </div>
      </div>
      {deliveryTimeEditOn ? (
        <div className='flex flex-col mt-10 shadow p-3 md:p-6 rounded-md bg-white'>
          <h6>Frequency & Time of Delivery</h6>
          <div className='flex gap-2 mt-3'>
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
                      <SelectItem
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                        value='item1'
                      >
                        06:00
                      </SelectItem>
                      <SelectItem
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                        value='item2'
                      >
                        07:00
                      </SelectItem>
                      <SelectItem
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                        value='item3'
                      >
                        08:00
                      </SelectItem>
                      <SelectItem
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                        value='item4'
                      >
                        09:00
                      </SelectItem>
                      <SelectItem
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                        value='item5'
                      >
                        10:00
                      </SelectItem>
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
                      <SelectItem
                        value='item1'
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                      >
                        Paris,Berlin - CET (Central European Time) - GMT+1
                      </SelectItem>
                      <SelectItem
                        value='item2'
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                      >
                        Paris,Berlin - CET (Central European Time) - GMT+1
                      </SelectItem>
                      <SelectItem
                        value='item3'
                        className='flex gap-2 items-center hover:outline-slate-200 hover:outline-offset-4 cursor-pointer'
                      >
                        Paris,Berlin - CET (Central European Time) - GMT+1
                      </SelectItem>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className='flex gap-2 self-end'>
            <button
              onClick={() => setDeliveryTimeEditOn(false)}
              className='border-[1px] border-gray-300 py-1 px-4 mt-2 w-fit rounded-md'
            >
              <X />
            </button>
            <button
              onClick={() => setDeliveryTimeEditOn(false)}
              className='bg-gray-800 text-white py-1 px-4 mt-2 w-fit rounded-md'
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col mt-10 shadow p-3 md:p-6 rounded-md bg-white'>
          <div className='flex justify-between items-center'>
            <h6>Frequency & Time of Delivery</h6>
            <button onClick={() => setDeliveryTimeEditOn(true)}>
              <Pencil size={20} />
            </button>
          </div>
          <div className='flex gap-2 mt-2'>
            <h6>08:00</h6>
            <p className='border-[1px] rounded px-2 border-gray-300'>
              CET (Central European Time) - GMT+1
            </p>
          </div>
        </div>
      )}

      {allTopics.length === 0 ? (
        <h5 className='font-bold mt-6 text-center'>No Topic Found!</h5>
      ) : (
        allTopics.map((topic) =>
          editTopicOn && editTopicId === topic.id ? (
            //Edit Topic
            <div className='flex flex-col mt-10 shadow p-6 rounded-md bg-white'>
              <h6 className=''>Topic</h6>
              <input
                className='w-full px-4 shadow border-[1px] mb-3 border-gray-300 py-2 bg-white rounded-md'
                type='text'
                value={updatedTopicTitle}
                onChange={handleTopicTitleChange}
              />
              <h6 className=''>Keywords</h6>
              <div className='flex w-full py-3 px-2 border-[1px] border-gray-300 rounded-md bg-white'>
                <ul className='flex gap-2 flex-wrap'>
                  {words.map((word, index) => (
                    <li
                      className='border-[1px] border-gray-300 rounded-md px-2'
                      key={index}
                    >
                      {word}
                      <button
                        className='ml-3'
                        onClick={() => handleDelete(index)}
                      >
                        &times;
                      </button>
                    </li>
                  ))}
                  <input
                    className='outline-none px-2 w-fit'
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder='Type a word'
                  />
                </ul>
              </div>
              <div className='flex justify-between'>
                <button
                  onClick={handleAddPress}
                  className='border-[1px] border-gray-300 py-1 px-4 mt-2 w-fit rounded-md'
                >
                  Add
                </button>
                <div className='flex gap-2 self-end'>
                  <button
                    onClick={() => setEditTopicOn(false)}
                    className='border-[1px] border-gray-300 py-1 px-4 mt-2 w-fit rounded-md'
                  >
                    <X />
                  </button>
                  <button
                    onClick={handleUpdatedTopic}
                    className='bg-gray-800 text-white py-1 px-4 mt-2 w-fit rounded-md'
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            //Topic Card
            <div
              key={topic.id}
              className='flex flex-col gap-3 mt-10 shadow p-3 md:p-6 rounded-md bg-white'
            >
              <div className='flex justify-between'>
                <div className='flex gap-2 align-middle'>
                  <GripVertical />
                  <h6 className='text-[20px]'>Topic</h6>
                </div>
                <div className='flex gap-6 align-middle'>
                  <button
                    onClick={() => (
                      setEditTopicOn(true), setEditTopicId(topic.id)
                    )}
                  >
                    <Pencil size={20} />
                  </button>
                  <button onClick={() => handleTopicRemove(topic.id)}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <h5 className='ml-8 font-bold'>{topic.topicTitle}</h5>
              <h6 className='ml-8'>Keywords</h6>
              <ul className='flex ml-8 gap-2 flex-wrap'>
                {topic?.keywords?.map((word: string, index: number) => (
                  <li
                    className='border-[1px] border-gray-300 rounded-sm px-2'
                    key={index}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </div>
          )
        )
      )}
      <Link href='/'>
        <button className='w-full px-4 shadow flex justify-center items-center gap-2 border-[1px] border-gray-300 py-2 mt-4 mb-6 bg-white font-bold text-[16px] rounded-md'>
          <Plus size={20} /> Add New Topic
        </button>
      </Link>
      <Link href='/whatyouget'>
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

export default Summary;
