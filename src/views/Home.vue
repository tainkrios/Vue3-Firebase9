<template>
  <div class="home">
    <ul>
      <li v-for="document in documents" :key="document.id">
        <div class="details">
          <h3 @click="handleDelete(document)">{{ document.title }}</h3>
          <p>By {{ document.author }}</p>
        </div>
        <div :class="{ icon: true, fav: document.isFav }" @click="handleUpdate(document)">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
    <CreateBookForm />
  </div>
</template>

<script setup lang="ts">
import { getCollection } from '@/composables/getCollection';
import CreateBookForm from '../components/CreateBookForm.vue'
import { db } from "../firebase/config"
import { doc, deleteDoc, updateDoc } from "firebase/firestore"
// import { getUser } from '@/composables/getUser'

// const { user } = getUser()

const { documents } = getCollection(
  'books',
  // ['userUid', '===', user.value?.uid]
)

const handleDelete = (document: { id: string }) => {
  const docRef = doc(db, 'books', document.id)

  deleteDoc(docRef)
}

const handleUpdate = (document: { id: string; isFav: any; }) => {
  const docRef = doc(db, 'books', document.id)

  updateDoc(docRef, {
    isFav: !document.isFav
  })
}
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
.icon.fav {
  color: #f83f5e;
}
</style>