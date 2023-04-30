import { create } from "zustand";

export const useAppStore = create((set) => ({
  sidebarIsOpen: true,
  toggleSidebarState: () => set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
  configurationBarIsOpen: false,
  toggleConfigurationBarState: () =>
    set((state) => ({ configurationBarIsOpen: !state.configurationBarIsOpen })),
}));
