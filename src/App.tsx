import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, ValuesType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';


// function declaration
function App() {
    // что-то полезное
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<ValuesType>(3)


    // обязана вернуть JSX
    return (
        <div className={'App'}>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <UncontrolledAccordion titleValue={'Menu'}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<UncontrolledRating/>*/}

            <OnOff on={false}/>

            <UncontrolledOnOff/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle rendering')
//     return <h1>{props.title}</h1>
// }

export default App;
