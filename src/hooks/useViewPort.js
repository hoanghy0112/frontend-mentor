import { useState, useEffect } from "react";

export default function useViewPort() {
   const [width, setWidth] = useState(window.innerWidth)

   useEffect(() => {
      window.addEventListener('resize', () => {
         setWidth(window.innerWidth)
      })

      return () => {
         window.removeEventListener('resize')
      }
   }, [])

   return width
}