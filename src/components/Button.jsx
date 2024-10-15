/* eslint-disable react/prop-types */
import clsx from "clsx"

export const Button = ({children, myclasse, center})=>{
     return (
          <button className={clsx('btn', myclasse, 
                                        center?'mx-auto':'', 'block', 
                                        'my-5', 'px-10', 
                                        'font-bold',
                                        'flex',
                                        'items-center'
                                        )}>
               {children}
          </button>
     )
}