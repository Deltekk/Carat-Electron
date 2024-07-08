import './output.css'
import './showtime'

const wifi = document.getElementById('wifi');

const updateWifi = () => {
  let online = navigator.onLine ? true : false;
  wifi?.classList.add( online ? "fa-wifi" : "fa-paperclip");
  wifi?.classList.remove( online ? "fa-paperclip" : "fa-wifi");
}

window.addEventListener('online', updateWifi)
window.addEventListener('offline', updateWifi)
updateWifi()

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})