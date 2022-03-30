import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { observer } from 'mobx-react-lite';

import cartoonStore from '../../stores/cartoonStore';
import Cartoon from '../Cartoon';
import logo from './assets/logo.png';
import styles from './App.styles';

const App: React.FC = observer(() => {
  const { cartoons, getCartoons } = cartoonStore;

  useEffect(() => {
    getCartoons();
  }, []);

  return (
    <View style={styles.container}>
      <AutoHeightImage source={logo} width={320} style={styles.logo} />
      {cartoons.length !== 0 ? <Cartoon cartoons={cartoons} /> : <ActivityIndicator />}
    </View>
  );
});

export default App;