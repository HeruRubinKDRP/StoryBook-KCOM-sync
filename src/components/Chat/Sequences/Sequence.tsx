import {SequenceStyled} from "./sequence.styled";

export interface iSequence{
    steps : string[];
    prerequisites : string;
    summary? : string;
    text? : string;
}

export const Sequence= (props : iSequence) => {
return(
    <SequenceStyled>
        {
            props.summary &&
            <div className="title">
                    <h3 className="summary">
                        {props.summary}
                    </h3>
                {
                    props.prerequisites &&
                    <div className="prerequisites">
                        {props.prerequisites}
                    </div>
                }
            </div>
        }

        <div className="instructions">
            {
                props.steps.map(
                    (step, index) => {
                        return(
                            <div className="step" key={index}>
                                <div className="step-number">
                                        {index+1}
                                </div>
                                <div className="step-description">
                                    <p>
                                        {step}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    )
            }
        </div>
    </SequenceStyled>
)
}