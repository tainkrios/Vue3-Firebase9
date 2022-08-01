<template>
  <div class="home">
    <ul>
      <li v-for="document in documents" :key="document.id">
        <div class="details">
          <h3 @click="handleDelete(document)">{{ document.title }}</h3>
          <p>By {{ document.author }}</p>
        </div>
        <div class="icon">
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
import { doc, deleteDoc } from "firebase/firestore"

const { documents } = getCollection('books')

const handleDelete = (document: { id: string }) => {
  const docRef = doc(db, 'books', document.id)

  deleteDoc(docRef)
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
</style>