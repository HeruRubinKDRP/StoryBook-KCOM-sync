import React from "react";

export interface iIllustration{
  illustrationName : "brewer-outlines" | "brewer-hole"
}

export const Illustration=(props : iIllustration)=>{
  switch(props.illustrationName){
    case "brewer-outlines":
      return(
        <div  className="illustration brewers">
          <svg viewBox="0 0 1121 585.09" width="100%" height="100%">
            <rect className="bg-select-indicator" x="208.33" y="152.43" width="714.67" height="353.33"/>
            <path className="filled" d="M0,0V585.09H1121V0H0ZM440.39,345c-2.8,5.12-10.87,7.9-20.63,9.92v32.17c6.51,.38,12.67,2.21,18.52,5.32,17.28-1.76,19.22,12.18,11.53,24.77l-12.58,16.54-3.67,9.7c3.19,1.38,5.56,3.13,6.83,5.39l.03,19.89c-14.45,10.77-36.46,9.47-61.55,4.91l-54.11-23.51-43.6,5.1c-3.72,1.19-7.38,1.21-10.94-1l-21.97-9,.89-19.33-1.24-156.89,1.1-9.67,45.06-6c5.36-.97,11.07,.08,16.98,2.22l46.15-5.87,9.83,.9,33.38,11.38,3.48,2.86,4.82,1.81,2-.42,25.78,9.67c1.98,1.06,2.97,2.66,3.68,4.42l.23,19.14v45.58Zm141.13-128.77l-2.7,32.75-5.98,131.73-5.6,5.88-6.82,1.61c-10.66,9.69-27.31,12.57-46.44,12.64-17.52,.21-32.25-3.48-44.41-10.78l-2.97-2.74-3.86-.43-7.42-7.26-4.75-74.27-3.08-68.14-.81-20.86-.28-7.05s-2.17-6.62,5.44-11.34c5.64-3.5,12.56-5.04,12.56-5.04l23.61-3.3s11.89-3.14,25.47-3.14c8.43,.24,23.6,2.33,23.6,2.33,0,0,18.53,1.11,28.36,4.68s13.79,8.7,13.79,8.7c2.21,3.25,2.38,8.5,2.29,14Zm125.19,223.09l-2.02,4.62-43.29,21.87-14.96,6.31-26.02,1.19c-12.09,.84-23.93-.14-31.64-5.79l-.61-15.54,1.32-4.17,5.41-3.51-4.21-11.53,1.16-39.55c2.24-2.01,7.66-4,14.03-5.98v-32.13l-17.71-6.89,.18-48.86-1.08-2.8v-15.87l2.3-3.73,20.89-8.58,16.77,1.6,21.67-9.22,8.61-1.36,44.17,5.58c2.97,.34,4.65,1.2,4.96,2.62l.53,9.58-1.51,75.3,2.3,70.03-1.25,16.81Zm181.84-185.19l-4.06,77.43-5.85,103.11,.18,4.66c-4.81,6.8-14.06,14.65-19.33,16.69l-6.04,.25c-13.39,10.51-38.55,10.22-65.12,8.62-16.6-.71-32.35-3.39-47.05-8.48l-2.86-11.35-1.85-5-1.9-19.4-6.97-145.55c-.3-11.09,5.28-19.67,14.09-26.86,7.8-5.3,16.51-8.41,25.96-9.73l30.25-1.92,28.14-.54,25.52,3.23c13.59,2.12,25.25,4.45,33.88,8.56,2.25,.87,3.21,3.29,3.02,6.27Z"/>
            <g className="line-art">
              <polygon points="371.14 274.89 365.52 269.96 396.79 265.91 402.23 270.4 371.14 274.89"/>
              <path d="M323.84,358.7s-.09-20.76-.09-20.76c-.06-.08-.08-41.66-.19-41.68-1.3-6.81-6.09-12.58-13.1-13.86,0,0-13.69,1.45-13.69,1.45-2.27,2.92-2.25,5.81,.99,7.91l.17,.11c1.98,.28,3.97,1.29,5.81,2.21,0,0,1.48,2.32,1.9,4.84,0,0,.46,61.44,.52,69.24-4.05-1.36-9.09,.85-10.33,5.1l.2,4.31s5.17,2.63,7.45,3.07c1.39-.46,2.6-1.12,3.75-1.92,1.04-.72,1.91-1.62,2.67-2.61,2.16,1.48,4.62,2.48,7.27,2.81,0,0,.43,0,.43,0,.9-.59,1.75-1.28,2.5-2.05,4.69-4.76,3.69-12.11,3.75-18.15Zm-2.08-20.74c0,3.66-.11,22.75-.11,25.96,.22,4.62-.45,9.91-4.84,12.35-2.05,.09-4.23-.31-6.25-1.14,1.25-1.98,2.03-4.27,2.37-6.59,0,0-.15-16.67-.15-16.67-.16-4.88,.25-11.9-.59-16.67-.54,2.77-.6,5.55-.66,8.33-.1,4.15-.32,12.52-.41,16.67l-.08,8.34c-.51,2.74-2.15,6.74-4.95,8.54-.92,.64-2.74,1.51-2.74,1.51-2.02-.55-6.33-1.97-6.33-1.97,0,0,.57-2.41,.57-2.41,.63-.72,1.22-1.39,1.86-1.97,1.82-1.79,4.12-2.41,6.6-2.7-.39,1.83-1.67,4.04-3.67,4.97-.01,0-2.53-.57-2.53-.57l-1.25,.23,.79,.92s1.94,.88,3.21,.85c2.61-1.31,4.57-3.95,4.99-6.85,.03-.11,.55-70.05,.53-70.17-.62-3.82-3.05-7.08-3.05-7.08,0,0-3.92-1.91-6.31-2.37-.64-.35-1.46-.98-1.61-1.61-.29-1.18,.43-2.4,.66-2.82,0,0,12.79-1.15,12.79-1.15,5.72,1.58,10.03,5.84,11.33,12.72,0-.83-.25,41.49-.19,41.36Z"/>
              <path d="M423.96,412.3c-4.85,2.1-9.18,6-9.01,11.53-.24,5.84,4.11,9.48,9.7,9.58-5.21,1.59-10.96-1.79-11.63-7.34-1.46-7.17,4-13.16,10.95-13.77h0Z"/>
              <path d="M379.46,394.42c4.28,1.98,8.91,3.4,13.59,3.99,11.77,1.63,24,1.21,35.53-1.75,2.29-.66,4.51-1.41,6.82-2.24-1.83,1.66-4.13,2.69-6.44,3.46-11.63,3.64-24.16,3.87-36.17,2.2-2.41-.39-4.81-.93-7.14-1.73-2.3-.8-4.84-1.75-6.19-3.93h0Z"/>
              <path d="M382.8,396.11c8.56-5.95,39.21-6.75,49.88-.27"/>
              <path d="M438.33,391.76c-.28-.34-.56-.68-.56-.68-4.54-2.94-9.96-3.91-15.2-4.72-.65-.1-1.44-.19-2.31-.28v-31.79c.37-.04,.73-.08,1.1-.13,5.31-.75,10.8-1.64,15.6-4.25,1.64-.93,3.25-2.2,4.22-4.03,0,0,.02-.26,.02-.26,.64-7.17,.76-14.35,.76-21.53,.05-7.18,0-14.36-.27-21.54,0,0-.02-.53-.02-.53l-.14-.1s-.32-.22-.61-.43c.07-.05,.14-.1,.21-.15,0,0,.38-.31,.38-.31,0,0,0-.54,0-.54,0,0-.07-9.86-.07-9.86-.02-3.29-.06-6.57-.15-9.86,0,0,0,.1,0,.1,.05-.78-.09-1.59-.39-2.3-.84-2-2.74-3.28-4.49-4.25-.06-.03-25.65-8.92-25.65-8.92-.78,.15-2.13,.45-2.09,.64-1.51-.64-4.02-1.76-4.5-1.96,0,0-3.27-2.94-3.27-2.94-.44-.14-33.2-11.8-33.66-11.92-8.44-1.64-20.1,.81-28.59,1.76l-27.53,3.54c-2.22-.97-4.35-1.88-6.26-2.65-3.71-.96-7.58-.91-11.33-.42-8.83,1.02-23.38,2.73-32.23,3.77,0,0-7.16,.84-7.16,.84-2.61,.25-6.04,.55-7.25,3.37l-.13,.31v.23s-.05,7.77-.05,7.77c0,0,0,.36,0,.36,.12,.16,.52,.81,.75,1.15-.66,1.46-.51,2.91-.61,4.37-.06,1.64-.1,3.27-.11,4.91,0,40.3,.1,147.06,.1,147.06-.08,.34-.01,.9,.3,1.37,.08,.12,.17,.21,.25,.3-.05,.02-.08,.04-.09,.05-.07,3.68-.08,7.36-.1,11.05l-.03,5.26c-.05,.99,.72,2.15,1.63,2.53,1.53,.66,20.18,8.85,22.26,9.75,4.49,1.45,9.36,1.28,13.81,.44l13.32-1.91,26.52-3.81c2.25,.95,31.3,14.32,31.49,14.22,.09,.01,.21,0,.32-.04,1.56,.68,21.67,9.45,21.67,9.45,13.75,3.7,28.15,3.85,42.23,2.41,5.51-.79,21.21-3.68,21.07-8.61-.03-1.07-.14-20.09-.14-20.09-.94-1.44-2.15-2.75-3.64-3.65-.95-.58-1.98-1-3.03-1.27,1.66-2.58,2.95-5.39,3.73-8.35l.04-.14v-.15s0-.47,.01-1.23c3.13-3.23,6.05-6.64,8.74-10.27,3.59-5.06,7.41-10.49,8.05-16.88,.52-10.1-7.21-17.17-16.93-14.25Zm.44,11.23c2.02-3.24,4.74-4.43,4.91-4.48,3.79,7.65,0,16.07-5.08,22.3,.08-8.06,.12-12.09,.17-17.81Zm-187.65-143.76c6.28-.94,43.33-5.47,44.43-5.61,2.84-.24,5.78,.03,8.5,.75,5.67,2.31,16.09,5.94,22.6,8.26,.17,.09,.53,.34,.56,.36-.04,.03-.51,.22-.7,.27-1.37,.18-39.57,5.16-39.57,5.16-4.62,.55-9.94,1.77-14.48,.37-3.16-1.09-18.83-7.3-22.92-8.86,.42-.31,.94-.54,1.58-.71Zm-1.47,14.39c-.07-1.1-.01-2.19-.26-3.29,4.08,1.51,16.97,6.29,16.97,6.29,2.76,1.02,6.64,2.67,9.58,2.62,6.8,.43,39.49-5.03,47.81-5.96,.14,28.23,.06,118.92,.4,158.49-2.86,.41-41.71,5.91-41.71,5.91-2.6,.83-7.18,.22-8.96-.14l-12.54-6.24c-2.89-1.44-11.62-5.87-11.46-5.66,.17,.21,.35-147.11,.16-152.02Zm-.56-12.78c2.06,.85,18.24,7.56,18.24,7.56,3.07,1.33,6.39,2.78,9.81,2.77,6.34-.03,46.51-6.44,46.51-6.44,0,0,.08,2.78,.1,7.54-7.66,.69-41.4,5.59-47.67,5.04-2.84-.01-6.37-1.7-8.97-2.67l-18.02-7.02s0-5.49,0-6.77Zm48.91,192.19l-13.36,1.72c-4.19,.79-9.18,.73-12.83-.5-1.98-.88-20.75-9.39-22.2-10.03-.12-.06-.14-.06-.16-.06-.19,.04-.13-.19-.1-.32,0-.03,0-.09,0-.22l-.03-5.26c-.02-3.38-.03-6.75-.09-10.13,2.94,1.39,7.89,3.74,10.74,5.09l12.65,6s.12,.06,.12,.06c3.12,.69,7.07,.86,9.97,.08l41.44-6.71c.08,8.64,.18,14.69,.3,16.89l-26.47,3.4Zm58.24,10.66s-.01,.07-.02,.09l-30.95-14.01c-.07-8.4-.48-180.76-.77-184.55,.48-.04,1.46-.2,2.01-.28,3.16,1.17,6.27,2.42,9.59,3.06-2.55-1.48-5.28-2.51-8.02-3.53,.03-.02,.07-.04,.1-.06,1.35-.81,1.42-2.17-.02-2.97,0,0-12.85-5.04-13.87-5.5,5.41-.73,41.27-5.55,42.37-5.7,.42-.02,5.56-.37,7.37,.09s3.58,1,3.58,1c0,0,27.37,10.74,29.68,11.64-7.02,.74-54.53,6.88-54.53,6.88-.16,3.08,.08,6.18,.48,9.24,.36-2.77,.58-5.57,.5-8.37l13.96-1.95c-.07,1.05-.09,2.09,.22,3.13,.63-1.09,.71-3.29,.71-3.29l39.79-4.67,4.65,3.79,4.11,2.59-3.48-3.36-5.3-4.09,1.44-.22s3.63,2.52,3.65,2.53l5.74,2.43,.39-.92s.67-.17,1.03-.23c1.79,.72,25.62,10.04,24.8,9.73,1.66,1.02,3.7,2.48,3.55,4.51-.02,3.32,.23,19.23,.23,19.23-6.23,4.37-14.19,5.25-21.66,5.78-9.81,.6-19.91,.54-29.77,.32-5.91-.14-11.7-1.57-17.1-3.92,.19,.05-22.92-8.59-22.28-8.35-5.76-4.11-6.17-14.85-1.48-18.85,0,0,3.12-.6,3.12-.6-1.33-.25,32.05,11.34,31.66,11.3,9.36,.75,18.77,1.07,28.17,.84,8.15-.39,16.6-.4,24.34-3.29,1.06-.49,2.39-1.06,2.67-2.34-.99,.67-1.88,1.2-2.96,1.65-7.7,2.6-16.03,2.57-24.08,2.98-9.32,.26-18.64-.09-27.94-.77,.54,.14-31.91-11.35-31.91-11.35,0,0-3.36,.64-3.36,.64-4.74,3.79-4.74,10.99-2.41,16.13,.83,1.75,2.01,3.47,3.71,4.57,0,0,22.25,8.66,22.25,8.66,3.72,1.56,7.52,3.02,11.53,3.59,3.44,.69,8.47,.7,12.01,.84,12.94-.08,33.61,1.75,45.32-5.05-.13,3.54,.48,42.71,.48,42.71,0,0-2,2.33-3.39,3.13-1.47,.84-3.08,1.48-4.73,2.01-19.13,5.06-43.94,5-62.38-2.52,0,0-9.9-3.88-9.9-3.88l-.16-.06s-.17,.05-.17,.05c-2.04,.49-3.18,2.67-3.29,4.61,.24,33.01,.38,82.4,.69,114.95Zm62.54-109.24v31.49c-2.87-.23-6.5-.39-10.43-.39v-30.32c3.49-.13,6.97-.39,10.43-.77Zm-61.63,80.53s-.2-28.75-.2-28.75l-.4-57.5c.07-.52,.3-1.71,.73-2.28,.39-.63,.99-1.06,1.7-1.3,1.32,.53,9.71,3.89,9.71,3.89,11.95,4.94,24.93,6.57,37.83,6.26l.58,30.27c-11.68,.09-25.37,1.55-28.75,6.21-.16,.39-.45,1.17-.62,1.56-.1,6.64-.16,13.28-.19,19.92,.03,.08-.18,19.87-.13,19.92,.93,3.58,2.4,7.1,4.43,10.24-3.97,.46-24.45,2.84-24.61,2.86-.03-3.76-.06-7.52-.08-11.29Zm82.5,13.63s-.39,18.45-.43,19.03c-.48,1.68-7.32,4.81-8.98,5.25-10.08,2.53-20.52,2.73-30.9,2.51-6.94-.24-13.93-.89-20.61-2.67,.37,.16-18.38-7.49-21.47-8.73,.02-.07,.04-.14,.06-.21,0-5.64-.03-11.27-.08-16.91,.17,.45,.53,1.42,.53,1.42,0,0,16.2,6.96,21.59,9.17,15.27,2.33,31.03,3.53,46.28,.34,3.92-1,12.11-3.07,13.66-7.14-5.73,3.04-11.55,5.42-14.02,5.97-15.01,3-30.62,1.46-45.69-.67-4.3-1.8-15.9-6.38-21.04-8.44l-.15-.4,24.07-2.8c1.87,2.67,4.17,5.03,6.91,6.85,2.07,1.4,4.33,2.54,6.69,3.33,9.9,1.51,20.11,.73,29.67-2.25,3.18-2.2,6.02-5,8.27-8.22,2.34,.88,4.35,2.4,5.64,4.56Zm-3.65-14.25c-2.66,8.81-10.82,16.09-10.82,16.09-9,3.21-19.89,3.99-28.74,2.59-9.01-3.03-15.18-11.09-17.41-20.15,.09-.25-.2-19.87-.11-19.64-.08-6.31-.01-14.04-.23-19.63,.12-.29,.45-1.08,.57-1.36,4.27-4.97,21.19-5,27.76-5.08,.03,0,.07,0,.1,0l.22,11.27c.35,.16,.69,.16,1.01,0v-11.24c3.49,.05,6.97,.23,10.43,.62v.25l.31-.21c1.07,.13,2.14,.26,3.2,.43,4.83,.83,9.9,1.87,14.04,4.55,0,0,.28,1.47,.3,2.22,0,0-.62,39.28-.62,39.28Zm16.99-28.45c-.54,5.86-4.18,10.91-7.33,15.88-2.25,3.28-4.66,6.48-7.17,9.59,.02-2.44,.06-5.93,.09-8.8,6.69-5.56,12.81-16.83,6.46-24.32,.41-.02,.83-.01,1.24,.09,2.24,.44,3.65,2.54,4.14,4.72,.39,1.18,.23,2.38,.69,3.58,.68-2.43,.16-5.22-1.15-7.4-2.99-4.3-8.41-3.02-11.15,.5,0-.97,.05-4.64,.05-4.64,.01-.74,.02-1.48,.05-2.22,.79-.1,1.57-.21,2.32-.32,7.6-.33,12.25,6.17,11.77,13.35Z"/>
              <path d="M394.65,275.68c-2.79,.26-15.97,2.42-7.7,5.6,4.95,1.92,10.38,2.22,15.66,2.43,5.27-.02,11.39,.09,16.43-1.6,2.95-1.04,7.72-2.86,1.99-4.98-8.43-2.87-17.63-2.05-26.38-1.45h0Zm-.07-.84c8.88-.61,18.18-1.42,26.75,1.52,4.34,1.62,4.04,3.98-.61,5.91-5.92,2.46-11.88,2.28-18.13,2.26-5.37-.21-10.88-.52-15.96-2.48-9.51-4.12,4.09-6.97,7.95-7.21h0Z"/>
              <path d="M544.5,336.77c.73,4.04,.6,8.37,.44,12.29-.23,5.71,.47,7.46-1.25,11.12-.2-2.01-.07-3.96,.05-5.87,.26-5.8,.14-11.73,.76-17.53h0Z"/>
              <path d="M517.03,358.73c-9.54,1.27-14.83-7.08-10.79-15.54,4.32-7.55,15.69-7.11,18.8,1.27-2.9-4.9-8.68-6.76-13.67-3.89-4.59,2.41-5.65,8.92-3.28,13.22,1.81,3.03,5.5,4.37,8.94,4.94h0Z"/>
              <path d="M492.38,220.93c2.33,1.86,6.83,4.03,10.75,5.31,9.87,3.24,26.74,3.41,33.17-6.19-.13,1.36-.39-26.03-.39-26.03-3.37-1.34-7.2-1.63-10.82-1.95-7.42-.53-14.91-.43-22.33,.13-3.69,.32-7.44,.68-10.94,1.63,0,0,.37,19.29,.37,19.29,0,0,.08,4.44-.56,6.65-.64-2.22-.56-6.65-.56-6.65,0,0-.22-15.89-.13-20.51,3.89-1.05,7.82-1.41,11.73-1.7,9.37-.56,18.82-.64,28.12,.74,1.96,.33,3.95,.74,5.83,1.59,0,0,.65,27.07,.63,27.2-2.09,3.79-6.05,6.09-10.04,7.39-9.9,2.92-20.99,1.88-30.15-2.85-1.7-1.1-3.96-1.96-4.67-4.05h0Z"/>
              <path d="M534.89,321.06c-1.39-.28-2.9-.6-4.3-.78-11.03-1.45-22.36-1.44-33.29,.77-1.4,.37-2.86,.65-3.95,1.71-1.82-.51-3.43-1.1-4.75-1.78,10.23,7.47,36.56,7.61,48.16,3.06,2.18-.89,4.4-1.88,6.09-3.54-1.3,.88-2.73,1.51-4.2,2.01-1.05-.87-2.52-1.08-3.77-1.45Zm1.59,2.11c-9.5,2.67-30.42,3.09-42.5-.24,.58-.17,2.14-.71,3.52-1,10.82-2.04,22.05-1.97,32.96-.77,1.39,.16,2.86,.45,4.25,.71,1.13,.22,2.22,.69,3.38,.84-.53,.17-1.07,.32-1.61,.47Z"/>
              <path d="M561.03,325.15c-4.16-3.47-12.24-3.18-15.04,.38,0,0-.88,.69-.98,.74,.29-2.64,.27-6.38,.27-6.38,0-.05-.34-.54-.34-.54-3.79-3.81-9.14-4.5-14.15-5.53-10.07-1.81-20.74-2.72-30.81-.64-8.55,1.77-14.29,6.44-14.29,6.44,0,0,.04,25.17,.06,37.55,.54,2.51,1.56,4.95,2.77,7.25,3.5,6.77,10.33,11.25,17.58,13.09,2.97,.46,5.94,.61,8.9,.59,7.96-.2,19.87-.76,24.54-8.29,.22-.12,1.73-1.77,3.54-3.16,1.03-.79,21.71-13.8,23.01-26.69,.53-5.28-.69-11.1-5.04-14.79Zm3.14,14.58c-.17,2.03-1.96,6.34-3.32,8.21-5.34,7.34-16.58,16.02-20.31,19.61,.64-1.35,1.31-2.69,1.95-4.07-1.68,1.58-2.67,5.22-4.08,6.16-9.12,6.11-13.14,6.06-23.45,6.12-2.65,.01-6.23-.27-8.33-.56-4.46-1.23-8.69-3.32-11.91-6.52-3.25-2.87-5.67-8.64-6.47-11.53-.12-12.38-.16-24.75-.34-37.13,0,0,3.74-2.48,5.99-3.31,23.42-8.64,49.82,3.11,49.82,3.11,0,0-.06,7.34,.76,8.75,.12-.21,.23-.56,.31-.99,1.03,.28,1.62,.32,2.53-.51,3.12-3.04,9.79-3.15,12.84-.5,3.27,3,4.11,8.92,3.99,13.17Z"/>
              <path d="M543.58,360.18c-.15-.99,.3-1.07,.69-1.86,.91-1.64,11.54-10.7,14.35-14.28,2.44-3.73,1.4-10.46-3.29-13.05-2.08-1.09-4.51-.27-6.18,1.25-1.08,.96-1.44,2.5-1.71,3.88-.1,.38-.18,1.22-.36,1.58-.22,.47-.64,.69-1.07,.93,0,0-1.39,.31-1.39,.31l-.22-.98s1.23-.31,1.23-.31c0,0,.67-4.58,2.21-6.59,3.94-4.62,10.2-2.73,12.61,2.65,1.65,3.5,1.07,7.8-.99,10.96-2.29,2.95-11.76,11.67-13.54,13.79-.65,.57-1.28,1.7-2.33,1.71h0Z"/>
              <path d="M582.4,204.36c-.65-2.09-2.43-3.85-3.44-5.08-4.28-5.14-10.92-7.14-17.17-8.34-6.16-1.14-12.37-1.58-18.6-1.99-9.25-2.37-18.85-2.56-28.34-2.63-9.37,.17-18.85,.39-28,2.71-2.84-.03-5.66,.43-8.49,.62-4.12,.43-8.25,.92-12.34,1.72-5.09,.99-10.46,2.1-15.12,4.68-2.96,1.79-5.26,4.77-6.44,7.95-.31,2.74-.05,5.36,.49,7.93-.13,6.06,.29,12.09,.53,18.13,.59,13.51,2.42,50.28,3.11,64.17,1.65,28.52,2.95,57.07,5.99,85.49,1.56,3.35,4.3,6.14,7.11,8.49l.32,.27s.4-.02,.4-.02c.63-.03,3.14-.14,4.61-.21,.38,.92,.86,1.82,1.25,2.7,1.73,1.34,3.5,2.43,5.34,3.44,19.6,10.46,43.09,11.11,64.5,6.69,7.8-1.97,15.96-4.65,21.82-10.46,.36-.55,.68-1.13,.96-1.73,1.03-.03,2.08-.08,3.07-.15,.99-.02,2.08-.12,3.01-.61,.18-.1,4.68-3.64,6.72-5.29,2.76-53.25,6.12-113.53,8.72-166.59,.19-2.87,.28-5.79,.31-8.68-.02-1.05,.01-2.21-.34-3.23Zm-12.41-8.61c2.73,1.24,5.14,2.98,6.93,5.23,1.31,1.44,2.7,3,3.18,4.67,.34,3.18,.28,6.36,.11,9.55-1.08,1.35-6.1,14.17-7.96,19.06l-.03,.08v.09s-.08,.47-.18,1.18c-1.71,.12-3.78,.27-5.05,.4-3.82-.19-7.64-.32-11.46-.46-1.01-.03-6.28-.16-7.17-.18-.9,.09-2.81,.27-3.95,.36v-7.47s0,0,0,0c0-.08-.48-35-.52-38.19,8.79,1.27,17.94,2.14,26.11,5.69Zm-26.87-6.31c-.01,.14-.03,.27-.04,.37-.02,0-.04,0-.06,0,.02-.09,.06-.23,.1-.37Zm-53.23,.28c3.61-.4,7.22-.73,10.85-.94,9.4-.53,18.85-.62,28.26-.24,4.64,.26,9.33,.44,13.88,1.37,.03,1.89,.53,38.27,.53,38.27-1.87,4.34-7.75,7.51-12.63,8.86-13.67,3.59-36.75,4.39-44.77-9.61,.25-7.99,0-32.68,0-32.68-.03-1.41,.07-2.82-.32-4.23,1.4-.15,2.8-.38,4.19-.79Zm-33.87,189.65c-1.43-14.11-2.16-28.33-3-42.5-1.48-24.93-3.09-60.19-4.35-85.53-.58-9.11-.78-21.3-1.51-31.94,.16,.47,.32,.93,.47,1.4,1.9,5.27,4.14,10.36,6.42,15.43-.17-1.02,6.91,131.09,7.83,148.96-2.24-1.62-4.26-3.53-5.85-5.81Zm10.13,6.92l-3.21-.37s-.02-.01-.03-.02c-.71-14.3-7.42-150.02-7.43-150.13-3.04-7.73-6.3-15.44-8.02-23.55-.5-2.57-.83-5.23-.44-7.63,.9-2.04,2.22-3.73,3.82-5.12-3.41,10.68,3,18.14,6.91,27.45,1.12,2.87,2.03,6.35,2.54,9.22,1.67,42.06,4.24,107.58,6.09,149.14,0,0-.11,.51-.22,1.01Zm93.63,.95c-.59,.59-1.09,1.25-1.56,1.92-2.67,2.54-6.23,4.26-9.66,5.64-10.89,4.14-22.66,5.51-34.28,5.41-24.76-.23-44.47-10.85-44.47-10.85,0,0-1.11-2.63-2.38-3.81,0,0-.24-6-.64-15.7l5.48,6.2,.18,.13c9.46,4.04,26.46,6.36,43.44,6.36,15.6,0,31.2-1.96,40.93-6.36l.1-.05,3.99-4.77-1.13,15.89Zm5.72-1.3c-1.06,.3-4.02,.55-4.02,.55l.68-18.08-1.04-.14h0c-6.21-.89-12.19-1.55-17.86-1.95l-1.32,.86c5.67,.41,12.83,1.19,19.11,2.09l-.03,.38-4.73,5.66c-20.13,9.03-65.32,7.61-83.35,0l-5.58-6.31c1.59-.17,3.19-.34,4.79-.51,7.05-.75,13.7-1.46,18.99-1.7l-.04-1c-5.32,.24-11.99,.95-19.06,1.71-1.77,.19-3.56,.38-5.34,.56-1.31-32.17-4.09-100.33-5.4-131.95-.57-3.32-1.43-6.42-2.63-9.56-2.99-7.42-8.51-14.19-7.79-22.55,0,0,.04-4.14,.05-4.61,1.17-.99,2.49-1.83,3.93-2.51,7.23-3.72,15.57-5,23.64-5.78,2.28-.29,4.59-.33,6.88-.55-.38,1.4-.27,2.8-.31,4.2,0,0-.26,23.97,0,33.07,8.21,14.62,31.82,13.91,45.97,10.18,4.6-1.45,9.66-3.65,12.35-7.83v7.13c-.9,.61-1.97,1.11-3.03,1.55-8.16,3.18-17.07,3.99-25.78,4-10-.1-20.08-1.49-29.42-5.11v-.18s-.57-1.94-.57-1.94c0,0-.89,0-.89,0-6.33,1.04-15.93,1.07-15.93,1.07,0,0-4.31-.33-5.8-.37,1.55,1.24,10.84,1.38,16.42,.74,1.57-.18,4.97-.52,4.97-.52,0,0,.8,64.65,.89,82.91-.07,6.97,.88,6.65,.76,0,0-23.02-.51-49.79-.6-73.76,.63,.38,1.32,.73,2.04,1.07,.04,.56,2.12,28.84,2.12,28.84,0,0,.02,.27,.02,.27,0,0,.21,.11,.21,.11,12.17,7.35,38.77,6.34,51.28,.03,0,0,.27-.11,.27-.11l.02-.31,1.56-28.65s-.02,0-.04,0c.53-.26,1.03-.53,1.52-.8l-.11,73.09h1s.11-73.72,.11-73.72h0v-9.7c1.12,.18,3.02,.51,3.91,.67,.92,.05,6.13,.33,7.16,.38,3.84,.16,7.67,.33,11.51,.43,1.63-.19,3.26-.4,4.89-.62-.38,2.61-.95,6.56-.95,6.56-1.42,37.12-3.78,97.83-5.27,134.4,0,0-.18,4.48-.18,4.48,0,1.09-.23,2.63,.02,3.83Zm-36.1-136.71c-18.12,1.92-35.31,.22-44.22-4.27,0-1.28,0-6.14,0-7.18,.7,1.17,2.13,1.36,3.27,1.88,3.59,1.27,7.31,2.11,11.04,2.77,13.64,2.2,28.2,2.33,41.28-2.63,.9-.38,1.79-.79,2.64-1.3v6.49c-4.2,2.5-9.17,3.74-14.01,4.25Zm11.51-1.83l-1.51,27.83c-1.9,.75-3.83,1.43-5.82,1.92-6.26,1.58-12.72,2.21-19.17,2.29-6.43,.05-12.94-.34-19.16-1.97-1.96-.47-3.93-1.24-5.69-2.2l-2.06-28.02c13.42,5.72,39.98,6,53.41,.16Zm37.17-2.68c-2.8,42.31-6.4,136.62-6.4,136.62,0,0-3.66,2.52-5.6,4.25,.09-.4,.12-.8,.14-1.2l.11-2.24s.21-4.48,.21-4.48c1.83-36.59,4.49-97.38,5.93-134.21,0,0,1.26-8.55,1.26-8.55,.95-2.36,6.71-17.52,6.71-17.52,0,0-2.36,27.32-2.36,27.32Z"/>
              <path d="M513.79,280.43l.37,43.99c.56,.23,.71,.2,1.37,0l.92-43.99h-2.66Z"/>
              <path d="M809.47,375.49c2.49,.41,4.87,2.71,4.83,5.29,.02,3.02-.05,6.04,0,9.06,0,0-.23-.46-.23-.46,0,0,.45,.58,.45,.58h-.6c1.89-1.5,4.18-2.91,6.71-2.76,4.87,.11,9.97,2.4,12.29,6.9,4.86,9.58-.49,19.49-7.95,25.86-1.57,1.46-4.26,3.44-5.63,4.27-2.24,1.88-4.25,4.16-6.37,6.34-4.19,4.29-7.69,4.12-7.69,4.12-8.85,5.88-20.07,6.02-30.25,5.07-11.68-1.24-19.38-9.78-21.68-20.91,0,0-.04-.16-.04-.16,0,0,0-.16,0-.16,0,0-.42-19.15-.42-19.15-.15-5.49-.05-13.7-.51-19.11,.1-1.59,1.02-3.23,2.39-4.28,17.49-6.64,36.93-5.25,54.66-.48h0Zm-.65,2.62c-17.76-5.4-36.5-6.28-52.44,.11-.62,.55-1.03,1.3-1.3,2.25,0,0,.03-.43,.03-.42,.54,5.41,.71,13.68,.9,19.2,0,0,.56,19.19,.56,19.19,.69,3.12,3.11,9.41,6.38,12.3,5.19,5.15,12.75,7.18,19.94,7.22,4.97,.13,10.02-.18,14.78-1.62,2.35-.73,4.59-1.79,6.6-3.16,0,0,.86-.1,.86-.1,2.86,.91,4.55-2.2,6.39-3.93,2.11-2.25,4.18-4.49,6.56-6.51,9.27-5.65,19.08-16.49,13.59-27.88-2.04-4.08-6.63-6.19-11.06-6.43-2.17-.19-4.26,1.01-6.08,2.37,0,0-.24,.18-.24,.18,0,0-.36-.19-.36-.19-.16-.08-.71-.37-.86-.45,0,0-.02-.35-.02-.35-.16-2.99-.42-5.98-.64-8.97-.21-1.61-1.89-2.55-3.6-2.81h0Z"/>
              <path d="M824.97,395.21c-2.87-2.82-7.36-2.8-10.84-1.23-.58,.85-1.02,1.8-1.23,2.77-.21,.93-.22,1.86-.09,2.74,.26-1.51,.98-2.82,1.97-3.76-.16,1.29-.4,3.15-.42,3.31-1.17,3.23-2.32,4.98-3.88,1.3,0,0,.11-7.07,.12-8.04,.42-1.05,1.07-2.02,2.2-2.43-1.37-.02-2.61,.95-3.45,1.97l-.1,.17v.18s.23,8.15,.23,8.15c.34,1.13,.93,2.41,2.1,2.97,.63,.19,1.15,.06,1.6-.25v17.86s-.07,.79-.07,.79c-.27,.08-.54,.25-.76,.37,.19,.46,.43,1.18,.96,1.09l.69-.12c.53-.55,1.12-1.04,1.7-1.53,2.99-1.82,5.7-3.99,8.04-6.6,2.31-2.61,4.31-5.82,4.68-9.53,.28-3.71-.85-7.46-3.46-10.19Zm1.76,10.04c-.23,3.19-1.95,6.19-4.09,8.71-2.37,2.88-5.45,5.06-8.47,7.21l.02-.21v-19.04c.52-.86,.88-1.92,1.15-2.62,0-.02,.02-.06,.02-.08l.51-4.04c2.72-.83,5.9-.66,7.86,1.31,2.13,2.17,3.18,5.72,3,8.74Z"/>
              <path d="M755.83,380.56c7.6,5.78,44.01,6.36,53.03,2.48,1.08-.47,2.2-1.01,2.9-2.02-.53,1.13-1.61,1.89-2.66,2.51-10.19,5.88-44.85,5.62-53.27-2.97h0Z"/>
              <path d="M758.58,382.46c.22-.87,.86-.8,1.34-1.06,1.53-.58,3.09-1.07,4.67-1.5,13.92-3.34,29.94-3.5,43.29,2.11,.47,.27,1.07,.32,1.33,1.01-.69,.17-1.08-.21-1.6-.36-7.52-2.77-15.66-3.43-23.63-3.46-6.41,0-12.82,.62-19.09,1.94-1.56,.33-3.11,.73-4.63,1.21-.53,.1-.91,.54-1.67,.11h0Z"/>
              <path d="M782.36,339.9l.71,44.83c.27,.25,.55,.25,.82,0l.7-44.83h-2.23Z"/>
              <path d="M773.43,398.85c-5.83,.5-7.91,5.24-7.64,10.47,.04,2.46,.55,4.89,1.95,6.8,1.38,1.93,3.73,3.17,6.33,3.68-2.62,.42-5.64-.4-7.65-2.55-5.67-5.83-3.07-20.83,7.01-18.41h0Z"/>
              <path d="M889.95,254.05c-.08-1.38-.08-2.81-.71-4.11-.77-1.28-1.84-2.34-3.02-3.16-5.31-2.35-10.83-4.22-16.48-5.51-5.54-1.36-17.25-2.81-17.25-2.81l-.79,.52c-.23-.32-.53-.69-.78-.88,0,0-.16-.02-.16-.02-17.66-1.99-35.43-2.19-53.18-2.46-5.94-.05-11.89-.11-17.83-.09-12.09,1.33-24.55,2.89-35.43,8.81-7.58,4.12-12.94,11.33-15.95,19.3-1.39,3.75-1.74,14.41-1.56,17.39,2.56,43.27,4.55,94.78,6.76,138.13,.35,6.82,.64,13.64,1.16,20.46-.04,.34,.35,1.15,1.08,1.27,.16,.01,.31,.02,.45,.02l.05,3.88s.82,1.49,1.04,1.88c.1,.51,1.99,10.64,1.99,10.64,0,0,20.32,8.57,57.45,9.32,5.96,.12,12.07,.15,18.04-.01,8.46,.11,16.99-.4,25.23-2.54,4.89-1.25,9.62-3.18,13.97-5.81,0,0,0-.89,0-1.29,1.38,.22,4.92,.79,4.92,.79,10.79-5.31,21.32-18.62,21.32-18.62,0,0-.77-2.21-.82-2.34,2.84-49.25,7.5-129.82,10.3-178.26,.03-.93,.27-3.68,.21-4.52Zm-159.21,8.37c2.99-6.78,8.06-12.68,14.61-16.22,10.59-5.66,22.85-7.03,34.66-8.31,5.36,0,11.83-.22,17.56-.17,10.33,.16,25.25,.2,35.41,.56,5.89,.19,17.49,.94,17.49,.94l1.65,.37v-.02c3.08,.58,12.58,2.4,17.17,3.56,5.46,1.46,10.86,3.14,16.02,5.4,.8,.7,1.62,1.46,2.09,2.37,.36,.98,.29,5.03,.26,5.55-1.47,.79-15.08,15.28-20.05,22-2.13,2.79-3.12,9.43-3.12,9.43l-1.3,1.86c-1.2-.26-2.54-.18-4.36-.3-1.98-.13-20.15-2.54-31.6-3.61l-.25-.95s.1,.36,.1,.36c-.23-3.05,.84-7.58,1.3-9.79,4.3-8.98,16.62-25.05,16.62-25.05l-.21-1.59s-10.06-5.59-10.43-5.72c-2.64-.92-11.31-2.75-22.18-3.27-6.42-.31-22.41-.94-22.41-.94,0,0-1.47,.87-3.59,2.2-1.91,.36-3.73,.85-5.53,1.44-7.55,3.73-14.21,9.11-19.78,15.41-5.1,5.91-9.3,12.6-12.43,19.77-5.1-.33-10.62-.81-15.72-1.19-1.71-.09-3.28-.71-4.47-1.81,0,0,.47-8.3,2.54-12.28Zm94.55,23.19l.04,.04c-.1,0-.21-.02-.32-.03-.1,4.91-.17,9.82-.21,14.73-4.77,1.6-9.53,3.44-14.2,5.27-5.37,1.63-11.2,1.81-16.84,2.02-7.39,.22-14.86-.09-22.22-.63-3.68-.28-7.36-.65-10.86-1.46-1.7-.42-3.93-1.05-5.09-2.23,0-.33-.01-13.02-.03-13.39,2,.5,10.76,1.37,10.76,1.37l.07-1.33c-.18-.22-6.41-.52-13.3-2.73-1.21-.39-2.43-.9-3.46-1.64,.03-.71-.29-5.29-.27-5.7,4.17-11.55,11.72-22.07,21.23-29.93,3.19-2.64,6.65-4.97,10.31-6.92,.99-.33,2.25-.69,3.5-.88-3.89,2.51-8.93,5.98-11.63,8.73-3.74,3.62-11.96,14.8-12.48,16.49,0,0,12.19-15.96,21.16-22.14,2.44-1.68,8.43-5.39,8.43-5.39,3.13-.09,14.32,.2,24.14,1.1,11.86,1.08,18.89,2.75,18.89,2.75-6.06,4.11-11.19,7.6-16.86,12.27-5.43,4.7-11.08,10.15-15.96,14.9-3.22,2.56-7.9,3.3-11.73,3.29,0,0-21.64-1.59-21.64-1.59-2.4-.13-5.55-2.64-6.01-3.88-.26,2.66,3.87,5.21,5.9,5.32,.06-.03,21.63,1.75,21.69,1.71,4.47,0,9.24-.75,12.86-3.64,5.18-5.09,10.39-10.22,15.85-15.01,4.62-3.92,14.16-10.84,17.15-12.99,1.61,.84,9.69,5.04,9.72,5.1l.1,1.02c-.08-.21-12.7,15.38-17.33,24.36-.5,1.76-.85,3.54-1.16,5.36-.31,1.86-.34,3.77-.18,5.66Zm-.43,43.35c-1.06,.31-2.21,.95-3.02,1.3-2.45,1.13-9.3,4.23-11.81,5.39-2.55,.89-5.41,1.4-8.19,1.82-8.5,1.2-17.12,.92-25.67,.24-5.28-.47-10.67-.66-15.76-2.18-.19-.06-.36-.14-.53-.22-.29-8.01-.68-18.98-1.02-27.29,.39,.13,.76,.24,1.08,.34,7.43,2.08,14.99,2.5,22.62,2.72,7.58,.16,15.18,.07,22.69-1.27,2.35-.46,4.83-.91,7.07-2.01,.85-.42,2.92-1.35,3.81-1.8,2.92-1.38,5.81-2.83,8.67-4.34-.07,9.1-.05,18.2,.07,27.3Zm-69.27-25.44s0-.02,0-.03c0,.03,0,.05,0,.03Zm-19.43,128.92c0-.09,0-.17-.01-.26,0,.09,.01,.17,.02,.26,0,0,0,0-.01,0Zm115.94,24.74c-11.22,6.5-24.54,7.73-37.3,7.55-10.76,.29-21.58-.01-32.32-.67-14.07-.68-28.16-3.09-41.28-8.24-.12-1.04-1.2-10.2-1.2-10.2,0,0-.97-1.36-1.19-1.66-.06-.41-.48-3.34-.94-6.53,.04,.02,.08,.04,.08,.04,13.35,6.6,28.51,7.77,43.09,9.24,17.11,1.57,34.66,1.56,51.34-3.12,6.51-2.19,13.71-4.61,20.18-6.94-.27,3.02-.47,20.25-.47,20.52Zm1.5-2.1l.2-18.86c-.33-.82-.83-1.55-1.56-2.02l-23.85-1.58c-.02-.86-.41-16.42-.41-16.42l-1,.02,.43,17.33,24.46,1.62c.17,.13,.33,.29,.48,.47-6.59,2.05-13.85,4.4-20.38,6.58-16.45,4.66-33.86,4.71-50.81,3.21-14.38-1.43-29.4-2.47-42.6-8.79-1.04-2.05-1.71-4.32-1.43-6.56,.26-2.21,1.46-4.21,3.03-5.82,.5,.07,17.07,2.44,17.07,2.44l.14-.99-17.33-2.48-.25-.04c-.95,.94-1.81,1.97-2.47,3.16-.82,1.38-1.2,2.92-1.24,4.48-2.06-48.53-4.97-101.97-7.32-149.86-.13-1.29-.4-3.95-.47-4.61,1.29,.82,2.8,1.26,4.27,1.32l15.41,.98c-.14,.33-.29,.66-.42,.99,.02,.18,.26,6.72,.27,6.75,1.26,1.35,5.06,2.76,5.28,2.83-.03,.13-.1,10.98-.12,14.06,.02,1.38,1.04,2.41,2.35,3.19-.04,.5-.03,1-.03,1.5,.12,15.36,.38,35.28,.5,50.71,.03,2.85,.12,10.48,.15,13.23,.08,1.22-.16,3.18,.25,4.32,0,0,.99,.17,.99,.17,.41-1.24,.14-3.23,.2-4.5-.1-14.49-.4-33.95-.55-48.51-.04-2.85-.15-10.5-.19-13.23-.04-.86,0-2-.05-3.03,.41,.18,.82,.35,1.22,.49,.17,8.47,.27,20.01,.49,28.14v.3c.39,.45,.86,.77,1.35,1.03,5.04,2.45,10.75,3.07,16.23,3.74,11.68,1.09,23.9,1.28,35.1-2.84,2.5-1.28,9.3-4.78,11.69-6.02,.63-.35,1.46-.72,2.22-1.15,.03,2.37,.07,4.73,.11,7.1,.3,17.1,.76,34.2,1.69,51.27l1-.03s-.19-51.27-.19-51.27c-.05-15.02-.14-50.19-.14-50.19,2.71,.44,3.92,.68,6.64,1.08,7.95,1.08,16.69,2.35,24.64,3.01,1.75,.14,4-.04,4-.04,0,0-.81,29.18-1.15,39.89-1.25,36.09-3.44,123.79-3.44,123.79l-4.45-.39Zm24.15-15.63s-11.27,13.24-18.27,15.81c.12-.45,.18-.89,.2-1.28,0,0,.09-3.42,.09-3.42,.78-21.1,1.87-56.11,2.55-77.49,.59-21.41,2.57-81.55,1.74-83.17,.73-.52,1.65-1.18,1.65-1.18,.39-2.43,1.04-4.93,2.26-7.07,2.24-3.36,5.14-6.32,7.84-9.4,1.9-2.14,4.88-5.26,6.7-7.42,0,0,3.26-3.81,3.26-3.81,.74-.78,1.39-1.64,1.77-2.62,0,.05,0,.08,0,.08-2.65,48.79-9.78,180.95-9.78,180.95Z"/>
              <path d="M811.12,422.5c-1.57,.83-2.16,2.56-2.9,4.07-.71,1.57-1.38,3.16-2.16,4.69,.19-.7-.25,.79-.25,.78-.07,.28-.23,.7-.23,.99-.09-.15-.13-.33-.18-.49-.1-.35-.31-1.22-.39-1.58,.68-1.67,1.52-3.26,2.45-4.8,.9-1.42,1.91-3.24,3.68-3.66h0Z"/>
              <path d="M640.47,449.38c-2.06,1.73-4.62,2.42-7.13,3.12-7.44,1.88-15.2,2.08-22.79,1.11-7.96-.78-15.41-5.78-18.87-13.03-1.21-2.43-2.05-5-2.65-7.6,0,0,0-.19,0-.19l-.09-9.89c-.13-5.73-.03-13.96-.05-19.77,.05-3.48,.06-6.96,.16-10.43,1.94-2.4,4.67-3.96,7.53-4.88,7.73-2.43,15.91-2.29,23.85-2.33,5.29,.02,10.62,.35,15.88,1.37,5.27,1.05,10.6,2.87,14.65,6.59,0,0,.25,.21,.25,.21l.02,.41c.15,2.5,.1,5.31,.05,7.83,0,0-.03,1.31-.03,1.31,0,.44,.01,.87-.37,1.31h-1c-.38-.44-.36-.87-.37-1.31,0-.88-.07-3.02-.07-3.92,0-1.74,0-3.48,.1-5.22l.27,.62c-10-8.83-32.21-7.31-44.95-6.04-4.78,.75-10.05,1.71-13.33,5.48,0,0,.31-.89,.31-.89,.13,3.3,.17,6.59,.26,9.89,.13,8.59,.29,22.05,.18,29.32,1.59,8.85,7.16,15.87,15.94,18.2,5.7,1.25,11.6,1.71,17.44,1.36,4.27-.3,8.65-.8,12.61-2.47,.53-.24,1.11-.55,1.48-.84l.71,.7h0Z"/>
              <path d="M646.72,414.43c-1.74-3.45,1.56-6.22,4.7-6.98,2.3-.15,4.78,.74,6.42,2.43,4.99,4.92,5.17,13.28,.97,18.72-3.74,4.3-8.28,7.89-13.16,10.78,0,0-.1,.02-.1,.02l-1.08,.17s.15-.05,.15-.05c-.31,.17-.65,.43-.84,.69-.18,.23-.17,.43-.18,.67-.17,2.95-2.7,5.17-3.99,7.49,0,0-.04-.44-.04-.44,.55,.81,1.51,1.15,2.4,.8,0,0-.19,.1-.19,.1,1.03-1.03,2.05-2.06,3.09-3.06,.75-1.1,2.42-3.09,3.49-4.51,3.83-3.18,7.7-6.44,11.22-9.85,3.42-3.33,6.24-7.22,6.52-11.59,.3-4.42-1.59-9.02-4.04-12.7-2.75-3.91-8.01-3.66-12.08-1.85,0,0-.44,.19-.44,.19-.29-.48-.66-.73-1.36-.73,0,0,.22-.05,.22-.05l-3.75,1.72s.1-.06,.1-.06c-.54,.39-.74,1.14-.74,1.82,.05,.96,.22,4.41,.27,5.44,.19,1.15,1.56,3.26,3.1,2.79,.68-.49,1.28-1.26,1.92-1.87,0,0-.14,.29-.14,.29,.15-2.48,1.05-4.99,2.6-6.93,0,0,.81,.59,.81,.59-1.55,1.96-2.26,4.15-2.44,6.62-.67,.69-1.3,1.38-2.03,2.03-.61,.42-1.37,.42-2.01,.19-1.55-.64-2.53-2.05-2.81-3.66,0,0-.2-3.98-.2-3.98-.1-1.45-.26-3.23,1.15-4.17,0,0,3.75-1.72,3.75-1.72l.11-.05c.72,0,1.53,.19,2.01,.82,0,0-.67-.11-.66-.12,6.29-4.7,13.78-3.21,17.3,4.04,5.56,9.43,3.18,18.42-4.89,25.34-3.51,3.14-8.68,7-11.8,8.99-1.37,1.4-2.72,2.82-4.11,4.2-1.16,.87-2.33,1.73-3.51,2.58,0,0-.12,.09-.12,.09-.62,.14-1.33,.13-1.93-.15-.68-.28-1.06-.91-1.64-1.3,.44-.4,.66-.93,.97-1.39,.72-1.07,1.55-2.21,2.13-3.34,.52-.98,.84-1.96,.81-3.02,.12-.88,.83-1.46,1.52-1.86,.04-.03,.1-.04,.15-.05,0,0,1.08-.17,1.08-.17,0,0-.2,.08-.2,.08,4.51-3.2,8.71-6.78,12.11-11.14,.78-1.21,1.91-3.58,2.22-5.35,1.3-5.47-2.19-13.1-7.84-13.12-1.58,.18-3.46,1.41-4.15,2.39-.48,.92-.68,1.96-.83,3.15h0Z"/>
              <path d="M592.34,394.62c.81-.04,1.23,.23,1.87,.53,8.3,3.81,21.9,5.07,33.82,4.83,6.04-.12,12.62-1.21,18.18-3.77,1.06-.58,2.02-1.22,3.05-1.99-.46,1.24-1.56,2.07-2.61,2.76-11.3,6.15-28.25,5.96-40.72,3.91-2.73-.49-13.77-2.99-13.59-6.27h0Z"/>
              <path d="M594.89,396.34c12.27-5.69,39.18-5.51,51.18,.44"/>
              <path d="M614.99,428.65c-2.01,5.1-9.19,7.83-13.8,4.5-4.03-2.77-4.79-8.07-4.42-12.59,.25-4.88,3.6-9.95,9.11-8.93,3.06,.97,6.35,2.72,7.69,5.79-1.96-2.57-5.03-3.68-8.08-4.3-5.89-.18-6.9,6.48-6.48,11.3,.26,3.42,1.85,7.1,5.3,8.26,3.93,1.25,8.36-.69,10.68-4.03h0Z"/>
              <path d="M650.89,411.31c.58,.9,.49,1.8,.52,2.7,.05,2.63,.09,5.5,.1,8.11,0,3.6-.06,7.21-.14,10.81-.14,.95-.43,1.87-.94,2.74,0,0-.99-.17-.99-.17-.19-.95-.13-1.85,0-2.74v.17c-.09-3.6-.16-7.21-.16-10.81,0-2.61,.05-5.49,.1-8.11,.02-.9-.06-1.8,.52-2.7h1Z"/>
              <path d="M622.95,284.21c-2.68,0-5.72-.12-9.15-.41-10.86-.92-12.33-2.51-12.49-3.63-.22-1.55,2.33-2.62,2.86-2.82,.38-.16,7.93-3.12,24.14-2.03,7.89,.53,12.09,1.79,12.82,3.86,.44,1.24-.57,2.18-.61,2.22l-.09,.07c-.24,.13-4.99,2.74-17.48,2.74Zm-1.44-8.13c-11.45,0-16.9,2.17-16.97,2.2h0c-.99,.38-2.31,1.2-2.23,1.75,.06,.43,1.08,1.88,11.58,2.78,18.13,1.54,25.31-1.83,25.99-2.18,.12-.13,.49-.59,.3-1.12-.27-.74-1.96-2.52-11.94-3.19-2.44-.16-4.69-.23-6.74-.23Z"/>
              <path d="M592.05,286.69c-1.08,1.44-1.95,3.12-1.95,4.9-.08,1.79,.7,3.94,.96,5.12,4.73,2.61,10.35,3.31,15.68,3.82,5.31,.44,16.46,.48,16.53,.46,1.05-.42,2.03-1.11,2.71-2,1.1-1.41,1.28-3.33,.86-5.01-.57-1.79-2.08-2.95-3.71-3.88,5.27,.89,6.75,8.03,1.89,10.65-.49,.3-1.79,.91-1.79,.91,0,0-.07,0-.07,0-5.52,.18-10.98,0-16.48-.42-5.5-.56-11.25-1.18-16.09-4.1-2.25-3.21-2.16-8.3,1.46-10.45h0Z"/>
              <path d="M708.34,267.14s0-.3,0-.3c-1.26-2.59-4.27-3.32-6.77-3.93-.11-.04-26.52-2.87-26.64-2.9-2.51-.14-14.34-1.77-16.64-1.71-3.45-.1-6.91,.54-10.21,1.45-3.78,1.65-13.36,5.65-17.04,7.28-1.55,.75-3.89,1.48-5.35,2.45-8.57-1.07-14.77-1.84-14.77-1.84,0,0-14.36,5.52-21.08,8.23-2.97,1.86-3.76,3.74-3.22,5.39-.72,3.11-.35,6.35-.5,9.52,0,1.68,.06,3.36,.1,5.04,.02,.86,0,1.75,.66,2.44,.08,.11,.22,.21,.36,.3-.36,.8-.18,1.84-.25,2.57-.11,7.15-.32,14.84-.39,21.98-.04,7.38-.25,17.84-.13,25.12,0,0,0,.9,0,.9,0,0,.67,.45,.68,.45,4.86,3.22,11.07,5.24,17.8,6.37-.12,.39-.16,.78-.16,1.17-.1,6.6-.1,15.46,.03,22.09l.06,4.02c.06,1.34-.14,2.68,.47,4.02h1c.61-1.34,.41-2.68,.47-4.02,0,0,.06-4.02,.06-4.02,.08-4,.13-12.06,.1-16.07-.01-1.3-.05-4.77-.07-6.02,0-.29-.03-.59-.09-.88,12.82,1.82,27.19,.59,37.55-1.74,6.05-1.36,13.2-3.88,17.93-7.05,.19-.08,.35-.1,.39-.1,.03,0,.04-.01,.15,.11,.77,1.43,.59,3.43,.64,5.18,.19,14.36,.25,40.43,.46,55.07h1c.12-14.5,.35-40.81,.46-55.08-.07-2.18,.32-4.35-.93-6.37-.6-1.01-2.23-1.2-3.14-.62-5.26,3.28-11.35,5.2-17.48,6.53-15.29,3.01-31.65,3.25-46.63-1.33-2.65-.88-5.19-2.04-7.41-3.53,.03-3.89,0-7.77,0-11.66-.06-10.94-.32-23.67-.52-34.54-.04-.51,.01-1.09-.03-1.64,3.39,1.48,6.81,2.85,10.45,3.65,16.69,3.13,33.82,1.48,50.44-1.26,.05,0,.14-.03,.18-.06l10.92-4.89c3.68-1.66,7.34-3.35,10.99-5.07,2.48-2.86,3.98-6.76,3.56-10.38,.47,.07,1.84-.87,2.16-1.12,.24,0,.37,.13,.43,.49,.04,.92-.05,3.45-.07,4.42-.14,5.76-.27,12.12-.48,17.84,0,0,0,.16,0,.17,0,0,.08,.13,.08,.13,.54,1.13,1.96,1.66,3.09,1.16,0,0,22.85-10.12,24.58-10.89-.03,4.3,.42,118.06,.61,131.21,0,0-.19,1-.19,1-.75-.08-1.26,.31-1.84,.58,0,0-10.19,5.15-12.32,6.24-5.62,2.82-17.07,8.67-27.13,13.82v-16.79h-1v16.76l-16.16-2.66-.17,.99,15.65,2.56c-5.38,2.76-10.23,5.24-13.38,6.86-1.12,.52-2.41,.88-3.66,1.22-8.88,2.29-18.14,2.71-27.29,2.52-7.8-.32-15.82-.47-23.33-2.72-2.06-.72-4.29-1.6-5.54-3.45-.11-.2-.23-.36-.43-.54-.01-.57-.02-1.12-.04-1.64,.4-1.65,4.08-3.95,6.41-5.19,0,0-.41-.91-.41-.91-2.42,.79-4.84,1.55-6.84,3.24-.75,.66-1.53,1.7-1.67,2.85-.12,4.03-.22,10.29-.2,14.02-.09,1.73,.32,3.23,.95,4.78,0,0,.31,.22,.31,.22,6.63,4.68,14.61,6.43,22.5,7.21,10.35,1.01,20.84,.83,31.11-.94,2.63-.46,5.19-.97,7.85-1.75,.12-.06,55.73-27.93,55.86-28l.42-.21c.43-.96,.9-1.89,1.32-2.89,.37-.91,.77-1.9,.85-3.05,.05-4.2,.32-12.84,.32-12.84l-.4-.44,.57-.43s.92-105.57-.02-158.15Zm-34.66,20.35c-.57,1.21-1.29,2.4-2.11,3.44-6.09,2.49-16.39,6.87-21.72,9.24-13.12,2.34-26.6,3.68-39.92,2.91-7.56-.37-15.1-2.12-21.58-6.08,0,0,.01-.01,0-.02-.05-.21-.11-.28-.08-.55,.05-1.89,.11-3.78,.12-5.67-.11-2.43,.07-4.9-.15-7.32,1.16,.99,2.79,1.8,4.6,2.35,6.88,2.27,14.2,2.95,21.37,3.16,11.5,.27,22.95-.7,34.32-2.28,.04,0,.1-.02,.14-.04l11.52-4.95,5.76-2.47c1.91-.84,3.88-1.55,5.6-2.86-2.13,.32-4.01,1.24-5.95,2.02l-5.79,2.41c.12-.04-11.15,4.62-11.45,4.78-11.29,1.43-22.73,2.23-34.11,1.95-5.69-.17-11.35-.69-16.86-1.99-2.49-.68-9.84-2.31-9.29-5.6,.1-.92,1.82-2.3,2.33-2.61,6.52-2.63,20.54-8.39,20.54-8.39,0,0,61.07,7.2,61.33,7.23,.94,.89,1.68,2.1,2.11,3.36,.91,2.62,.43,5.5-.73,7.98Zm3.99-8.15c-.57,.23-1.5,.55-2.02,.97-.43-1.77-1.36-3.44-2.92-4.82-8.14-1.12-29.26-3.79-44.55-5.7,.2-.09,.39-.17,.59-.25,1.87-.8,6.58-2.79,8.52-3.63,0,0,11.36-4.85,11.36-4.85,1.58-.31,4.34-.98,6.34-.93,4.43-.27,15.18,1.52,19.73,1.93-.13,.02,26.95,3.17,26.35,3.13,1.59,.33,3.82,1,4.81,2.19-4.19,1.78-20.45,9.05-20.45,9.05,.05,.17,.18,.53,.18,.53,0,0-5.33,2.11-6.88,2.77-.03-.05-.38-.66-1.06-.39Zm27.97,13.25l-25,10.94c-.37,.11-.71,.13-.97,.02-.23-.09-.42-.3-.59-.58-.03-3.91-.02-7.83,.01-11.74l.03-5.95s.01-2.98,.01-2.98c-.06-.68,.16-1.43-.13-2.09,1.63-.36,7.08-2.73,7.08-2.73,0,0,.17-.43,.17-.43,5.65-2.48,19.7-8.59,19.7-8.59,0,0-.26,16.09-.32,24.13Zm-.01,146.39c-.14,.89-.95,2.7-1.79,3.87l-55.67,27.02c-2.27,.63-4.76,1.11-7.19,1.52-9.96,1.61-20.13,1.79-30.19,.95-7.24-.58-14.58-1.97-20.86-5.7-.26-.95-.46-1.99-.39-2.9,.01-3.35,0-7.59-.07-11.31,1.35,1.85,3.62,2.82,5.7,3.56,13.79,4.04,41.59,4.4,54.95-.84,14.54-7.42,38.41-19.71,52.66-27.13l1.75-.91c.35-.2,.72-.35,1.05-.6,.1,4.16,.08,8.31,.04,12.47Z"/>
              <polygon points="618.62 356.79 618.9 398.16 620.41 398.45 620.68 356.48 618.62 356.79"/>
            </g>
          </svg>
        </div>
      )

    case "brewer-hole":
      return (
        <div className="illustration brewers" >
          <svg width="100%" height="100%" viewBox="0 0 1121 585.09">
            <rect className="filled" x="203.33" y="142.09" width="714.67" height="382"/>
            <path className="bg-select-indicator"
                  d="M0,0V585.09H1121V0H0ZM667.5,482.65c0,5.95-4.83,10.78-10.78,10.78h-192.44c-5.95,0-10.78-4.83-10.78-10.78V188.87c0-5.95,4.83-10.78,10.78-10.78h192.44c5.95,0,10.78,4.83,10.78,10.78V482.65Z"/>
            <path className="stroked"
                  d="M656.46,168.26c11.67,0,21.12,9.46,21.12,21.12V481.83c0,11.67-9.46,21.12-21.12,21.12h-192.92c-11.67,0-21.12-9.46-21.12-21.12V189.38c0-11.67,9.46-21.12,21.12-21.12h192.92m0-1h-192.92c-12.2,0-22.12,9.93-22.12,22.12V481.83c0,12.2,9.93,22.12,22.12,22.12h192.92c12.2,0,22.12-9.93,22.12-22.12V189.38c0-12.2-9.93-22.12-22.12-22.12h0Z"/>
          </svg>
        </div>
      )



  }
  return <></>

}