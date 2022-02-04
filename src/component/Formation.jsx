import React from 'react';
import { Select } from 'semantic-ui-react';

const Formation = () => {

    const formationChoix = [
        { key: 'bigdata', value: 'Big Data en Finance - 421', text: 'Big Data en Finance - 421' },
        { key: 'comms', value: 'Communications - 700', text: 'Communications - 700' }
    ]

    return (<div>
        <h2>Choisissez la formation</h2>
        <Select placeholder='Choissisez la formation' options={formationChoix} />
    </div>)
}

export default Formation;