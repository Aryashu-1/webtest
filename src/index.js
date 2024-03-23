import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './Components/Stores/UserStore';
import TransportStore from './Components/Stores/TransportStore';
import LoginStore from './Components/Stores/LoginStore';
import BillStore from './Components/Stores/BillStore';
import PlaceStore from './Components/Stores/PlaceStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransportStore>
    <UserStore>
      <LoginStore>
        <BillStore>
          <PlaceStore>
          <App />
          </PlaceStore>
    <App />
    </BillStore>
    </LoginStore>
    </UserStore>
    </TransportStore>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
