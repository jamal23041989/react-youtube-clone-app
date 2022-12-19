import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDX5e0qdQDeCNOk3chPmCi_aw2YOrHTJCo',
  authDomain: 'video-3ec40.firebaseapp.com',
  projectId: 'video-3ec40',
  storageBucket: 'video-3ec40.appspot.com',
  messagingSenderId: '803810956250',
  appId: '1:803810956250:web:eb850da90b39ce1113e6e3',
  measurementId: 'G-XSJ74NQ7S8',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app
