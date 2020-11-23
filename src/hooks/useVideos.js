import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  // initialize videos piece of state
  const [videos, setVideos] = useState([]);
  // make default request
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
