export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  type MenuButton = {
    id: number;
    icon: string;
    moduleName: string;
    pageUrl: string;
    isPressed: boolean;
    toggleStateFunction: () => void;
  };
}
