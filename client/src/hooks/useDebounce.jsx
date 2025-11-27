import { useState,useRef, useEffect } from "react";
const useDebounce = (value,delay) => {
    const [debounced,setDebounced] = useState(value)
    const timer = useRef(null);

    useEffect(()=>{
        
        timer.current =setTimeout(()=>
            setDebounced(value)
        ,delay)
        return ()=>clearTimeout(timer.current)
    },[value,delay])



  return debounced
}

export default useDebounce
