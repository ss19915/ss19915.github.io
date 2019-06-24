import React from 'react';
import { Segment } from '../../../StyledComponents';
import QA from '../../QA';

const Emotion = () => {

    return(
        <Segment>
            <h1>Thinking in Emotion js</h1>
            <Segment basic>
                Emotion is a CSS-in-js library.
            </Segment>
            <QA>
                <QA.Question>
                    <h3>What is CSS-in-JS ?</h3>
                </QA.Question>
                <QA.Answer>
                    The mechnism of injecting CSS using javascript(JS) is called CSS-in-JS.
                </QA.Answer>
            </QA>
        </Segment>
    );
}

export default Emotion;