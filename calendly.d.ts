// calendly.d.ts
interface Calendly {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement | null;
      prefill?: any;
      utm?: any;
    }) => void;
    initPopupWidget: (options: {
      url: string;
      prefill?: any;
      utm?: any;
    }) => void;
    showPopupWidget: (url: string) => void;
    closePopupWidget: () => void;
  }
  
  interface Window {
    Calendly?: Calendly;
  }