import React from "react";

const props = {

}

function Response(props) {
    return(
        <>
            <div>
                { props.sentences }
            </div>
            <div>
                { props.paragraphs }
            </div>
            <div>
                { props.overallsimilarityScore }
            </div>
        </>
    )
}

export default Response();