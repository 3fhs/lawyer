declare module 'html2pdf.js' {
    export default function html2pdf(
      element: HTMLElement,
      options?: any
    ): {
      from: (element: HTMLElement) => {
        set: (options: any) => any;
        save: (filename?: string) => Promise<void>;
      };
    };
  }
  