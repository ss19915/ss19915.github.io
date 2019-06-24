import React from 'react';
import { Segment } from '../StyledComponents';
import { Link, Route } from 'react-router-dom';
import { Emotion } from './Blogs';

class BlogsViewer extends React.PureComponent{
    render(){
        const { match } = this.props;
        return(
            <React.Fragment>
            <Route path={`${match.url}/`} exact component={ () => (
                <Segment>
                    <h1>Blogs</h1>
                    <Segment.Group>
                        <Segment>
                            <Link to={`${match.url}/emotion`}>Thinking in emotion.js</Link>
                        </Segment>
                    </Segment.Group>
                </Segment>)
            }/>
            <Route path={`${match.path}/emotion`} component={Emotion}/>
        </React.Fragment>
        );
    };
}

export default BlogsViewer;