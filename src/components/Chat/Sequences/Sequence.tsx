export interface iSequence{
    steps : string[];
    prerequisites : string;
}

export const Sequence= (props : iSequence) => {
return(
    <div>
        <div className="prerequisites">
            {props.prerequisites}
        </div>
        <div className="instructions">
            {
                props.steps.map(
                    (step, index) => {
                        return(
                            <div key={index}>
                                <div>
                                    {index}
                                </div>
                                <div>
                                    {step}
                                </div>
                            </div>
                        )
                    }
                    )
            }
        </div>
    </div>
)
}