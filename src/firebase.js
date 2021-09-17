
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyAhj8lp6rmtBAPaEc5lhMLsagd-S1h3Tb8",
  authDomain: "dummy-store-app.firebaseapp.com",
  projectId: "dummy-store-app",
  storageBucket: "dummy-store-app.appspot.com",
  messagingSenderId: "825829389132",
  appId: "1:825829389132:web:473a4ea24a594f376215e9",
  measurementId: "G-L4V1RCCPGJ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const productsCollection = db.collection('products')

export const addItem = item => {
    return productsCollection.add(item)
}

export const getItem = async id => {
    const item = await productsCollection.doc(id).get()
    return item.exists ? item.data() : null
}

export const updateItem = (id, item) => {
    return productsCollection.doc(id).update(item)
}

export const deleteItem = id => {
    return productsCollection.doc(id).delete()
}

export const useLoadItems = () => {
    const items = ref([])
    const close = productsCollection.onSnapshot(snapshot => {
        items.value = snapshot.docs.map(doc => ({idnum: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return items
}