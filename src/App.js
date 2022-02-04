import React, { useState } from 'react';
import { Input, Button, Checkbox, Progress, Form } from "semantic-ui-react";

// import Nav from './component/Nav';
// import Objectif from './component/Objectif';
// import InfoPersonnel from './component/InfoPersonnel';
// import Formation from './component/Formation';
// import Statut from './component/Statut';

import './style.css';

const App = () => {

  const formationChoix = [
    { key: 'bigdata', value: 'bigdata', text: 'Big Data en Finance - 421' },
    { key: 'comms', value: 'comms', text: 'Communications - 700' }
  ];

  const coursBigDataChoix = [
    { key: 'BigData1', value: 'BigData1', text: 'Big Data 1' },
    { key: 'Programmation1', value: 'Programmation1', text: 'Programmation 1' }
  ];

  const coursCommsChoix = [
    { key: 'CommunicationOrg', value: 'CommunicationOrg', text: 'Communication Organisationnelle' },
    { key: 'RelationPub', value: 'RelationPub', text: 'Relation Publique' },
    { key: 'Journalisme', value: 'Journalisme', text: 'Journalisme' }
  ];

  const statutChoix = [
    { key: 'tempsPlein', value: 'tempsPlein', text: 'Temps Plein' },
    { key: 'tempsPartiel', value: 'tempsPartiel', text: 'Temps Partiel' }
  ];

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);
  const [checkBox5, setCheckBox5] = useState(false);
  const [checkBox6, setCheckBox6] = useState(false);
  const [checkBox7, setCheckBox7] = useState(false);

  const [objectifShow, setObjectifShow] = useState(true);

  const [infoPersonnelShow, setInfoPersonnelShow] = useState(false);
  const [age, setAge] = useState(0);

  const [formationShow, setFormationShow] = useState(false);

  const [bigDataCoursShow, setBigDataCoursShow] = useState(false);
  const [coursBigData, setCoursBigData] = useState('');

  const [commsCoursShow, setCommsCoursShow] = useState(false);
  const [coursComms, setCoursComms] = useState('');

  const [statutShow, setStatutShow] = useState(false);

  const [progressBar, setProgressBar] = useState(25);
  const [progressContent, setProgressContent] = useState('Objectifs');

  const [errorMsg, setErrorMsg] = useState(false);
  const [admis, setAdmis] = useState(false);
  const [admisConditionnellement, setAdmisConditionnellement] = useState(false);

  const handleChange = (e) => {
    if (formationChoix[e.target.value].value === "bigdata") {
      setBigDataCoursShow(true);
      setCommsCoursShow(false);
      setCoursBigData('');
      setCoursComms('');
    } else if (formationChoix[e.target.value].value === "comms") {
      setCommsCoursShow(true);
      setBigDataCoursShow(false);
      setCoursComms('');
      setCoursBigData('');
    }
  }

  const onChangeCoursBigData = (e) => {
    setCoursBigData(coursBigDataChoix[e.target.value].value);

  }

  const onChangeCoursComms = (e) => {
    setCoursComms(coursCommsChoix[e.target.value].value);

  }

  const onChangeStatut = (e) => {
    setStatutShow(statutChoix[e.target.value].value);

    if (checkBox1 === false && checkBox2 === false && checkBox3 === false &&
      checkBox4 === false && checkBox5 === false && checkBox6 === false &&
      checkBox7 === true && age < 22 && statutChoix[e.target.value].value === "tempsPartiel") {

      setErrorMsg(true);
      setAdmis(false);
      setAdmisConditionnellement(false);

      // *****************BONUS***************** //
    } else if (((checkBox1 === false && checkBox2 === false && checkBox3 === false &&
      checkBox4 === false && checkBox5 === false && checkBox6 === true && checkBox7 === true) ||
      (checkBox1 === false && checkBox2 === false && checkBox3 === false && checkBox4 === false
        && checkBox6 === false && checkBox5 === true && checkBox7 === true))
      && age < 22 && statutChoix[e.target.value].value === "tempsPartiel") {

      setAdmisConditionnellement(true);
      setErrorMsg(false);
      setAdmis(true);
    } else {

      setAdmis(true);
      setAdmisConditionnellement(false);
      setErrorMsg(false);
    }
  }

  const onClickFinish = () => {
    alert("Merci d'avoir utiliser nos services d'inscription en ligne.");
    setCheckBox1(false);
    setCheckBox2(false);
    setCheckBox3(false);
    setCheckBox4(false);
    setCheckBox5(false);
    setCheckBox6(false);
    setCheckBox7(false);
    setAge(0);
    setCoursBigData('');
    setCoursComms('');
    setErrorMsg(false);
    setAdmis(false);
    setAdmisConditionnellement(false);
    setProgressBar(25);
    setProgressContent('Objectifs');

    setStatutShow(false);
    setObjectifShow(true);
  }


  return (

    <div className='App'>
      <Form>
        <Progress percent={progressBar} size='small' active color="blue" content={progressContent} />
        <br />
        {objectifShow ?

          <>
            <h2>Quelles sont vos objectifs à travers cette formation?</h2>
            <br />
            <div>Choisir ce qui s'applique:</div>
            <div className="checkbox"><Checkbox label=' Acquérir des nouvelles compétences' onClick={() => setCheckBox1(!checkBox1)} /></div>
            <div className="checkbox"><Checkbox label=' Consolider des compétences' onClick={() => setCheckBox2(!checkBox2)} /></div>
            <div className="checkbox"><Checkbox label=' Apprendre la théorie' onClick={() => setCheckBox3(!checkBox3)} /></div>
            <div className="checkbox"><Checkbox label=' Améliorer sa pratique' onClick={() => setCheckBox4(!checkBox4)} /></div>
            <div className="checkbox"><Checkbox label=' Améliorer situations professionnelle' onClick={() => setCheckBox5(!checkBox5)} /></div>
            <div className="checkbox"><Checkbox label=' Trouver un travail' onClick={() => setCheckBox6(!checkBox6)} /></div>
            <div className="checkbox"><Checkbox label=' Lancer son entreprise' onClick={() => setCheckBox7(!checkBox7)} /></div>
            <br />
            <div className="center">{infoPersonnelShow ? undefined : <Button disabled={!checkBox1 && !checkBox2 && !checkBox3 && !checkBox4 && !checkBox5 && !checkBox6 && !checkBox7} onClick={() => (setInfoPersonnelShow(true), setObjectifShow(false), setProgressBar(50), setProgressContent('Informations Personnelles'))} content="Continue" />}</div>

          </> : undefined}

        {infoPersonnelShow ?

          <>
            <h2>Quel est votre âge?</h2>
            <small>Entrez votre âge:</small>
            <br />
            <Input type="number" onChange={e => setAge(e.target.value)} />
            <br /><br />
            <div className="center">{formationShow ? undefined : <Button disabled={age <= 0} onClick={() => (setFormationShow(true), setInfoPersonnelShow(false), setProgressBar(75), setProgressContent('Formations'))} content="Continue" />}</div>

          </> : undefined}

        {formationShow ?

          <>
            <h2>Choisissez la formation</h2>
            <select onChange={e => handleChange(e)}>
              <option hidden>Choissisez la formation</option>
              {formationChoix.map((option, key) => <option key={key} value={key}>{option.text}</option>)}
            </select>
            <br />
            {bigDataCoursShow ?
              <>
                <h3>Choisissez le cours désiré</h3>
                <select onChange={e => onChangeCoursBigData(e)} >
                  <option hidden>Choissisez le cours</option>
                  {coursBigDataChoix.map((option, key) => <option key={key} value={key}>{option.text}</option>)}
                </select>
              </> : undefined}

            {commsCoursShow ?
              <>
                <h3>Choisissez le cours désiré</h3>
                <select onChange={e => onChangeCoursComms(e)}>
                  <option hidden>Choissisez le cours</option>
                  {coursCommsChoix.map((option, key) => <option key={key} value={key}>{option.text}</option>)}
                </select>
              </> : undefined}
            <br /><br />
            <div className="center">{statutShow ? undefined : <Button disabled={coursBigData === '' && coursComms === ''} onClick={() => (setStatutShow(true), setFormationShow(false), setProgressBar(100), setProgressContent('Statut/Régime'))} content="Continue" />}</div>

          </> : undefined}

        {statutShow ?

          <>
            <h2>Choisissez votre statut</h2>
            <small>Choisissez votre statut:</small>
            <br />
            <select onChange={e => onChangeStatut(e)}>
              <option hidden>Choissisez le statut</option>
              {statutChoix.map((option, key) => <option key={key} value={key}>{option.text}</option>)}
            </select>
            <br /><br />

            {errorMsg ?

              <div className="center">Nous regrettons de vous informer que vous n'êtes pas admissible à cette formation.
                <Button onClick={onClickFinish} content="Refusé" /></div>
              : undefined}

            {admis ? admisConditionnellement ?
              <div className="center"> Vous êtes admis conditionnellement à cette formation.
                <Button onClick={onClickFinish} content="Admis" /></div> : <div className="center">Bravo, vous êtes admis!
                <Button onClick={onClickFinish} content="Admis" /></div>
              : undefined}

          </> : undefined}
      </Form>
    </div>

  );
}

export default App;
