import { create } from 'zustand';

import { persist } from 'zustand/middleware';

const usePriceStore = create(
  persist(
    (set, get) => ({
      price: 0,
      setPrice: (price) => set(() => ({ price })),
      addPrice: (price) => set((state) => ({ price: state.price + price })),
      minusPrice: (price) => set((state) => ({ price: state.price - price })),
      resetPrice: () => set(() => ({ price: 0 })),
      getPrice: () => get().price,
      postData: async (data) => {
        console.log('data', data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set({ price: data.price || 0 });
      },
    }),
    {
      name: 'price-storage', //持久化存储的key
    }
  )
);

export default usePriceStore;
