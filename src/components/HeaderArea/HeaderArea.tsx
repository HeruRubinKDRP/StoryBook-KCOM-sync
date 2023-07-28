import React from "react";

export interface iHeaderArea{
  headerLabel : string;
  headerStyle : "line-through" | "large-light" | "bold-small" | "medium-light";
  hierarchyLevel : 1 | 2 | 3 | 4;
  colorScheme : "medium-roast" | "dark-roast";
  headerAlignment : "left" | "right" | "center";
}

export const HeaderArea =(props:iHeaderArea)=>{
  const getHeader=()=>{
    const headerContents =()=>{
      return (
        <>
          <div className="before"/>
          <span className="title-label">{props.headerLabel} </span>
          <div className="after"/>
        </>
      )
    }

    let commonStyles = `${props.headerStyle} header`;

    switch (props.hierarchyLevel) {
      case 1:
        return <h1 className={commonStyles}>
          {headerContents()}
        </h1>;
      case 2:
        return <h2 className={commonStyles}>
          {headerContents()}
        </h2>
      case 3:
        return <h3 className={commonStyles}>
          {headerContents()}
        </h3>
      case 4:
        return <h4 className={commonStyles}>
          {headerContents()}
        </h4>
    }
  }

  return (
    <div className={`header-area ${props.colorScheme} align-${props.headerAlignment}`}>
      {getHeader()}
    </div>
  )
}
