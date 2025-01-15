// create element is special way of creating element
const headingEle = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "hello world from react"
);

// headingele is a normal JS object react element
// creating a root
const rootEle = ReactDOM.createRoot(document.getElementById("root"));

//   render this heading inside root
// this render is responsible to convert this heading JS object above to the heading element and put in DOM
 rootEle.render(headingEle);

// wee will craete a tough react ele now

{
  /* <div id="mainContainer">
  <div id="childContainer">
    <h1>hello 1</h1>
    <h1>hello 2</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "mainContainer" },
  //   child
  React.createElement(
    "div",
    { id: "childContainer" },
    // if 2 siblings create a array
    [
      React.createElement("h1", {}, "hello 1"),
      React.createElement("h1", {}, "hello 2"),
    ]
  )
);
rootEle.render(parent);
