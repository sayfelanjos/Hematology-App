import React from "react";
import componentStyles from "./ConfigurationBar.module.scss";
import fontStyles from "../../styles/fonts/_fonts.modules.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
import { useAppStore } from "../../store/store";
import { useThemeStore } from "store/store";

const ConfigurationBar = () => {
  const toggleConfigurationBarState = useAppStore((state) => state.toggleConfigurationBarState);
  const { theme, setColorTo } = useThemeStore();
  return (
    <div
      className={`${componentStyles["configuration-bar-container"]} ${
        themeColors[`${theme.color}-theme-configuration-bar-container`]
      }`}>
      <div
        className={`${componentStyles["button-of-close-container"]} ${
          themeColors[`${theme.color}-theme-configuration-bar-header-container`]
        }`}>
        <h1
          className={`${componentStyles["configuration-bar-header-name"]} ${
            fontStyles["semi-bold-normal-monospace-20"]
          } ${themeColors[`${theme.color}-theme-configuration-bar-config-name-color`]}`}>
          Configurações
        </h1>
        <button
          className={componentStyles["button-of-close"]}
          onClick={toggleConfigurationBarState}>
          <svg
            id={themeColors[`${theme.color}-theme-configuration-bar-button-of-close`]}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z" />
          </svg>
        </button>
      </div>
      <div className={componentStyles["configuration-bar-section"]}>
        <h1
          className={`${componentStyles["config-name"]} ${
            themeColors[`${theme.color}-theme-configuration-bar-config-name-color`]
          } ${fontStyles["semi-bold-normal-monospace-24"]}`}>
          Cor
        </h1>
        <div className={componentStyles["layout-icons-container"]}>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("gray")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#C0C0C0"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("blue")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#94A5FFFF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#94A5FFFF"
              />
            </svg>
          </button>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("yellow")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#CCB90AFF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#CCB90AFF"
              />
            </svg>
          </button>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("red")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#D11B1BFF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#D11B1BFF"
              />
            </svg>
          </button>
        </div>
        <div className={componentStyles["layout-icons-container"]}>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("cyan")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#50FFEAFF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#50FFEAFF"
              />
            </svg>
          </button>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("green")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#36D759FF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#36D759FF"
              />
            </svg>
          </button>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("purple")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#CF31D2FF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#CF31D2FF"
              />
            </svg>
          </button>
          <button
            className={themeColors[`${theme.color}-theme-configuration-bar-layout-color-button`]}
            onClick={() => setColorTo("orange")}>
            <svg
              width="49"
              height="42"
              viewBox="0 0 49 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33203 9C8.72986 9 9.11139 8.84196 9.39269 8.56066C9.674 8.27936 9.83203 7.89782 9.83203 7.5C9.83203 7.10218 9.674 6.72064 9.39269 6.43934C9.11139 6.15804 8.72986 6 8.33203 6C7.93421 6 7.55268 6.15804 7.27137 6.43934C6.99007 6.72064 6.83203 7.10218 6.83203 7.5C6.83203 7.89782 6.99007 8.27936 7.27137 8.56066C7.55268 8.84196 7.93421 9 8.33203 9ZM14.332 7.5C14.332 7.89782 14.174 8.27936 13.8927 8.56066C13.6114 8.84196 13.2299 9 12.832 9C12.4342 9 12.0527 8.84196 11.7714 8.56066C11.4901 8.27936 11.332 7.89782 11.332 7.5C11.332 7.10218 11.4901 6.72064 11.7714 6.43934C12.0527 6.15804 12.4342 6 12.832 6C13.2299 6 13.6114 6.15804 13.8927 6.43934C14.174 6.72064 14.332 7.10218 14.332 7.5ZM17.332 9C17.7299 9 18.1114 8.84196 18.3927 8.56066C18.674 8.27936 18.832 7.89782 18.832 7.5C18.832 7.10218 18.674 6.72064 18.3927 6.43934C18.1114 6.15804 17.7299 6 17.332 6C16.9342 6 16.5527 6.15804 16.2714 6.43934C15.9901 6.72064 15.832 7.10218 15.832 7.5C15.832 7.89782 15.9901 8.27936 16.2714 8.56066C16.5527 8.84196 16.9342 9 17.332 9Z"
                fill="#F39B17FF"
              />
              <path
                d="M6.83203 0C5.24073 0 3.71461 0.632141 2.58939 1.75736C1.46417 2.88258 0.832031 4.4087 0.832031 6L0.832031 36C0.832031 37.5913 1.46417 39.1174 2.58939 40.2426C3.71461 41.3679 5.24073 42 6.83203 42H42.832C44.4233 42 45.9495 41.3679 47.0747 40.2426C48.1999 39.1174 48.832 37.5913 48.832 36V6C48.832 4.4087 48.1999 2.88258 47.0747 1.75736C45.9495 0.632141 44.4233 0 42.832 0H6.83203ZM42.832 3C43.6277 3 44.3907 3.31607 44.9534 3.87868C45.516 4.44129 45.832 5.20435 45.832 6V12H3.83203V6C3.83203 5.20435 4.1481 4.44129 4.71071 3.87868C5.27332 3.31607 6.03638 3 6.83203 3H42.832ZM3.83203 36V15H15.832V39H6.83203C6.03638 39 5.27332 38.6839 4.71071 38.1213C4.1481 37.5587 3.83203 36.7957 3.83203 36ZM18.832 39V15H45.832V36C45.832 36.7957 45.516 37.5587 44.9534 38.1213C44.3907 38.6839 43.6277 39 42.832 39H18.832Z"
                fill="#F39B17FF"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationBar;
