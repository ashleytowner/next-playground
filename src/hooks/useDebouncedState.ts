import { useEffect, useState } from 'react';

export default function useDebouncedState<T>(init: T, delay: number) {
  const [state, setState] = useState(init);
  const [liveState, setLiveState] = useState(init);

  useEffect(() => {
    const timer = setTimeout(() => setState(liveState), delay);
    return () => clearTimeout(timer);
  }, [setState, liveState, delay]);

  return [state, setLiveState, liveState] as const;
}
