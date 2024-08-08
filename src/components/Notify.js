import React from 'react'

export default function Notify({setDeferredPrompt, deferredPrompt}) {
    const handleNotificationClick = () => {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('Hello! Whats up!');
          }
        });
      };
  
    return (
    <button onClick={handleNotificationClick} className='btn'> Notify me </button>
  )
}
