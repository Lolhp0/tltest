import { useEffect, useRef } from 'react';

const useEventListener = <T extends Event>(eventName: string, handler: (event: T) => void, element?: EventTarget) => {
  const savedHandler = useRef<(event: T) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Skip if running on the server

    const targetElement = element ?? window;
    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event as T);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
