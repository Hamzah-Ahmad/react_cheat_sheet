import React from "react";
import createStore from "../images/redux-img/CreateStore.png";
import createReducer from "../images/redux-img/CreateRootReducer.png";
import passReducerToStore from "../images/redux-img/PassReducerToStore.png";
import wrapComponentsInProvider from "../images/redux-img/WrapComponentsInProvider.PNG";
import wrapComponentsInConnect from "../images/redux-img/WrappingComponentInConnectHOC.png";
import mapStateToProps from "../images/redux-img/MapStatetoProps.png";
import accessStateVariables from "../images/redux-img/AccessingStoreVarianles.png";
import dispatchActionsI from "../images/redux-img/DispatchingActionsFromComponentOne.png";
import dispatchActionsII from "../images/redux-img/DispatchingActionsFromComponentTwo.png";
import actions from "../images/redux-img/Actions.png";
import reducerSpecific from "../images/redux-img/ReducerSpecific.PNG";
import mapDispatchToProps from "../images/redux-img/MapDispatchToProps.png";
import usingMapDispatchToProps from "../images/redux-img/UsingMapDispatchToProps.png";
import combineReducer from "../images/redux-img/Multiple Reducers/CombineReducer.png";
import mapMultipleReducers from "../images/redux-img/Multiple Reducers/MapWithMultipleReducers.png";
import setUpThunk from "../images/redux-img/Redux Thunk/SetUpReduxThunk.png";
import dispatchActionsUsingThunk from "../images/redux-img/Redux Thunk/DispatchingActionsUsingThunk.png";
import dispatchActionsUsingThunkExample from "../images/redux-img/Redux Thunk/DispatchingWithThunkExample.png";
import fetchingDataFromAPI from "../images/redux-img/Redux Thunk/FetchingDataFromAPI.png";

