// global.d.ts
export {};

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    fnames?: string[];
    ftypes?: string[];
    jQuery: any;
  }
}