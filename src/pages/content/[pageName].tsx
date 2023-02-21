import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {ContentPage} from "../../components/ContentComponents/ContentPage";

export default function ContentPageContainer() {
  const [sections, setSection] = useState([])
  const [loadingDone, setLoadingStatus] = useState(false)
  const router = useRouter()


  useEffect(()=>{
    console.log("use effect", router.query.pageName)
    if (!loadingDone ) {
      fetch(`/api/content/${router.query.pageName}`, {method: "GET"})
        .then(response => response.json())
        .then(content => {
          // Print emails
          console.log("content",content)
          setSection(content.pageSections)
          setLoadingStatus(true)
        }).catch(reason => {
          console.log(reason)
      })
    }
  }, [loadingDone, router])

  if(loadingDone){
    return <ContentPage contentSections={sections}/>
  }else{
    return <div>Loading</div>
  }


}
