import React from "react";
import basicRoutingImg from "../images/react-router-img/basicRouting.png";
import LinkProps from "../images/react-router-img/PassPropsWithLink.png";
import AccessLinkProps from "../images/react-router-img/AccessLinkProps.PNG";
import RouteProps from "../images/react-router-img/PassPropsWithRoute.PNG";
import ProtectedRoutes from "../images/react-router-img/ProtectedRoutes.png";
import UsingProtectedRoutes from "../images/react-router-img/UsingProtectedRoutes.png";
import ProgrammaticRedirect from "../images/react-router-img/ProgrammaticRedirect.PNG";
import RouteTagForRedirect from "../images/react-router-img/RouteTagForRedirect.PNG";
import WithRouter from "../images/react-router-img/WithRouter.PNG";

const RouterComponent = () => {
  return (
    <div>
      <div>
        <h1 className="display-3">React Router</h1>
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Basic Routing</h3>
        <div>
          The 'Link' tag needs to be imported from react-router-dom. That is
          missing from the picture below.
        </div>
        <img src={basicRoutingImg} alt="basic routing img" />
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">Pass Props To Link Component</h3>
        <div>
          Data can be passed from a link component throught to the new route
          being rendered by using the following syntax. The pathname property is
          the path of the link. Anything we pass in the state property will be
          accessible inside the component being rendered.
        </div>
        <img src={LinkProps} alt="Passing Props With Link" className="mb-3" />
        <div>
          The component that is being rendered for that route would be able to
          access that data by accessing props.location.state.
        </div>
        <img src={AccessLinkProps} alt="Accessing link props" />
        <hr />
      </div>
      <div className="heading">
        <h3 className="display-4">
          Pass props to a component rendered by Router
        </h3>
        <div>
          The following syntax is used to pass props to a component being
          rendered by React Router. The 'props' being passed as the function
          argument are the route props which are passed into a component that is
          rendered by React Router (speciifiaclly: location, mathc, and
          history). The function of the render attribute is that it takes in an
          inline function that renders the component, and passes down the route
          props as well as any props we specify (isAuthed, in this case).
        </div>
        <img src={RouteProps} alt="Passing Props With Link" />
        <hr />
      </div>
      <div className="heading" style={{ marginBottom: "40px" }}>
        <h3 className="display-4">Programmatic Redirect</h3>
        <div>
          The following syntax can be used to programmatically redirect a user
          to a specific URL.
          <br />
        </div>
        <img
          src={ProgrammaticRedirect}
          alt="Programmatic Redirect"
          className="mb-3"
        />
        <div>
          The props object contains the "history" information because the React
          Router applies these properties to any components in the Route tag.
        </div>
        <img
          src={RouteTagForRedirect}
          alt="Route Tag For Redirect"
          className="mb-3"
        />
        <div>
          We can still pass this information to a component's props, even if the
          component is not passed in a Route tag. To do this, we wrap the
          component's export with a Higher Order Component called "withRouter"
          which is exported from "react-router-dom"
        </div>
        <img src={WithRouter} alt="With Router HOC" />
        <hr />
      </div>
      <div className="heading" style={{ marginBottom: "60px" }}>
        <h3 className="display-4">Protected Routes</h3>
        <div>
          We are destructuring the props sent into this component. We create an
          alias of the "component" attribute and named it Component (capital C)
          because we are going to use this component as a react component, and
          those should start with a capital letter. "...rest" and "...props"
          syntax being used below is simply the Javascript spread operator.
          However, as it is being used, it is sometimes referred to as react
          ...props syntax (more info can be found at
          https://www.robinwieruch.de/react-pass-props-to-component). The "rest"
          contains the rest of the props passed in the component, while the
          "props" argument being passed into the render attribute are the props
          that are passed into a component that is rendered by React Router
          (speciifiaclly: location, mathc, and history). The render function
          used below is Router's render attribute (which we used when passing
          props to components being rendered by Router in the heading above).{" "}
          <br />
          If the user is authenticated, they are routed to the protected
          component. Otherwise, they are redirected to a login page.
        </div>
        <img src={ProtectedRoutes} alt="Protected Rotues" className="mb-3" />
        <div>
          The protected route component can be used in the following way
        </div>
        <img src={UsingProtectedRoutes} alt="Using Protected Routes" />
      </div>
    </div>
  );
};

export default RouterComponent;
