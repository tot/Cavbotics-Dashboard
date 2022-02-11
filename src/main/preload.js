const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    connect(event, args) {
      ipcRenderer.invoke('connect', 'test network ipc');
    },
    setStatus(callback) {
      ipcRenderer.on('connection-status', callback);
    },
    // Get robot Info
    getInfo(callback) {
      ipcRenderer.invoke('getInfo', callback);
    },
    testMessage(callback) {
      ipcRenderer.on('test-message', callback);
    },
    connectionStatus(callback) {
      ipcRenderer.on('connection-status', callback);
    },
  },
});
