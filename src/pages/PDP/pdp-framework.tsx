import { useRouter } from 'next/router'
import React, {useState} from "react";

import {PanelHeader} from "../../components/PanelHeader/PanelHeader";
import {KCS_PDP, KSS_PDP} from "./PDP_versions";
import {carousel_images_KCS, KCS_specs_data} from "./pdp-data";

export function PDPdemo() {
  const [isVersionsOpen, setVersionOpen]=useState<boolean>(true);
  const router = useRouter();
  console.log("router query ", router.query)
  const version : string | string[] = router.query.version ? router.query.version : "1.0"


  const getPage=()=>{

    switch(router.query.pid){
      case "KCS":
        return KCS_PDP(version);
      case "KSS":
        return KSS_PDP(version);

      default:
        return KCS_PDP(version);
    }
  }

  const toggleVersionMenu=()=>{
    setVersionOpen(!isVersionsOpen)
  }


  const getVersion=()=>{
    if(!isVersionsOpen){return}
    return(
      <div className="version-menu">
        <div className="versions" >
          <PanelHeader hasCloseButton={true} hasBackButton={false} closeFunc={()=>toggleVersionMenu()}/>
          <h2>New PDP Versions</h2>
          <div className="version-item">
            <a href="pdp-framework?pid=KCS&version=1.0">KCS Version 1.1 13-AUG-2022</a>
            <ul>
              <li>
                <p>Initialized content & versioning system </p>
              </li>
            </ul>
          </div>
          <div className="version-item">
            <a href="pdp-framework?pid=KSS&version=1.0">KSS Version 1.1 13-AUG-2022</a>
            <ul>
              <li>
                <p>Initialized content & versioning system </p>
              </li>
            </ul>
          </div>
          <div className="version-item">
            <a href="pdp-framework?pid=KSPS&version=1.0">KSPS Version 1.1 13-AUG-2022</a>
            <ul>
              <li>
                <p>Initialized content & versioning system </p>
              </li>
            </ul>
          </div>


        </div>
      </div>
    )
  }



  return (
    <>
      {getVersion()}
      {getPage()}
    </>

  )
}

export default PDPdemo;


