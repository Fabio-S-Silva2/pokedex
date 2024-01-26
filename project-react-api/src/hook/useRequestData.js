import axios from "axios"
import { useEffect, useState } from "react"
import { handleGEt } from "../constants/HANDLEGET"

export const useResquestData=(url,initialState)=>{
    const [data, setData]=useState(initialState)
    const [isLoading, setIsLoanding]=useState(false)
    const [isError, setIsError]=useState(false) 

    useEffect(()=>{
        const n= handleGEt('?limit=21')
        console.log(n);
    }),[url]

    return [data, isLoading, isError];
}

   
 
