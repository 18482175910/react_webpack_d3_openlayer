import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Animation from './containers/animation'
import reducer from './reducers/rootReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/animation.css'
import '../css/front.css'
import '../css/back.css'
import '../css/openlayers.css'
import '../css/popUpTips.css'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Animation/>
    </Provider>,
    document.getElementById('main')
);
