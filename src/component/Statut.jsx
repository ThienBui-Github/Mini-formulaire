import React from "react";
import { Select } from "semantic-ui-react";

const Statut = () => {

    const statutChoix = [
        { key: 'tempsPlein', value: 'tempsPlein', text: 'Temps Plein' },
        { key: 'tempsPartiel', value: 'tempsPartiel', text: 'Temps Partiel' }
    ]

    return (<div>
        <h2>Choisissez votre statut</h2>
        <small>Choisissez votre statut:</small>
        <br></br>
        <Select placeholder="Choisissez votre statut" option={statutChoix}></Select>
    </div>)
}

export default Statut;