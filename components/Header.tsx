"use client"

import React, { useRef, useEffect } from 'react';
import Input from './UI/input/Input';
import useEventListener from '@/hooks/useEventListener';

const Header = ({ value, setValue, searchPlayer }: { value: string; setValue: (arg: string) => void; searchPlayer: (arg: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === '/') {
      inputRef.current?.focus();
      e.preventDefault();
    }
  };

  useEventListener('keypress', handleKeyPress);

  return (
    <div className='__header__'>
      <div className='w-[inherit] h-[60px] max-md:h-fit  max-md:py-5'>
        <div className='w-[98%] h-[inherit] flex items-center justify-between px-8 mx-auto max-md:flex-col max-md:gap-5 '>
          {/* HEADER TITLE */}
          <div className='mx-2'>
            <div className='w-fit'>
              <h1 className='text-[18px] max-md:text-[26px]'>Netherite Pot TierList</h1>
            </div>
          </div>
          {/* SEARCH INPUT */}
          <div className='mx-2'>
            <div className='w-fit'>
              <Input
                value={value}
                setValue={(x) => setValue(x)}
                enterEvent={() => searchPlayer(value)}
                placeholder='Search player'
                minlength={1}
                maxlength={16}
                ref={inputRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
