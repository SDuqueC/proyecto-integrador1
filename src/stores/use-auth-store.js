import { create } from 'zustand';
import { auth, db } from '../../firebase.config';
// import the GoogleAuthProvider from the auth module
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  loginGoogleWithPopUp: async () => {
    await signInWithPopup(auth, provider).catch((error) => {
      console.log(error);
    });
  },

  logout: async () => {
    await signOut(auth)
      .then(() => {
        set(() => ({ user: null }));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  observeAuthState: () => {
    set({ loading: true });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
  },
}));

export default useAuthStore;
