import { useRef } from 'react';

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  return (
    <>
      <video src={source} ref={playerRef} />
      <button type="button" onClick={play}>
        play video
      </button>
      <button type="button" onClick={pause}>
        pause video
      </button>
    </>
  );
};
export default Player;
