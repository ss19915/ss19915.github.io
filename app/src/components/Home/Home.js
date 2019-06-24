import React from 'react';
import { Global, css } from '@emotion/core';
import { Div, Window } from '../StyledComponents/Common';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header'
import BlogsViewer from '../BlogsViewer';

const Home = () => {

    return (
        <Window>
            <Div>
                <Global styles={css({ body: { margin: 0 } })} />
                <BrowserRouter>
                    <Route path='/' component={Header} />
                    <Route path='/' exact component={ () => (
                        <div>
                            Something Awesome is comming.
                        </div>
                    )} />
                    <Route path='/blogs' component={BlogsViewer}/>
                </BrowserRouter>
            </Div>
        </Window>
    );
}

export default Home;