/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { spawn } from 'child_process';
import kill from 'tree-kill';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

const child = spawn('java', ['-jar', `${app.getAppPath()}\\server.jar`, '']);
console.log(app.getAppPath());

kill(child.pid);

let mainwindow: BrowserWindow | null = null;
let limelightwindow: BrowserWindow | null = null;
let webcamwindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
  console.log(app.getAppPath());
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainwindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainwindow.loadURL(resolveHtmlPath('mainwindow/index.html'));

  mainwindow.on('ready-to-show', () => {
    if (!mainwindow) {
      throw new Error('"limelightwindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainwindow.minimize();
    } else {
      mainwindow.show();
    }
  });

  mainwindow.on('closed', () => {
    mainwindow = null;
  });

  const menuBuilder1 = new MenuBuilder(mainwindow);
  menuBuilder1.buildMenu();

  // Open urls in the user's browser
  mainwindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainwindow === null) {
        createWindow();
      }
    });
  })
  .catch(console.log);

ipcMain.handle('open:limelight', async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  limelightwindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  limelightwindow.loadURL(resolveHtmlPath('limelightwindow/index.html'));

  limelightwindow.on('ready-to-show', () => {
    if (!limelightwindow) {
      throw new Error('"limelightwindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      limelightwindow.minimize();
    } else {
      limelightwindow.show();
    }
  });

  limelightwindow.on('closed', () => {
    mainwindow = null;
  });

  // Open urls in the user's browser
  limelightwindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  const menuBuilder2 = new MenuBuilder(limelightwindow);

  menuBuilder2.buildMenu();
});

ipcMain.handle('open:webcam', async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  webcamwindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  webcamwindow.loadURL(resolveHtmlPath('webcamwindow/index.html'));

  webcamwindow.on('ready-to-show', () => {
    if (!webcamwindow) {
      throw new Error('"webcamwindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      webcamwindow.minimize();
    } else {
      webcamwindow.show();
    }
  });

  webcamwindow.on('closed', () => {
    mainwindow = null;
  });

  // Open urls in the user's browser
  webcamwindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  const menuBuilder2 = new MenuBuilder(webcamwindow);

  menuBuilder2.buildMenu();
});
