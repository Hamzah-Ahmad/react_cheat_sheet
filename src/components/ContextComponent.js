import React from "react";
import createContext from "../images/context-img/CreateContext.png";
import providerFunction from "../images/context-img/ProviderFunction.png";
import contextProvider from "../images/context-img/Context_Provider.png";
import wrapComponents from "../images/context-img/WrapInProvider.PNG";
import componentContext from "../images/context-img/UsingContextInComponents.png";

const ContextComponent = () => {
  return (
    <div>
      <div>
        <h1 className="display-3">Context API</h1>
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Create Context</h3>
        <div>
          A context file holds the state and the provider funciton which
          provides the state to other components. The context is created using
          the createContext funciton.
        </div>
        <img src={createContext} alt="Create Context" />
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Create Provider Function</h3>
        <div>
          The context file also exports a provider function. This function
          stores the component's state.
        </div>
        <img src={providerFunction} alt="Create Context" />
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Context.Provider</h3>
        <div>
          Context.Provider makes the component state available to all the
          components that are passed between the Context.Provider tags.
          Props.children refers to all the components passed in between the
          Provider tags.
        </div>
        <img src={contextProvider} alt="Create Context" />
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Wrap Components In Provider</h3>
        <div>
          This is an example of how to pass child components to the providers.
          BookContextProvider is imported form the BookContext.js file. The
          BookList and NewBook components will be able to access the state in
          the BookContext files.
        </div>
        <img src={wrapComponents} alt="Create Context" />
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Using Context In Components</h3>
        <div>
          The following example demonstrates how to use context state variables
          inside child components.
        </div>
        <img src={componentContext} alt="Create Context" />
        <hr />
      </div>
    </div>
  );
};

export default ContextComponent;
