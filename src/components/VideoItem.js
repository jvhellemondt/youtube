import React from 'react';

const VideoItem = ( { video } ) => {
  console.log( video );
  return (
    <div className="item">
      <img class="ui avatar image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        />
        <div class="content">
          <a class="header">{video.snippet.title}</a>
          <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
        </div>
    </div>
  );
};

export default VideoItem;