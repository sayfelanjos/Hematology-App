import React from "react";
import themeColors from "../../styles/themes/_themes.module.scss";
import { useThemeStore } from "store/store";

const LogoIcon = () => {
  const { theme } = useThemeStore();
  return (
    <svg
      id={themeColors[`${theme.color}-theme-logo`]}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.2312 12.6259L22.4812 0.451224C22.0303 0.155549 21.5197 0 21 0C20.4803 0 19.9697 0.155549 19.5187 0.451224L0.768753 12.6259C0.535245 12.7752 0.34084 12.9933 0.205675 13.2575C0.0705099 13.5218 -0.000499085 13.8227 2.64042e-06 14.1289V27.8711C-0.000499085 28.1773 0.0705099 28.4782 0.205675 28.7424C0.34084 29.0067 0.535245 29.2248 0.768753 29.3741L19.5187 41.5488C19.9697 41.8445 20.4803 42 21 42C21.5197 42 22.0303 41.8445 22.4812 41.5488L41.2312 29.3741C41.4648 29.2248 41.6592 29.0067 41.7943 28.7424C41.9295 28.4782 42.0005 28.1773 42 27.8711V14.1289C42.0005 13.8227 41.9295 13.5218 41.7943 13.2575C41.6592 12.9933 41.4648 12.7752 41.2312 12.6259ZM39 24.9294L32.9625 21L39 17.0706V24.9294ZM29.925 19.0246L22.5 14.1934V4.40209L37.4625 14.1289L29.925 19.0246ZM21 24.822L15.1125 21L21 17.178L26.8875 21L21 24.822ZM19.5 4.40209V14.1934L12.075 19.0246L4.5375 14.1289L19.5 4.40209ZM3 17.0706L9.0375 21L3 24.9294V17.0706ZM12.075 22.9754L19.5 27.8066V37.5979L4.5375 27.8711L12.075 22.9754ZM22.5 37.5979V27.8066L29.925 22.9754L37.4625 27.8711L22.5 37.5979Z"
        fill=""
      />
    </svg>
  );
};
export default LogoIcon;
