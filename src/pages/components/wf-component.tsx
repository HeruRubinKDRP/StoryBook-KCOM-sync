import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {containerStyleT, styleParams, WFlayout} from "../../components/WF_layout_component/wfLayout";
import {contentTestWF} from "../../data/product-data";

export default function WFdemo(){
  const [containerStyle, setContainerStyle] = useState("rounded");
  const router = useRouter();
  useEffect(()=>{
    console.log("query", router.query);

    if(!router.query.style){
      return;
    }
    const routeData : styleParams = router.query as styleParams
    setContainerStyle(routeData.style);

  },[router, containerStyle])
  return(
    <div className="demo">
      <WFlayout elementsMode={containerStyle as containerStyleT} contentItems={contentTestWF}/>
    </div>
  )

}
