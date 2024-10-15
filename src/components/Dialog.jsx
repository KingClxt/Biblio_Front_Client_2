/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Loader } from "lucide-react";
import { Button } from "./Button"
import { useAddd } from "./AddContext";
import { Title } from "./Title"
import {createPortal} from "react-dom"
import { useEffect } from "react";

export const Dialog = ({bigTitle, title='', author=''}) => {
    const context= useAddd()
    
    // Si la modale n'est pas open on ne l'affiche pas
    if(!context.open) return null
    
    return (
        createPortal(
            <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
            <form onSubmit={context.handleSubmit} className="px-24 relative pb-12 rounded w-1/2 bg-white flex flex-col gap-2">
            <Title text={bigTitle.toUpperCase()} />
               <div>
                    <input type="text" name="title" placeholder="Veuillez saisir le titre du livre"  className="input input-bordered w-full " />
               </div>
               <div>
                    <input type="text" name="author" placeholder="Veuillez saisir le nom de l'auteur"  className="input input-bordered w-full " />
               </div>
               <Button myclasse="btn-primary">
                    {bigTitle} 
                    {
                        context.mutation.isPending && <Loader />
                    }
               </Button>
               <button className="absolute -top-4 -right-4 px-5 btn btn-error text-white ">
               X
            </button>
            </form>
            
        </div>,
        document.body
        )
        
    )
}


