const Hello: React.FC = () => {
  return (
    <div>
      <div className="Hello bg-red-500">Hello</div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button">Read our docs</button>
        {/* Start fetch button api */}
        <button
          type="button"
          onClick={() => {
            console.log('ds');
          }}
        >
          fetch data
        </button>
      </div>
    </div>
  );
};

export default Hello;