const ReduxComponent = () => {
  return (
    <div>
      <div>
        <h1 className="display-3">Redux</h1>
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Create Store</h3>
        The application's data store is created using the createStore funciton,
        imported from 'redux'.
        <img src={createStore} alt="Create Store" />
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Create Root Redcuer</h3>
        <div>
          The application store requires a single reducer. Ther educer is
          commonly called 'root reducer'.
        </div>
        <img src={createReducer} alt="Create Reducer" className="mb-3" />
        <div>The root reducer is passed to the createStore function.</div>
        <img src={passReducerToStore} alt="Pass Reducer to Store" />
      </div>
      <hr />

      <div className="heading">
        <h3 className="display-4">Wrap Components In provider Tags</h3>
        <div>
          Redux is hooked up to React by using the "Provider" component, and the
          "connect" function.
        </div>
        <div>
          By wrapping the entire app with the Provider component, every
          component in the app tree will be able to access the Redux store if it
          wants to. The store is passed as a prop to the Provider component. In
          the example below, Counter, and children of Countercan now access the
          Redux store.
        </div>
        <img
          src={wrapComponentsInProvider}
          alt="Wrapping Components In Provider tags"
        />
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Wrap Components Export In Connect</h3>
        <div>
          The "connect" higher order component needs to wrap the component that
          wants to access the application store.{" "}
        </div>
        <img src={wrapComponentsInConnect} alt="Wrap Components in Connect" />
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Map State To Props Function</h3>
        <div>
          "connect" passes the entire state to your mapStateToProps functionThe
          object you return from mapStateToProps gets fed into your component as
          props
        </div>
        <img src={mapStateToProps} alt="Map State To Props Function" />
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Accessing Store Data</h3>
        <div>
          Now the state can access the data in the application store (which was
          returned by the mapStateToProps function) through its props.
        </div>
        <img src={accessStateVariables} alt="Accessing State Variables" />
        <hr />
      </div>

      <div className="heading">
        <h4 className="display-4">Using Actions</h4>
        <div>
          An action is a plain Javascript object with a property called "type".
          An action object describes a change you want to make (like “please
          increment the counter”) or an event that happenend (like “the request
          to the server failed with this error”). For example, for the reducer
          shown below, an action of type "INCREMENT" will call the reducer, and
          the reducer will perform the function specified for action type
          "INCREMENT" (i.e. increase the count by 1).
          <img src={reducerSpecific} alt="Example Reducer" className="mb-3" />
          <hr />
        </div>

        <h3 className="display-4">Dispatching Actions</h3>
        <div>
          In order to make an action DO something, you need to dispatch it. The
          store we created earlier has a built-in function called dispatch. Call
          it with an action, and Redux will call your reducer with that action
          (and then replace the state with whatever your reducer returned). The
          "connect" higher order component, in addition to passing in the
          (mapped) state, also passes in the dispatch function from the store.
          To dispatch an action from inside the component, we can call
          props.dispatch with an action.
        </div>
        <img
          src={dispatchActionsI}
          alt="Dispatching Actions"
          className="mb-3"
        />
        <div>
          Instead of writing action objects manually, we can use action
          crerators instead. An action creator in Redux terms is a function that
          returns an action object.
        </div>
        <img src={actions} alt="Action Files" className="mb-3" />
        <img
          src={dispatchActionsII}
          alt="Dispatching actions using actionc reators"
          className="mb-3"
        />
        <h2>Map dispatch To Props</h2>
        <div>
          A "mapDispatchToProps" object provides a further level of abstraction.
          By writing a mapDispatchToProps object and passing it to connect when
          you wrap your component, you’ll receive those action creators as
          callable props. This isn't a a necessary step, but it cleans up your
          code as you don't have to type this.props.dispatch all the time.
        </div>
        <img
          src={mapDispatchToProps}
          alt="Map Dispatch To Props function"
          className="mb-3"
        />
        <img
          src={usingMapDispatchToProps}
          alt="Using map dispatch to props"
          className="mb-3"
        />
        <hr />
      </div>

      <div>
        <h1 className="display-3">Multiple Reducers</h1>
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Combine Reducer</h3>
        <div>
          Large scale applications require more than one reducer. Multiple
          reducers can be combined into one single reducer using the following
          syntax.
        </div>
        <img src={combineReducer} alt="Combine Reducer" />
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Map multiple reducers</h3>
        <div>
          States from multiple reducers can be mapped as props into a component
          using the following syntax.
        </div>
        <img src={mapMultipleReducers} alt="Map Multiple Reducers" />
        <hr />
      </div>

      <div>
        <h1 className="display-3">Redux Thunk</h1>
        <hr />
      </div>
      <div>
        Redux Thunk is a middleware that lets you call action creators that
        return a function instead of an action object. That function receives
        the store's dispatch method, which is then used to dispatch regular
        synchronous actions inside the body of the function once the
        asynchronous operations have completed. With a plain basic Redux store,
        you can only do simple synchronous updates by dispatching an action.
        Redux allows you to write async logic that interacts with the store.
      </div>
      <div className="heading">
        <h3 className="display-4">Setting Up redux Thunk</h3>
        <div>
          To install redux-thunk with NPM or Yarn, run npm install --save
          redux-thunk. Then, in index.js (or wherever you create your store),
          import redux-thunk and apply it to the store with Redux’s
          applyMiddleware function.
        </div>
        <img src={setUpThunk} alt="Setting Up Thunk" />
        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Dispatching Actions With Thunk</h3>
        <div>
          The function you return from your action creator will be passed 2
          arguments: the dispatch function, and getState. Most of the time
          you’ll only need dispatch, but sometimes you want to do something
          conditionally, based on some value in the Redux state. In that case,
          call getState() and you’ll have the entire state to read as needed. A
          trivial example is also given below to help explain the syntax of
          thunk.
        </div>
        <img src={dispatchActionsUsingThunk} alt="Dispatching With Thunk" />
        <h3>Example</h3>
        <img
          src={dispatchActionsUsingThunkExample}
          alt="Example Of Dispatching With Thunk"
        />

        <hr />
      </div>

      <div className="heading">
        <h3 className="display-4">Fetching Data From API</h3>
        <div>
          The following example demonstrates how to fetch data from an api using
          thunk.
        </div>
        <img src={fetchingDataFromAPI} alt="Feetching Data from API" />
        <hr />
      </div>
    </div>
  );
};

export default ReduxComponent;
