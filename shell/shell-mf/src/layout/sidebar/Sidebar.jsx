import React from "react";
import "./Sidebar.scss";
import "../../sass/themes/_themes.scss";
import SidebarModuleButton from "../../components/sidebar-module-button/SidebarModuleButton";
import SidebarDropdown from "../../components/sidebar-dropdown/SidebarDropdown";
import { useThemeStore, useSidebarStore } from "store/store";
import StatisticsIcon from "../../icons/StatisticsIcon";
import SuppliesIcon from "../../icons/SuppliesIcon";
import InvoicesIcon from "../../icons/InvoicesIcon";
import ContractsIcon from "../../icons/ContractsIcon";
import CustomersAndSuppliersIcon from "../../icons/CustomersAndSuppliersIcon";
import UsersIcon from "../../icons/UsersIcon";
import OrdersIcon from "../../icons/OrdersIcon";
import SidebarHeader from "../../components/sidebar-header/SidebarHeader";
import { useAppStore } from "../../app-store/app-store";
import SectionDomain from "../../components/section-domain/SectionDomain";
import {
  contractsDropdownAttributes,
  suppliesDropdownAttributes,
  ordersDropdownAttributes,
  invoicesDropdownAttributes,
  customersAndSuppliersDropdownAttributes,
  usersDropdownAttributes,
} from "./DropdownAttributes";

const Sidebar = () => {
  // const url = useLocation();
  // let re = /\/[A-Za-z0-9:._-]*\/{0}/;
  // let urlSlice = url.pathname.match(re);
  const suppliesButtonIsPressed = useAppStore((state) => state.suppliesButtonIsPressed);
  const toggleSuppliesButtonState = useAppStore((state) => state.toggleSuppliesButtonState);
  const ordersButtonIsPressed = useAppStore((state) => state.ordersButtonIsPressed);
  const toggleOrdersButtonState = useAppStore((state) => state.toggleOrdersButtonState);
  const invoicesButtonIsPressed = useAppStore((state) => state.invoicesButtonIsPressed);
  const toggleInvoicesButtonState = useAppStore((state) => state.toggleInvoicesButtonState);
  const contractsButtonIsPressed = useAppStore((state) => state.contractsButtonIsPressed);
  const toggleContractsButtonState = useAppStore((state) => state.toggleContractsButtonState);
  const customersAndSuppliersButtonIsPressed = useAppStore(
    (state) => state.customersAndSuppliersButtonIsPressed,
  );
  const toggleCustomersAndSuppliersButtonState = useAppStore(
    (state) => state.toggleCustomersAndSuppliersButtonState,
  );
  const usersButtonIsPressed = useAppStore((state) => state.usersButtonIsPressed);
  const toggleUsersButtonState = useAppStore((state) => state.toggleUsersButtonState);
  const { theme } = useThemeStore();
  const { sidebar } = useSidebarStore();
  return (
    <aside
      className={`${sidebar.isOpen ? "sidebar" : "sidebar--closed"} ${
        theme.color
      }-theme-sidebar-container`}>
      <SidebarHeader />
      <div
        className={`${theme.color}-theme-sidebar-domain-section
        } ${"sidebar__modules"}`}>
        <SectionDomain domainName={"Geral"} />
        <SidebarModuleButton
          key={1}
          id={""}
          moduleName={"Estatísticas"}
          pageUrl={"/"}
          sidebarIsOpen={sidebar.isOpen}
          isPressed={"/" === "/"}>
          <StatisticsIcon />
        </SidebarModuleButton>
        <SectionDomain domainName={"Aplicativos"} />
        <SidebarModuleButton
          key={2}
          id={""}
          moduleName={"Insumos"}
          pageUrl={"/supplies"}
          sidebarIsOpen={sidebar.isOpen}
          onClick={toggleSuppliesButtonState}>
          <SuppliesIcon />
        </SidebarModuleButton>
        {suppliesButtonIsPressed && (
          <SidebarDropdown sidebarButtonAttributes={suppliesDropdownAttributes} />
        )}
        <SidebarModuleButton
          key={3}
          id={""}
          moduleName={"Pedido de Compras"}
          pageUrl={"/orders"}
          sidebarIsOpen={sidebar.isOpen}
          onClick={toggleOrdersButtonState}>
          <OrdersIcon />
        </SidebarModuleButton>
        {ordersButtonIsPressed && (
          <SidebarDropdown sidebarButtonAttributes={ordersDropdownAttributes} />
        )}
        <SidebarModuleButton
          key={4}
          id={4}
          moduleName={"Notas Fiscais"}
          pageUrl={"/invoices"}
          sidebarIsOpen={sidebar.isOpen}
          onClick={toggleInvoicesButtonState}>
          <InvoicesIcon />
        </SidebarModuleButton>
        {invoicesButtonIsPressed && (
          <SidebarDropdown sidebarButtonAttributes={invoicesDropdownAttributes} />
        )}
        <SidebarModuleButton
          key={5}
          id={""}
          moduleName={"Contratos"}
          pageUrl={"/contracts"}
          sidebarIsOpen={sidebar.isOpen}
          onClick={toggleContractsButtonState}>
          <ContractsIcon />
        </SidebarModuleButton>
        {contractsButtonIsPressed && (
          <SidebarDropdown sidebarButtonAttributes={contractsDropdownAttributes} />
        )}
        <SidebarModuleButton
          key={6}
          id={""}
          moduleName={"Clientes e Fornecedores"}
          pageUrl={"/customers-and-suppliers"}
          sidebarIsOpen={sidebar.isOpen}
          onClick={toggleCustomersAndSuppliersButtonState}>
          <CustomersAndSuppliersIcon />
        </SidebarModuleButton>
        {customersAndSuppliersButtonIsPressed && (
          <SidebarDropdown sidebarButtonAttributes={customersAndSuppliersDropdownAttributes} />
        )}
        <SectionDomain domainName={"Gerenciamento"} />
        <SidebarModuleButton
          key={7}
          id={""}
          moduleName={"Usuários"}
          pageUrl={"/users"}
          sidebarIsOpen={sidebar.isOpen}
          onClick={toggleUsersButtonState}>
          <UsersIcon />
        </SidebarModuleButton>
        {usersButtonIsPressed && (
          <SidebarDropdown sidebarButtonAttributes={usersDropdownAttributes} />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
