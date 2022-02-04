import React from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";

const Objectif = () => {

    const handleClick = () => {
        
    }

    return (<div>
        <h2>Quelles sont vos objectifs à travers cette formation?</h2>
        <br></br>
        <div>Choisir ce qui s'applique:</div>
        <Form>
            <Form.Field>
                <div className="checkbox"><Checkbox label=' Acquérir des nouvelles compétences' /></div>
                <div className="checkbox"><Checkbox label=' Consolider des compétences' /></div>
                <div className="checkbox"><Checkbox label=' Apprendre la théorie' /></div>
                <div className="checkbox"><Checkbox label=' Améliorer sa pratique' /></div>
                <div className="checkbox"><Checkbox label=' Améliorer situations professionnelle' /></div>
                <div className="checkbox"><Checkbox label=' Trouver un travail' /></div>
                <div className="checkbox"><Checkbox label=' Lancer son entreprise' /></div>
                <br></br>
                <div className="center"><Button content="Continue" onClick={handleClick} ></Button></div>
            </Form.Field>
        </Form>
    </div>)
}

export default Objectif;