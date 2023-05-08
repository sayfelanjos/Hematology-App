import { create } from "zustand";

export const useAppStore = create((set) => ({
  sidebarIsOpen: true,
  toggleSidebarState: () => set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
  configurationBarIsOpen: false,
  toggleConfigurationBarState: () =>
    set((state) => ({ configurationBarIsOpen: !state.configurationBarIsOpen })),
  statisticsButtonIsPressed: false,
  toggleStatisticsButtonState: () =>
    set((state) => ({ statisticsButtonIsPressed: !state.statisticsButtonIsPressed })),
  suppliesButtonIsPressed: false,
  toggleSuppliesButtonState: () =>
    set((state) => ({ suppliesButtonIsPressed: !state.suppliesButtonIsPressed })),
  ordersButtonIsPressed: false,
  toggleOrdersButtonState: () =>
    set((state) => ({ ordersButtonIsPressed: !state.ordersButtonIsPressed })),
  invoicesButtonIsPressed: false,
  toggleInvoicesButtonState: () =>
    set((state) => ({ invoicesButtonIsPressed: !state.invoicesButtonIsPressed })),
  contractsButtonIsPressed: false,
  toggleContractsButtonState: () =>
    set((state) => ({ contractsButtonIsPressed: !state.contractsButtonIsPressed })),
  customersAndSuppliersButtonIsPressed: false,
  toggleCustomersAndSuppliersButtonState: () =>
    set((state) => ({
      customersAndSuppliersButtonIsPressed: !state.customersAndSuppliersButtonIsPressed,
    })),
  usersButtonIsPressed: false,
  toggleUsersButtonState: () =>
    set((state) => ({ usersButtonIsPressed: !state.usersButtonIsPressed })),
}));
