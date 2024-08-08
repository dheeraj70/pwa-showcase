import React, { useEffect, useState } from 'react';
import './App.css'
import InstallBtn from './components/InstallBtn';
import Notify from './components/Notify';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

 


  return (
    /*<div className="App">
      <button onClick={handleInstallClick}>Install </button>
      <button onClick={handleNotificationClick}>Show Notification</button>
    </div>*/
    <>
    <main>

      <div className="container">
        <div className="nav">PWA Show Case <span className='credit'>by Dheeraj</span></div>
          <div className="buttnGroup">
            <div className="buttns">
              <InstallBtn setDeferredPrompt={setDeferredPrompt} deferredPrompt={deferredPrompt}/>
              <Notify setDeferredPrompt={setDeferredPrompt} deferredPrompt={deferredPrompt} />
            </div>
          </div>
      </div>
  
    </main>
    
    </>
  );
}

export default App;
