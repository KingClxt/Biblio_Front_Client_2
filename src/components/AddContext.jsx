/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react"

import { Plus } from "lucide-react"
import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Dialog } from "./Dialog"



export const AddContext = createContext(null)
export const useAddd = ()=>{
     const context = useContext(AddContext)
     if(!context) throw new Error("Veuillez faire appel a cette fonction dans le context AddContext")
     return context
}

export const AddButton = ()=>{
     const queryClient = useQueryClient()
     const mutation = useMutation({
           mutationFn:(data) => axios.post('http://localhost:3000/books', data).then(res=>res.data),
           onSuccess:(data)=>{
               queryClient.invalidateQueries(["books"]),
               setOpen(false)
           }
     })
     const [open, setOpen] = useState(false)
     const close = ()=>{
          setOpen(false)
     }
     const handleOpen = ()=>{
          setOpen(true)
     }
     // Ajoute dans la base de donnée
     const handleSubmit = (e)=>{
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const dataPost = {
               title:formData.get('title'),
               auteur:formData.get('author')
          }
          mutation.mutate(dataPost)
     }

     return (
          // <p></p>
          <AddContext.Provider value={{
               open,
               close,
               handleSubmit,
               mutation

          }}>
               <button onClick={handleOpen}  className="btn btn-primary font-bold flex items-center">Ajouter un livre <Plus /></button>
               <Dialog bigTitle="Ajouter un livre" />
          </AddContext.Provider>
     )
}