import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  talents: [],
  customers: [],
  showSideBar: false,

  updateTalents: async (value) => set((store) => ({ talents: value })),

  updateCutomers: async (value) => set((store) => ({ customers: value })),
  updateShowSidebar: async (value) => set((store) => ({ showSideBar: value })),
});

export const useStore = create(store, { name: "store" });
