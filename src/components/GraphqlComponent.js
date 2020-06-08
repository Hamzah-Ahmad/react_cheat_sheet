import React from "react";
import Step1 from "../images/graphql-apollo/Step 1.PNG";
import Step2 from "../images/graphql-apollo/Step 2.PNG";
import Step3 from "../images/graphql-apollo/Step 3.PNG";
import Step3B from "../images/graphql-apollo/Step 3B.PNG";
import Step4 from "../images/graphql-apollo/Step 4.PNG";
import Step5 from "../images/graphql-apollo/Step 5.PNG";
import Step6 from "../images/graphql-apollo/Step 6.PNG";
import Step7A from "../images/graphql-apollo/Step 7A.PNG";
import Step7B from "../images/graphql-apollo/Step 7B.PNG";
import Step7C from "../images/graphql-apollo/Step 7C.PNG";
import Step8 from "../images/graphql-apollo/Step 8.PNG";
import Step9 from "../images/graphql-apollo/Step 9.PNG";
import Step11 from "../images/graphql-apollo/Step 11.PNG";
import Step11B from "../images/graphql-apollo/Step 11B.PNG";
import Step12 from "../images/graphql-apollo/Step 12.PNG";
import Step14 from "../images/graphql-apollo/Step 14.PNG";
import Step15 from "../images/graphql-apollo/Step 15.PNG";
import Step16 from "../images/graphql-apollo/Step 16.PNG";
import Step17 from "../images/graphql-apollo/Step 17.PNG";
import Step18 from "../images/graphql-apollo/Step 18.PNG";
import Step19 from "../images/graphql-apollo/Step 19.PNG";
import Step20 from "../images/graphql-apollo/Step 20.PNG";
import Step21 from "../images/graphql-apollo/Step 21.PNG";
import Step21B from "../images/graphql-apollo/Step 21B.PNG";
import Step21C from "../images/graphql-apollo/Step 21C.PNG";
import Step22B from "../images/graphql-apollo/Step 22B.PNG";
import Step22 from "../images/graphql-apollo/Step 22.PNG";
import Step23 from "../images/graphql-apollo/Step 23.PNG";
import Step24 from "../images/graphql-apollo/Step 24.PNG";
import Step24B from "../images/graphql-apollo/Step 24B.PNG";
import Step25A from "../images/graphql-apollo/Step 25A.PNG";
import Step25B from "../images/graphql-apollo/Step 25B.PNG";
import Step25C from "../images/graphql-apollo/Step 25C.PNG";
import Step26 from "../images/graphql-apollo//Step 26.PNG";

