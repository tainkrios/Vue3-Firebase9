import { ref } from "vue"
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "@firebase/auth"

const error = ref()
const isPending = ref(false)

const login =async (email:string, password: string) => {
  error.value = null
  isPending.value = true

  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not login')
    }

    error.value = null
    isPending.value = false
  } catch (err) {
    if (err instanceof Error) {      
      console.log(err.message)
      error.value = err.message
      isPending.value = false
    }
  }
}

export const useLogin = () => {
  return { error, isPending, login }
}