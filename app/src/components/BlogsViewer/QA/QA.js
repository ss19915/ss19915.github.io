import React from 'react';
import { Segment } from '../../StyledComponents';
import { Button } from '../../StyledComponents/Semantic';

class Answer extends React.PureComponent{
    state = {
        showAnswer: false,
    };

    showAnswerToggle = () => this.setState( (prevState) => ({showAnswer: !prevState.showAnswer}));

    render(){
        return(
            <React.Fragment>
                {!this.state.showAnswer && <Button onClick={this.showAnswerToggle}>Show Answer</Button>}
                {this.state.showAnswer &&
                    <Segment.Group>
                        <Segment basic>
                            {this.props.children}
                        </Segment>
                    </Segment.Group>
                }
            </React.Fragment>
        );
    }
};


const Question = (props) => {
    return(
        <Segment basic>
            {props.children}
        </Segment>
    );
};

const QA = (props) => {
    
    return(
        <Segment>
            {props.children}
        </Segment>
    );
};

QA.Answer = Answer;
QA.Question= Question;

export default QA;