import { ref } from "vue"
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "@firebase/auth"

const error = ref()
const isPending = ref(false)

const signup =async (email:string, password: string) => {
  error.value = null
  isPending.value = true

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }

    error.value = null
    isPending.value = false
  } catch (err) {
    if (err instanceof Error) {      
      error.value = err.message
      isPending.value = false
    }
  }
}

export const useSignup = () => {
  return { error, isPending, signup }
}