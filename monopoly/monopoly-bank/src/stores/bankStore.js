import { defineStore } from 'pinia';

export const useBankStore = defineStore('bank', {
  state: () => ({
    transactions: [],
    players: [],
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
  },
});