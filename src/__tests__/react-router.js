import React from 'react'
import {withRouter} from 'react-router'
import {Link, Route, Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render as rtlRender, screen, fireEvent} from '@testing-library/react'
import App from "../App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from '../reducers/index'
import {BrowserRouter} from "react-router-dom";

const initialReducerState = {}


function renderWithRedux(
    ui,
    {
        initialState = initialReducerState,
        store = createStore(rootReducer, initialState),
        ...renderOptions
    } = {},
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}


// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
    ui,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
    return {
        ...rtlRender(<Router history={history}>{ui}</Router>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}
function renderBigApp() {
    return <BrowserRouter>
        {renderWithRouter(renderWithRedux(<App />))}
    </BrowserRouter>
}

test('full app rendering/navigating', () => {
    const {container} = renderBigApp()
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(container.innerHTML).toMatch('This is the home page')
    const leftClick = {button: 0}
    fireEvent.click(screen.getByText(/products/i), leftClick)
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(container.innerHTML).toMatch('Product page')
})

/*
test('rendering a component that uses withRouter', () => {
    const route = '/some-route'
    renderWithRouter(<App />, {route})
    expect(screen.getByTestId('location-display').textContent).toBe(route)
})*/
