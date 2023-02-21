import React, {ReactElement, useCallback, useEffect, useState, useRef} from "react";
import {iContentItem} from "../../components/ContentComponents/ContentComponent";
import {ContentPage} from "../../components/ContentComponents/ContentPage";
import {contentTestWF} from "../../data/product-data";
import SMART_Family＿Content from "../SMART-Family/index_old";


export default function SMARTfam() {


  const [sections, setSection] = useState([])
  const [loadingDone, setLoadingStatus] = useState(false)

  useEffect(()=>{
    if (!loadingDone) {
      fetch(`/api/content/SMART`, {method: "GET"})
        .then(response => response.json())
        .then(content => {
          // Print emails
          console.log(content)
          setSection(content.pageSections)
          setLoadingStatus(true)
        })
    }
  }, [loadingDone])

 if(loadingDone){
   return <ContentPage contentSections={sections}/>
 }else{
   return <div>Loading</div>
 }


}
