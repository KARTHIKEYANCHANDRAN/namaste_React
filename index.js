

// const heading1 = React.createElement(
//     "h1",
//     {id:"heading", class:"sample"},              // attribute
//     "Hello World from react!"   //children
//     );
// // heading1 will be an object check through console  ; console.log(heading1)


// const parent = React.createElement(
//     "div",
//     {id:"parent1"},
//     [React.createElement(
//         "h1",
//         {id:"child1"},
//         "Hello world from react child div inside div" ),
//      React.createElement(
//             "h1",
//             {id:"child2"},
//             "Hello world from react child2 div inside div"  
//     )
//      ]); 

     const parent = [React.createElement(
        "div",
        {id:"parent1"},
        [React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"Hello world from react child1 div inside div" ),
             React.createElement("h1",{},"Hello world from react child2 div inside div" )
            ]) , 
         React.createElement("div",{id:"child2"},
         [React.createElement("h1",{},"Hello world from react child1 div inside div" ),
          React.createElement("h1",{},"Hello world from react child2 div inside div" )
          ])
        ]
     ) , React.createElement(
        "div",
        {id:"parent2"}, [React.createElement("div",{id:"child3"},
        [React.createElement("h1",{},"Hello world from react child3 div inside div" ),
         React.createElement("h1",{},"Hello world from react child4 div inside div" )
        ]) , 
     React.createElement("div",{id:"child4"},
     [React.createElement("h1",{},"Hello world from react child3 div inside div" ),
      React.createElement("h1",{},"Hello world from react child4 div inside div" )
      ])
    ])];


const root1 = ReactDOM.createRoot(document.getElementById("react"));

// root1.render(heading1);
root1.render(parent);