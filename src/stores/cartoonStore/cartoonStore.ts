import { observable, action, computed, makeObservable, runInAction } from 'mobx';

import { Cartoon } from '../../types/';
import { getCartoons } from './cartoonStore.service';

class CartoonStore {
  cartoons: Cartoon[] = [];

  isLoading: boolean = false;

  isError: boolean = false;

  constructor() {
    makeObservable(this, {
      cartoons: observable,
      isLoading: observable,
      isError: observable,
      getCartoons: action.bound,
    });
  }

  async getCartoons(): Promise<void> {
    try {
      this.isLoading = true;
      const cartoons = await getCartoons();

      runInAction(() => {
        this.cartoons = cartoons;
      });
    } catch {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}

export default new CartoonStore();
