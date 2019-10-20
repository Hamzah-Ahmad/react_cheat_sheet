import React from "react";
import component from "../images/basics/component.png";
import FunctionalComponent from "../images/basics/FunctionalCompoonent.PNG";
import Conditionals from "../images/basics/Conditionals.PNG";
import DisplayingLists from "../images/basics/DisplayingLists.PNG";
import PassingProps from "../images/basics/PassingProps.PNG";
import Styling from "../images/basics/StylingInJSX.PNG";
import UseState from "../images/basics/UseState.PNG";
import UseEffect from "../images/basics/UseEffect.PNG";
import UseEffectOnFirstRender from "../images/basics/UseEffectOnFirstRender.PNG";
import UseEffectForSpecificData from "../images/basics/UseEffectForSpecificData.PNG";
import State from "../images/basics/State.PNG";
import SetState from "../images/basics/SetState.PNG";
const BasicsComponent = () => {
  return (
    <div>
      <div>
        <h1 className="display-3">Basic Fundamentals</h1>
        <hr />
      </div>
      <div>
        <h3 className="display-4">Class Component</h3>
        <img src={component} alt="Component" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">Functional Component</h3>
        <img
          src={FunctionalComponent}
          alt="Functional Component"
          className="mb-3"
        />
        <hr />
      </div>
      <div>
        <h3 className="display-4">Conditionals</h3>
        <img src={Conditionals} alt="Conditionals" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">Displaying Lists</h3>
        <img src={DisplayingLists} alt="Displaying Lists" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">Passing props to components</h3>
        <img src={PassingProps} alt="Passing Props" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">Styling In JSX</h3>
        <img src={Styling} alt="Styling In JSX" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">State</h3>
        <div>
          React components has a built-in state object. The state object is
          where you store property values that belongs to the component.
        </div>
        <img src={State} alt="State" className="mb-3" />

        <hr />
      </div>
      <div>
        <h3 className="display-4">Setting State</h3>
        <div>
          SetState can be used to update the component state. setState takes an
          object as an argument. Inside the object, we pass in the property of
          the state which we want to change. We don't have to pass in all of the
          properties, only the ones we want to update.
        </div>
        <img src={SetState} alt="SetState" className="mb-3" />

        <hr />
      </div>
      <div>
        <h3 className="display-4">UseState</h3>
        <div>
          useState is part of react hooks. It is an alternative method of
          managing state.
        </div>
        <img src={UseState} alt="UseState" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">UseEffect</h3>
        <div>useEffect runs each time the component rerenders.</div>
        <img src={UseEffect} alt="UseEffect" className="mb-3" />
        <hr />
      </div>
      <div>
        <h3 className="display-4">UseEffect only on initial render</h3>
        <div>
          We can provide an empty array as the second argument to make it so
          that useEffect runs on the component's initial render only.
        </div>
        <img
          src={UseEffectOnFirstRender}
          alt="UseEffect only on initial render"
          className="mb-3"
        />
        <hr />
      </div>
      <div>
        <h3 className="display-4">
          UseEffect to run when specfic state data changes
        </h3>
        <div>
          We can provide an array with specific state data to make sure that
          useEffect runs only when the state data provided in the array is
          updated
        </div>
        <img src={UseEffectForSpecificData} alt="UseEffect" className="mb-3" />
        <hr />
      </div>
    </div>
  );
};

export default BasicsComponent;
