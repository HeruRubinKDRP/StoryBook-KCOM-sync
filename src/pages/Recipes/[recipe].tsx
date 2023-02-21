import { useRouter } from 'next/router'
import React, {ReactElement, useCallback, useEffect, useState, useRef, useLayoutEffect} from "react";

export function RecipePage(){
  const router = useRouter()
  const { recipe } = router.query
  return(
    <div>{recipe}</div>
  )
}

export default RecipePage;

