import axios from "axios"
import { Book } from "./Card"
import { useQuery } from "@tanstack/react-query"
import { Loader } from "./Loader"


export const ListCard = ()=>{
     // axios.get('http://localhost:3000/books').then(res=>console.log(res.data))
     
     const getBooks = ()=>
          axios.get('http://localhost:3000/books').then(res=>res.data)
               
          const {data, isLoading, isError} = useQuery({
               queryKey:['books'],
               queryFn:getBooks
          })
          if(isError){
               return <p>Erreur lors du chargement des données...</p>
          }
          
     return (
          <>
               {
                    isLoading?<Loader />:
                              <ul className="grid grid-cols-3 justify-items-center gap-7">
                                   {
                                        data.books.map(book=><Book title={book.title} id={book.id} auteur={book.auteur} key={book.id} />)
                                   }
                              </ul>
               }
          </>
     )
}