import { useEffect, useRef } from 'react';

const useEventListener = <T extends Event>(eventName: string, handler: (event: T) => void, element: EventTarget = window) => {
  const savedHandler = useRef<(event: T) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event as T);
      }
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
