if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/chords/sw.js', { scope: '/chords/' })})}