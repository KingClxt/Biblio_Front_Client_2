/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import clsx from 'clsx'

export const Title = ({text, myclasse})=>{
     return <h1 className={clsx('font-bold', 'text-center', 'text-5xl', 'my-10', 'text-gray-800')}>
          {text}
     </h1>
}