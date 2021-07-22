import React from "react";
import Sound from "react-sound";

function SoundComponent({ newOrders }) {
  if (!newOrders.length)
    return (
      <Sound
        url="https://serverem.s3.us-east-2.amazonaws.com/old_telephone.mp3"
        loop={true}
        autoLoad={true}
        volume={100}
        playFromPosition={1000}
        playStatus={Sound.status.Paused}
      />
    );

  return (
    <Sound
      url="https://serverem.s3.us-east-2.amazonaws.com/old_telephone.mp3"
      loop={true}
      autoLoad={true}
      volume={100}
      playFromPosition={1000}
      playStatus={Sound.status.PLAYING}
      autoPlay={true}
    />
  );
}

export default SoundComponent;
