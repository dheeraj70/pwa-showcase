import React from 'react'

export default function InstallBtn({setDeferredPrompt, deferredPrompt}) {
    
    const handleInstallClick = () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
            setDeferredPrompt(null);
          });
        }
      };
    
  
    return (
    <button onClick={handleInstallClick} className='btn'>Install App</button>
  )
}
