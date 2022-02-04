import React from "react";
import { Input, Button } from "semantic-ui-react";

const InfoPersonnel = () => {

    return (<div>
        <h2>Quel est votre âge?</h2>
        <small>Entrez votre âge:</small>
        <br></br>
        <Input></Input>
        <div className="center"><Button content="Continue"></Button></div>
    </div>)
}

export default InfoPersonnel;