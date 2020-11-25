import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  // initialize selectedVideo piece of state
  const [selectedVideo, setSelectedVideo] = useState(null);
  // make call to useVideos custom Hook
  const [videos, search] = useVideos('grateful dead');

  // run this useEffect any time there's a new list of videos
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '2rem' }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
