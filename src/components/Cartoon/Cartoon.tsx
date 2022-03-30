import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Cartoon } from '../../types';
import CartoonVideo from './CartoonVideo';
import { getDataForPicker } from './helpers';
import iconTouch from './assets/icon-touch.png';
import styles, { pickerSelectStyles } from './Cartoon.style';

type Props = {
  cartoons: Cartoon[];
};

const CartoonList: React.FC<Props> = ({ cartoons }) => {
  const pickerData = getDataForPicker(cartoons);
  const [selectedCartoon, setSelectedCartoon] = useState(pickerData[0].value);

  const handleChangeCartoon = (value: string) => {
    setSelectedCartoon(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an episode</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        placeholder={{}}
        onValueChange={handleChangeCartoon}
        value={selectedCartoon}
        items={pickerData}
        Icon={() => <Image source={iconTouch} style={styles.iconTouch} width={25} height={25} />}
      />
      <CartoonVideo videoURL={selectedCartoon} />
    </View>
  );
};

export default CartoonList;
