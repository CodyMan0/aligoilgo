import { useCallback, useState } from 'react';

const useStateBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { value, on, off, toggle };
};

export default useStateBoolean;
