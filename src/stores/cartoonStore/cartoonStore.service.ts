import { Cartoon } from '../../types';
import { cartoons } from './cartoonStore.data';

const getCartoons = async (): Promise<Cartoon[]> => {
  return Promise.resolve(cartoons);
};

export { getCartoons };
