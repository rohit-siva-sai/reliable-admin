import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  talents: [],
  customers: [],
  showSideBar: false,
  allTalents: [],
  allCustomers: [],

  updateTalents: async (value) => set((store) => ({ talents: value })),
  updateAllTalents: async (value) => set((store) => ({ allTalents: value })),
  updateAllCustomers: async (value) =>
    set((store) => ({ allCustomers: value })),

  updateCutomers: async (value) => set((store) => ({ customers: value })),
  updateShowSidebar: async (value) => set((store) => ({ showSideBar: value })),
});

export const useStore = create(store, { name: "store" });
