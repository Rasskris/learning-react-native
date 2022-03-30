import { Cartoon } from '../../../types';

type PickerData = {
  label: string;
  value: string;
};

export const getDataForPicker = (cartoonsData: Cartoon[]): PickerData[] => {
  return cartoonsData.map(({ title, url }) => ({ label: title, value: url }));
};
