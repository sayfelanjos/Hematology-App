export const sidebarIsOpenSlice = (set) => ({
  sidebarIsOpen: true,
  toggleSidebarState: () => set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
});
