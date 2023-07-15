import React, { useEffect, useRef } from 'react';

export function useDidMountEffect(func: React.EffectCallback, deps: React.DependencyList): void {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      return func();
    } else {
      didMount.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useDidMountEffect;