const GraphqlComponent = () => {
  return (
    <div>
      <h1 className="display-3">Back End - GraphQL</h1>
      <hr />
      <h3 className="display-4">Step 1</h3>
      <div>
        We set up a simple express server. We also install graphql and
        express-graphql. We import the latter as graphqlHTTP (standard alias,
        can also be called something else). We setup a middleware route that
        goes to /graphql, and we pass the graphqlHTTP variable as an argument
        here. graphqlHTTP takes some options inside an object as arguments,
        which include the schema. We will provide the options in a later step.
      </div>
      <img src={Step1} alt="Step 1" />

      <h3 className="display-4">Step 2</h3>
      <div>
        In this step, we start creating the schema. We first import graphql, and
        then we destructure some types from the graphql variable. We first
        create one of our object types: the BookType. We pass in an object that
        holds the name and fields of the object type. The fields is a function
        which returns an object (notice the round brackets which signifies that
        an an object is being returned, when used with an arrow function). We
        use a function for the field to avoid problems later when referencing
        two different object types.
      </div>
      <img src={Step2} alt="Step 2" />

      <h3 className="display-4">Step 3</h3>
      <div>
        In this step, we create a root query inside our schema file. The root
        query is a GraphQLObjectType. It contains a name, and fields property.
        The fields will hold all the root queries that we will create. Notice
        that the fields property here does not need to be a function, it is a
        plain object. In this step, we created one of the root queries, which is
        the book query (we will use this to query one book). The type here is
        the type of the data that we want to query, which is BookType in this
        case. The next property is the args property. The last property is the
        resolve function, which will hold the code that will get data from a
        database or other source. Then, we will export the schema, by using the
        GraphQLSchema object type. This object type has a query property, and we
        pass our RootQuery variable here. We will import the schema to the main
        server file, and pass it to the graphqlHTTP function. (Also pass in
        graphiql: true, so that we could use the online graphql tool later on).
      </div>
      <img src={Step3} alt="Step 3" />
      <div style={{ marginBottom: "20px" }}></div>
      <img src={Step3B} alt="Step 3B" />

      <h3 className="display-4">Step 4</h3>
      <div>
        In this step, we create some dummy data (for the time being), work on
        our resolve function. We are using the lodash library, to find and
        return the book from the array according to the id provided in the
        arguments (because using lodash is easier than vanilla JS).
      </div>
      <img src={Step4} alt="Step 4" />

      <h3 className="display-4">Step 5</h3>
      <div>
        We test out graphiql in this step. Notice that the query must be in a
        curly bracket, and the argument should be in double quotes (not single)
        if we are using the StringType. If we use the GraphQLID type, then we
        can pass in both with and without quotations
      </div>
      <img src={Step5} alt="Step 5" />

      <h3 className="display-4">Step 6</h3>
      <div>
        In the next step, we create a root query to find the author, similar to
        the book root query
      </div>
      <img src={Step6} alt="Step 6" />

      <h3 className="display-4">Step 7</h3>
      <div>
        In this step, we begin type relations. First, we modified the books
        array to include an author id for each book. Then, in the BookType
        object, we include an author property. The property contains a type
        property, and a resolve function. The parent argument in the resolve
        function will be used to find the author id from the data of the book we
        just queried, and that id will be used to query the author array. An
        example of the query being made in graphiql is provided below
      </div>
      <img src={Step7A} alt="Step 7A" />
      <div style={{ marginBottom: "20px" }}></div>

      <img src={Step7B} alt="Step 7B" />
      <div style={{ marginBottom: "20px" }}></div>

      <img src={Step7C} alt="Step 7C" />

      <h3 className="display-4">Step 8</h3>
      <div>
        In this step, we look at GraphQLList. We make a book property in the
        AUthorType, to return a list of books that the author has writer. The
        GraphQLList type is used with the following syntax: new
        GraphQLList(type). In the resolve function, we are filtering through the
        books array and returning only those books which have an author id equal
        to parent id (parent here is the initial author we just requested).
        Lodash’s filter method is used here to filter the books array.
      </div>
      <img src={Step8} alt="Step 8" />

      <h3 className="display-4">Step 9</h3>
      <div>
        In this step, we create some additional root queries, to get a list of
        the books, or a list of the authors
      </div>
      <img src={Step9} alt="Step 9" />

      <h3 className="display-4">Step 10</h3>
      <div>
        In this step, we deleted dummy data, set up a connection to a mongoDB
        database, and created Author and Book models. The resolve functions in
        our queries will also be changed now, as we have now don’t have any book
        and author arrays dummy data
      </div>

      <h3 className="display-4">Step 11</h3>
      <div>
        In this step, we create a mutation object, and pass it to our exports.
        We need to ensure to include the return before author.save(). Otherwise,
        data will be saved in the database, but will not be returned. I have
        attached an image of what the query should like in the front end.
      </div>
      <img src={Step11} alt="Step 11" />
      <div style={{ marginBottom: "20px" }}></div>

      <img src={Step11B} alt="Step 11" />

      <h3 className="display-4">Step 12</h3>
      <div>
        Next, we update all the resolve functions to work with mongoDB instead
        of local dummy data. Two examples of changes to resolve function are
        shown below
      </div>
      <img src={Step12} alt="Step 12" />

      <div style={{ marginBottom: "40px" }}></div>

      <h1 className="display-3">Front End - Apollo</h1>
      <hr />

      <h3 className="display-4">Step 13</h3>
      <div>
        We now start creating the front end. We create a react app, and then
        make a BookList component. The BookList component initially holds a list
        with a dummy book name. We also install necessary packages in the client
        folder: npm install apollo-boost react-apollo graphql. Next, we setup
        Apollo in our frontend.
      </div>

      <h3 className="display-4">Step 14</h3>
      <div>
        In this step, we setup Apollo for the frontend. We import two packages
        in the App.js: ApolloClient from Apollo-boost, and ApolloProvider from
        ‘react-apollo. We create a client using ApolloClient, and provide a
        property called uri, to which we pass our graphql endpoint. The
        application is wrapped ApolloProvider tags, with client passed in as a
        prop. The Apollo provider enables us to get data from the endpoint, and
        inject it to whatever is inside the tags.
      </div>
      <img src={Step14} alt="Step 14" />

      <h3 className="display-4">Step 15</h3>
      <div>
        We now create some queries in the front end. We use gql (imported from
        Apollo-boost) to create the queries. We also import graphql from
        react-apollo. Next, we pass the component that we are exported as an
        argument to graphql, along with the query (as shown in the image below).
        The response of the query is available in the props, in a data object.
        The data object also contains a “loading” property. There will be two
        logs in the console. The first-time log will have a loading property
        that is true, and once loading is completed, the props will be updated
        which will cause the second update.
      </div>
      <img src={Step15} alt="Step 15" />

      <h3 className="display-4">Step 16</h3>
      <div>
        In this step, we make a component that displays data received from the
        server. I have used the approach of creating a displayBooks function and
        running it inside the main return, to follow the tutorial.
      </div>
      <img src={Step16} alt="Step 16" />

      <h3 className="display-4">Step 17</h3>
      <div>
        In this step, we create an add book component. The complete code is
        shown below
      </div>
      <img src={Step17} alt="Step 17" />

      <h3 className="display-4">Step 18</h3>
      <div>
        In this optional step, we externalize the queries to an external file
      </div>
      <img src={Step18} alt="Step 18" />

      <h3 className="display-4">Step 19</h3>
      <div>
        In this step, we made some basic states for bookName, genreName, and
        authorId, using useState. And made a handleSubmit button which currently
        only logs the states on the console.
      </div>
      <img src={Step19} alt="Step 19" />

      <h3 className="display-4">Step 20</h3>
      <div>
        In this step, we create a mutation query for add book. This query is
        exported from the queries file and imported in the AddBook.js file.
      </div>
      <img src={Step20} alt="Step 20" />

      <h3 className="display-4">Step 21</h3>
      <div>
        Since we are using multiple queries (one mutation and one query in this
        case) in the AddBook file, we need to compose those queries. We are
        using a compose function, that we are getting from redux. (The tutorial
        used a compose method from react-apollo, but that method is unavailable
        now). We also have to provide a name for each query. that we provided
        while binding the queries to the front end in the compose function
      </div>
      <img src={Step21} alt="Step 21" />
      <div>
        In this step, we begin working on making mutations. In the queries file,
        we have to modify the addBook mutation to accept arguments. We
        accomplish this by adding a parenthesis, and then passing in the
        arguments we expect as keys (with a $ sign before the name), and their
        type as a property. We can also add an exclamation mark to ensure that a
        value for the field is required. (If we had used GraphQLID type for the
        author id, it’s type here would be written as ID!).
      </div>
      <img src={Step21B} alt="Step 21" />
      <div>
        And to make the mutation, we will use props.addBookMuttion, as shown
        below{" "}
      </div>
      <img src={Step21C} alt="Step 21" />

      <h3 className="display-4">Step 22</h3>
      <div>
        In this step, we create a mutation query for add book. This query is
        exported from the queries file and imported in the AddBook.js file.
      </div>
      <img src={Step22} alt="Step 22" />
      <div>
        In the frontend, we use props.addBook to use the addBook mutation. We
        have to pass variables to the function. We do this by passing in an
        object as an argument, and thenj making a variables property. The value
        for the property will be an object with the variables. The syntax is
        shown below. Note that while the mutation works, it will not rerender
        the screen. We have to rerun the getBooksQuery, which we will do in a
        later step.
      </div>
      <img src={Step22B} alt="Step 22B" />

      <h3 className="display-4">Step 23</h3>
      <div>
        In this step, we implement a feature to refetch the getBooksQuery, so
        that the component is updated when a new book is added. The way we do
        this is that we pass a refetchQueries property after the variable
        property, in the addBookMutation function. The value of this property is
        an array. Each query that we want to refetch will be passed into this
        array as an object.
      </div>
      <img src={Step23} alt="Step 23" />

      <h3 className="display-4">Step 24</h3>
      <div>
        In this step, we make a component to get one book by id, and also make a
        BookDetail component to show details of that book. Note that in the
        query, we are using the term query, like we use the term mutation. We
        did not have to use the term query before, but since we have to pass
        arguments here, this is why we are explicitly using the term here.
      </div>
      <img src={Step24} alt="Step 24" />
      <div>
        The component is shown below. We will run the query when a book is
        clicked. This will be implemented in the next step.{" "}
      </div>
      <img src={Step24B} alt="Step 24B" />

      <h3 className="display-4">Step 25</h3>
      <div>
        In the next step, we begin work to be able to make single queries to get
        books by ids. We first modify the book list component to listen to
        clicks one each book, and pass the book id to the BookDetails component.{" "}
      </div>
      <img src={Step25A} alt="Step 25A" />
      <div>
        Next, we attach the bookId received as props to the getBookQuery in the
        BookDetails component. We do this by passing an object as a second
        argument alongwith the getBookQuery argument. The second argument is an
        object with an options property. The options property will be a function
        which takes in the props as the parameter. This function will refire
        whenever the props are updated. So whenerv the props update, the
        function will rerun and reset the variable of the query (the variable is
        id in this case).{" "}
      </div>
      <img src={Step25B} alt="Step 25B" />
      <div>
        In the last step, we modify the BookDetails component to use the book’s
        details from the props. Example given below
      </div>
      <img src={Step25C} alt="Step 25C" />

      <h3 className="display-4">Step 26</h3>
      <div>
        Another way to query data and get results to the front end is by using
        the Query tag. The following image has been taken from
        https://www.robinwieruch.de/react-graphql-apollo-tutorial
      </div>
      <img src={Step26} alt="Step 26" />
    </div>
  );
};

export default GraphqlComponent;
