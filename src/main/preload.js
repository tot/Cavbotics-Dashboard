const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    openWebcam: async () => ipcRenderer.invoke('open:webcam'),
    openLimelight: async () => ipcRenderer.invoke('open:limelight'),
  },
});
