export interface IElectronAPI {
  network: () => Promise<void>;
  myPing: () => Promise<void>;
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}
