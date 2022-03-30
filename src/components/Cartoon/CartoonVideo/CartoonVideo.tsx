import React, { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';
import * as VideoThumbnails from 'expo-video-thumbnails';

import PlayButton from '../PlayButton';
import styles from './CartoonVideo.styles';

const defaultPosterUri = 'https://chpic.su/_data/stickers/t/Tom_jerry_LizF/Tom_jerry_LizF_002.webp';

type Props = {
  videoURL: string;
};

const CartoonItem: React.FC<Props> = ({ videoURL }) => {
  const video = useRef<Video | null>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const [posterUri, setPosterUri] = useState<string>(defaultPosterUri);

  const isPlayButtonVisible = 'isPlaying' in status ? status.isPlaying : false;

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(videoURL, { time: 15000 });
      setPosterUri(uri);
    } catch(e) {
      console.warn(e);
    }
  };

  const handlePlayButton = (): void => {
    if (video.current) {
      video.current.playAsync();
    }
  };

  useEffect(() => { 
    Audio.setAudioModeAsync({ 
      playsInSilentModeIOS: true, 
      staysActiveInBackground: true,
    }); 
  }, []);

  useEffect(() => {
    video.current?.setPositionAsync(0);
    generateThumbnail();
  }, [videoURL]);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoURL,
        }}
        useNativeControls
        posterSource={{ uri: posterUri }}
        posterStyle={styles.videoPoster}
        isLooping
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        usePoster
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <PlayButton isVisible={isPlayButtonVisible} onPressButton={handlePlayButton}/>
    </View>
  );
};

export default CartoonItem;