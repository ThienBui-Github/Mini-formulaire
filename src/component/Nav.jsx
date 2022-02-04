import React, { useState } from "react";
import { Progress } from "semantic-ui-react";


const Nav = (props) => {

    const [progressBar, setProgressBar] = useState(25);
    const [progressContent, setProgressContent] = useState('Objectifs');

    return (
        <Progress percent={progressBar} size='small' active color="blue" content={progressContent} />
    )

}

export default Nav;