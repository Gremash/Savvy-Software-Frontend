import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from 'reactfire';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

function App() {
  const app = useFirebaseApp();

  const firestoreInstance = getFirestore(app);
  const storageInstance = getStorage(app);
  const authInstance = getAuth(app);

  if (process.env.NODE_ENV === 'development') {
    // Set up emulators
    connectFirestoreEmulator(firestoreInstance, 'localhost', 9000);
    connectAuthEmulator(authInstance, 'http://localhost:9099');
    connectStorageEmulator(storageInstance, 'localhost', 9199);
  }

  return (
    <AuthProvider sdk={authInstance}>
      <FirestoreProvider sdk={firestoreInstance}>
        <StorageProvider sdk={storageInstance}>
          <div>Hello World!</div>
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
