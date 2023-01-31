import { useEffect, useState } from "react"

export const useWishLocalStorage=(key, initialValue)=> {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if(jsonValue && jsonValue !== "[]" && jsonValue !== "{}")
    return JSON.parse(jsonValue)
    
    
    // if (typeof initialValue === "function") {
    //   return (initialValue ())()
    // } 
    else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return  [value, setValue]
}