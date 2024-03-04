'use client';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addTopic, initTopicsFromSStorage, removeTopic } from '@/redux/features/topicSlice';
import Link from 'next/link';
import { Plus } from 'lucide-react';

type Props = {};

interface Topic {
  id: number;
  keywords: string[];
}

const GetStarted = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [words, setWords] = useState<string[]>([]);
  
  const {allTopics} = useAppSelector(state => state.topicSlice)
  const dispatch = useAppDispatch()
// console.log(allTopics)
  const handleTopicAdded = () => {
    if (words.length > 0) {
      const newId = Math.floor(Math.random() * 1000000);
      const topicTitle = words[0]
      const newTopic = {
        id: newId,
        topicTitle,
        keywords: words,
      };
      dispatch(addTopic(newTopic))
      setWords([]);
    }
  };

  const handleTopicRemove = (id: number) => {
    dispatch(removeTopic(id))
  }

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

  useEffect(() => {
    dispatch(initTopicsFromSStorage());
  }, []); 
  
  return (
    <div className='container flex flex-col max-w-[900px] mx-auto my-10'>
      <h1 className='text-[3rem] font-bold text-center'>GetStarted</h1>
      <div className='flex flex-col border-[1px] shadow border-gray-300 rounded-md py-8 px-6 mt-14 bg-white'>
        <p>
          <b>Topic *</b> (Type further keywords to define the topic you are
          interested in.)
        </p>
        <div className='flex mt-3 w-full py-3 px-2 border-[1px] border-gray-300 rounded-md bg-white'>
          <ul className='flex gap-2 flex-wrap'>
            {words.map((word, index) => (
              <li
                className='border-[1px] border-gray-300 rounded-md px-2'
                key={index}
              >
                {word}
                <button className='ml-3' onClick={() => handleDelete(index)}>
                  &times;
                </button>
              </li>
            ))}
            <input
              className='outline-none '
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder='Type a word and press Enter'
            />
          </ul>
        </div>
        <button
          onClick={handleAddPress}
          className='border-[1px] border-gray-300 py-1 px-4 mt-2 w-fit rounded-md'
        >
          Add
        </button>

        <p className='py-4'>
          Example: If you are interested in ai agents you should consider the
          following keywords AI agent, autonomous ai agents, swarm ai agents,
          AutoGPT, NanoGPT, MemGPT, langchain, LLM agents, Autogen.
        </p>
      </div>

      <button
        onClick={handleTopicAdded}
        className='w-full px-4 shadow flex justify-center items-center gap-2 border-[1px] border-gray-300 py-2 mt-4 mb-6 bg-white font-bold text-[16px] rounded-md'
      >
        <Plus size={20}/> Add New Topic
      </button>

      {allTopics?.map((item) => (
        <div key={item.id} className='flex flex-col mt-3 rounded-md shadow bg-white'>
          <ul className='flex border-[1px] border-gray-300 py-2 px-3 rounded-md m-4 gap-2 flex-wrap'>
            {item?.keywords?.map((word: string, index: number) => (
              <li
                className='border-[1px] border-gray-300 rounded-md px-2'
                key={index}
              >
                {word}
              </li>
            ))}
          </ul>

          <button onClick={() => handleTopicRemove(item.id)} className='w-fit px-4 self-end border-[1px] border-gray-300 py-1 mb-2 mr-4 bg-white font-bold text-[14px] rounded-md'>
            Delete Topic
          </button>
        </div>
      ))}

      <p className='mt-8'>
        (Optional){' '}
        <b>
          If you have a certain research question in mind please enter it here
        </b>
      </p>
      <textarea className='mt-2 w-full p-2 shadow border-[1px] border-gray-300 rounded-md bg-white'
        placeholder='e.g Sustainable Energy'
      />
      <Link href='/overview'>
      <button className='w-full py-2 shadow mt-8 bg-gray-800 text-white text-[16px] rounded-md'>
        Tailor my Content
      </button>
      </Link>
    </div>
  );
};

export default GetStarted;
