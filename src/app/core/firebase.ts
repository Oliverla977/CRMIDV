import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';
import { environment } from '../../environments/environment';

// Instancia única de Firebase para toda la app.
// Importa `firebaseApp` donde necesites otros SDKs (getAuth, getFirestore, etc.).
export const firebaseApp = initializeApp(environment.firebase);

export let analytics: Analytics | null = null;

// Analytics solo funciona en navegadores compatibles (no en tests/SSR).
export async function initFirebaseAnalytics(): Promise<void> {
  if (await isSupported()) {
    analytics = getAnalytics(firebaseApp);
  }
}
