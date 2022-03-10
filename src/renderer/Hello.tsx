import { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    window.electron.ipcRenderer.testMessage((event, value) => {
      console.log(value);
    });

    window.electron.ipcRenderer.connectionStatus((event, value) => {
      console.log(`abcc ${event}, ${value}`);
    });
  });
  return (
    <div>
      <div className="Hello">Hello</div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button">Read our docs</button>
        <button
          type="button"
          onClick={async () => {
            window.electron.ipcRenderer.connect();
          }}
        >
          dsada
        </button>
        <button
          type="button"
          onClick={() => {
            window.electron.ipcRenderer.getInfo('test');
          }}
        >
          print keys
        </button>
      </div>
    </div>
  );
};

export default Hello;
