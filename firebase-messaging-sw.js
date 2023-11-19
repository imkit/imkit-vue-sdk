importScripts(
  'https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js'
)

firebase.initializeApp({
  apiKey: 'AIzaSyDH6fgpRFaH7vIqAcGQi48wgvNf8BJ9q1I',
  authDomain: 'fir-chat-server.firebaseapp.com',
  databaseURL: 'https://fir-chat-server.firebaseio.com',
  projectId: 'fir-chat-server',
  storageBucket: 'fir-chat-server.appspot.com',
  messagingSenderId: '970263218499',
  appId: '1:970263218499:web:cf2db5b6ba042a9a4247f6'
})
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) return client.focus()
        }
        try {
          const { room } = JSON.parse(
            event.notification.data.FCM_MSG.data.payload
          )
          return clients.openWindow(`/?roomId=${room}`)
        } catch (e) {
          return clients.openWindow('/')
        }
      })
  )
})
const isSupported = firebase.messaging.isSupported()
if (isSupported) {
  const messaging = firebase.messaging()
  messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
    console.log('Background message received. ', title, body, image)
  })
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope)
    })
    .catch(function (err) {
      console.log('Service worker registration failed, error:', err)
    })
}
