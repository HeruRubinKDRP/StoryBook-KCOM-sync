import React, {useEffect} from "react";


export const useOutsideToggler = (ref : HTMLDivElement | null, setThisToFalse:Function )=>{
  // set a state to false inside a component
  // this can be used to close a pop up etc

  useEffect(()=>{
    const handleClickOutside =(event : Event) =>{

      const bla : Event = event as Event;

        if( ref && !ref.contains(bla.target as Node)){
          console.log("clicked outside")
          setThisToFalse();
        }

    }

    //set up event listener

    document.addEventListener("mousedown", handleClickOutside);

    return () =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, [ref, setThisToFalse])
}
