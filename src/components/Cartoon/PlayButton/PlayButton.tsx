import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import button from './assets/play-button.png';
import styles from './PlayButton.styles';

type Props = {
  isVisible: boolean;
  onPressButton: () => void;
};

const ButtonPlayVideo: React.FC<Props> = ({ isVisible, onPressButton}) => {
  return (
    <TouchableOpacity 
      style={{ ...styles.button, display: isVisible ? 'none' : 'flex' }}
      onPress={onPressButton}
    >
      <Image source={button} width={60} height={60} />
    </TouchableOpacity>
  );
};

export default ButtonPlayVideo;