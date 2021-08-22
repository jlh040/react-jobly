import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    try {
      let value = JSON.parse(window.localStorage.getItem(key) || defaultVal);
      return value;
    }
    catch(e) {
      alert('Local storage realized an error!');
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
};

export default useLocalStorage;