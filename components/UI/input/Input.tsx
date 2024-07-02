"use client"

import { InputProps } from '@/types';
import React, { forwardRef, useState } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  value,
  setValue,
  placeholder,
  minlength,
  maxlength,
  classNames,
  enterEvent,
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const enter = (e: any) => {
    if (e.which === 13) {
      if (value !== '') {
        enterEvent(value);
        setValue("");
      }
    }
  };

  return (
    <div className='relative'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        minLength={minlength}
        onKeyDown={enter}
        maxLength={maxlength}
        className={`h-[30px] bg-transparent border-b-2 text-[13px] border-[#45475a] focus:border-cyan-400 outline-none placeholder:text-zinc-500 ${classNames ? classNames : ''}`}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {
        value.length > 2 && (
          <button className='absolute top-[4px] right-0 px-1 bg-slate-950 rounded-md border-2 border-zinc-500 text-[12px] select-none max-md:hidden' onClick={() => enterEvent(value)}>GO</button>
        )
      }
      {isFocused || value.length <= 2 && (
        <span className='absolute top-[4px] right-0 px-2 bg-slate-950 rounded-md border-2 border-zinc-500 text-[12px] select-none max-md:hidden'>
          /
        </span>
      )}
    </div>
  );
});

export default Input;
