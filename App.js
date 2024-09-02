// const heading=React.createElement("h1",{},"Hello World from React!");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:'child1'},
        [React.createElement("h1",{},"hii iam  H1!"),React.createElement('h2',{},"hii iam h2!")]
    ),React.createElement('div',{id:'child2'},
        [React.createElement('h1',{},"child2 h1"),React.createElement('h2',{},'child2 h2')]
)]
);

const root1=ReactDOM.createRoot(document.getElementById('root'));
root1.render(parent);