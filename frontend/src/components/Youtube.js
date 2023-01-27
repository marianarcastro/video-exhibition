import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";
import ReactPlayer from "react-player/youtube";

const Youtube = ({ youtubeLink }) => {

  return (
    <div className="player-wrapper">
        <ReactPlayer className="react-player" url={youtubeLink} controls/>
    </div>
  );
};

export default Youtube;
