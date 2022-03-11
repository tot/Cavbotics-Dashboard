import { useEffect, useState } from 'react';

const Hello = () => {
  const [data, updateData] = useState<any>();
  return (
    <div>
      <div className="Hello">Hello</div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button">Read our docs</button>
        {/* Start fetch button api */}
        <button
          type="button"
          onClick={async () => {
            const res = await fetch('https://randomuser.me/api/');
            console.log(res);
            const json = await res.json();
            console.log(json);
            updateData(json.results[0]);
          }}
        >
          fetch data
        </button>
        {data && data.email}
      </div>
    </div>
  );
};

export default Hello;
