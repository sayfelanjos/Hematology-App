import React from "react";
import componentStyles from "./Sidebar.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
import SidebarModuleButton from "../sidebar-module-button/SidebarModuleButton";
import SidebarDropdown from "../sidebar-dropdown/SidebarDropdown";
import { useThemeStore, useSidebarStore } from "store/store";
import StatisticsIcon from "../icons/StatisticsIcon";
import SuppliesIcon from "../icons/SuppliesIcon";
import InvoicesIcon from "../icons/InvoicesIcon";
import ContractsIcon from "../icons/ContractsIcon";
import CustomersAndSuppliersIcon from "../icons/CustomersAndSuppliersIcon";
import UsersIcon from "../icons/UsersIcon";
import OrdersIcon from "../icons/OrdersIcon";
import SidebarHeader from "../sidebar-header/SidebarHeader";
import { useAppStore } from "../../app-store/app-store";
import SectionDomain from "../section-domain/SectionDomain";

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
    <div
      className={`${
        sidebar.isOpen
          ? componentStyles["sidebar-container"]
          : componentStyles["sidebar-container-closed"]
      } ${themeColors[`${theme.color}-theme-sidebar-container`]}`}>
      <SidebarHeader />
      <div
        className={`${themeColors[`${theme.color}-theme-sidebar-domain-section`]} ${
          componentStyles["sidebar-modules"]
        }`}>
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
          <SidebarDropdown
            sidebarButtonAttributes={[
              { key: 1, action: "Novo", path: "/supplies/new" },
              { key: 2, action: "Lista", path: "/supplies/list" },
              { key: 3, action: "Retirar", path: "/supplies/remove" },
            ]}
          />
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
          <SidebarDropdown
            sidebarButtonAttributes={[
              { key: 1, action: "Novo Usuário", path: "#" },
              { key: 2, action: "Novo Usuário", path: "#" },
              { key: 3, action: "Novo Usuário", path: "#" },
              { key: 4, action: "Novo Usuário", path: "#" },
            ]}
          />
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
          <SidebarDropdown
            sidebarButtonAttributes={[
              { key: 1, action: "Novo Usuário", path: "#" },
              { key: 2, action: "Novo Usuário", path: "#" },
              { key: 3, action: "Novo Usuário", path: "#" },
              { key: 4, action: "Novo Usuário", path: "#" },
            ]}
          />
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
          <SidebarDropdown
            sidebarButtonAttributes={[
              { key: 1, action: "Novo Usuário", path: "#" },
              { key: 2, action: "Novo Usuário", path: "#" },
              { key: 3, action: "Novo Usuário", path: "#" },
              { key: 4, action: "Novo Usuário", path: "#" },
            ]}
          />
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
          <SidebarDropdown
            sidebarButtonAttributes={[
              { key: 1, action: "Novo Usuário", path: "#" },
              { key: 2, action: "Novo Usuário", path: "#" },
              { key: 3, action: "Novo Usuário", path: "#" },
              { key: 4, action: "Novo Usuário", path: "#" },
            ]}
          />
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
          <SidebarDropdown
            sidebarButtonAttributes={[
              { key: 1, action: "Novo Usuário", path: "#" },
              { key: 2, action: "Novo Usuário", path: "#" },
              { key: 3, action: "Novo Usuário", path: "#" },
              { key: 4, action: "Novo Usuário", path: "#" },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
