import { useState, useEffect } from "react";

import * as musicService from "../services/musicService";

const useMusicState = (musicId) => {
  const [music, setMusic] = useState({});

  useEffect(() => {
    musicService.getOne(musicId).then((res) => {
      setMusic(res);
    });
  }, [musicId]);

  return [music, setMusic];
};

export default useMusicState;
