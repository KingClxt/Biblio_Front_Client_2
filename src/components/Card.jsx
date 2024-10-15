/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Loader } from "./Loader"
import { Dialog } from "./Dialog"

export const Book = ({id, title, auteur})=>{
     const queryClient = useQueryClient()
     const mutation = useMutation({
          mutationFn:(idBook)=>
               axios.delete(`http://localhost:3000/books/${idBook}`)
                       .then(res=>res.data),
          onSuccess:(data)=>{
               queryClient.invalidateQueries(['books'])
          }
     })
     const handleDelete = ()=>{
          mutation.mutate(id)
     }
     return (
          <div className="card relative bg-base-100 bg-gradient-to-br from-slate-500 to-black image-full w-full shadow-xl">
               <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <p>Auteur: <span className="font-bold">{auteur.toUpperCase()}</span></p>
               <div className="card-actions justify-end">
                    <button className="btn ">Modifier</button>
                    {/* <Dialog bigTitle="Modifier un livre" /> */}
                    <button className="btn btn-neutral">Voir en detail</button>
               </div>
               </div>
               <button disabled={mutation.isPending} onClick={handleDelete} className="btn disabled:text-white disabled:bg-error -top-5 -right-5 btn-circle btn-error absolute z-10 font-bold text-white">
                    {
                         mutation.isPending || mutation.isSuccess  ?<Loader />:"X"
                    }
               </button>
          </div>
     )
}