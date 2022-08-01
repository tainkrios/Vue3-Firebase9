import { ref, watchEffect } from "vue";

import { db } from '../firebase/config'
import { collection, onSnapshot } from "firebase/firestore";

export const getCollection = (c: string) => {
  const documents = ref()

  //collection reference
  const colRef = collection(db, c)

  const unsub = onSnapshot(colRef, snapshot => {
    const results: { id: string; }[] = []
    snapshot.docs.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
    })
    documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { documents }
}