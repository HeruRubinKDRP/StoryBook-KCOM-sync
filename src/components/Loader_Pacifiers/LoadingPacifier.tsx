import {StyledLoadingPacifier} from "./StyledLoadingPacifier";
import Image from "next/image";

export interface iLoadingPacifier {
    pacifier : "coffee-cup" | "coffee-cup-classic"
}

export const LoadingPacifier = (props: iLoadingPacifier) => {
    const getPacifier = () => {
        switch (props.pacifier){

            case "coffee-cup-classic":
                return (
                    <div className="loading-graphic">
                        <Image
                            unoptimized={true}
                            src="/loaders/cup_loader_med.gif"
                            width={130}
                            height={136}
                            alt="loading"
                        />
                    </div>
                )

            case "coffee-cup":

                return (
                    <svg width="100%" height="100%" viewBox="0 0 91.29 72.61">
                        <mask id="maskCoffeeFill" maskContentUnits="userSpaceOnUse">
                            <rect className="mask-fill" x="0" y="0" width="100%" height="100%"/>
                        </mask>
                        <g className="cup-background">
                            <path className="filled-highlight" d="m86.09.5H24.53c-3.68,0-3.68,1.45-3.66,3.99v8.78C17.04,9.74-.53,7.45.55,28.28c.63,12.11,20.32,19.9,20.32,19.9,2.93,13.12,11.38,20.85,24.59,23.93h20.84c13.2-3.52,21.86-10.95,24.5-23.56V5.33c0-3.45-1.38-4.83-4.69-4.83ZM21.01,38.93c-21.21-3.68-13.04-30.92-.16-16.7l.16,16.7Z"/>
                            <circle className="cls-3" cx="55.6" cy="34.62" r="17.75"/>
                            <g className="stroked">
                                <circle cx="48.93" cy="27.04" r="3.22"/>
                                <circle cx="48.93" cy="42.32" r="3.22"/>
                                <circle cx="48.98" cy="34.68" r="3.22"/>
                                <polygon points="65.5 23.71 59.61 23.71 53.17 34.3 59.24 45.54 65.13 45.54 59.06 34.3 65.5 23.71"/>
                            </g>
                        </g>
                        <g id="cup-fill" mask="#maskCoffeeFill">
                            <path className="filled" d="m83.42,2.94H28.05c-3.68,0-3.68,1.45-3.66,3.99v39.7c2.93,13.12,11.38,19.37,24.59,22.45h14.64c13.2-3.52,21.86-9.47,24.5-22.08V7.77c0-3.45-1.38-4.83-4.69-4.83Z"/>
                            <circle className="filled-highlight" cx="55.6" cy="34.62" r="17.75"/>
                            <g className="filled">
                                <circle cx="48.93" cy="27.04" r="3.22"/>
                                <circle cx="48.93" cy="42.32" r="3.22"/>
                                <circle cx="48.98" cy="34.68" r="3.22"/>
                                <polygon points="65.5 23.71 59.61 23.71 53.17 34.3 59.24 45.54 65.13 45.54 59.06 34.3 65.5 23.71"/>
                            </g>
                        </g>
                    </svg>
                )
        }

    }

    return(
        <StyledLoadingPacifier className="pacifier">
            {getPacifier()}
        </StyledLoadingPacifier>
    )
}