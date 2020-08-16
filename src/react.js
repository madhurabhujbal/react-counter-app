// REACT:

//Question from setting attributes section
//Binding event handlers section
//Raising and handling events section

// 1. React is JS library used for building user interfaces.
// 2. React element consists of:
//     Components (independent, isolated, reusable). React element is set of differnt components. There is atlest one component in React called root Component. There may be child components as well.
//     Component is implemented as a JS class which has a state and a render method. State is data that we want to display when component is rendered. Render method is responsible for describing what UI should look like. Output of render method is React element which is a JS object that represents DOM element in memory. This method maps to DOM element.
// 3. React keeps lightweight representation of DOM in memory called virtual DOM. When state of component is changed, a new  React element is created. React then compares the new element and its children with the previous one, detect the changes and update part of real DOM to be in sync with virtual DOM.
// 4. To make jsx code work (i.e to make xml code in return method to display), code has to be passed through Babel (modern JS compiler). Babel takes jsx code and converts it to plain JS syntax that browser can understand.
// 5. When projects are created with create-react-app, application gets automatically restarted when changes are saved and we dont need to go to browser and refresh the page. This is called 'Hot Module Reloading'.
// 6. For dynamically entering a value in field, it should be wrapped in {}. a valid JS expression inside {} eveluates and returns a value.
// 7. jsx expressions are simple JS objects which can be assigned to const, passed to a function or returned from it. e.g: const x = <h1> title </h1>;
// 8. When rendering a list, each list item should have a unique key which is unique only in that list.
// 9. conditional statement in JS: true && false = false; true && '' = false (empty string is considered false); true && 'Hi' = "Hi" (non-empty stirng is considered true and last operand is returned); true && 'Hi' && 1 = 1 (non-zero number is considered true and last operand is returned)
// 10. 'this' behaves differently in JS than other languages. Depending on how a function is called, 'this' can reference different objects.
// eg1: obj.method(): if a function is called as part of method in an obj, 'this' in method function would return a reference to obj.
//eg2: function(): if function is called as a standalone function without object refernce, then by default, 'this' returns a reference to the window object. But if strict mode is enabled, 'this' would return undefined.
// 11. To change the state of a property, we have to use setState() method for react to know that state of property has to be changed;
// 12. Props include data that we give to a component. Props are read-only input to a component and cannot be changed. If value of props needs to be changed during life-cyle of a component, we have to change it from within state object. On the other hand, state contains data that is local or private to that component so that other components cannot access that state.
// 13. Thumb rule in React: The component that owns a piece of the state, should be the one modifying it.
// A controlled component is child component which does not have its own state. All data it gets is through props from its parent component. Controlled component raises event when data needs to be modified and its parent handles the raised events.
// setState() cannot be called from a constructor. it can only be called when a component is rendered and placed in the DOM.
// Life cycle hooks:
//1. Mount phase (methods are called in below sequence):
//i) constructor() is called only once when object of a class is instantiated and it is right place to initialise properties of a class.
//ii) render() represents react elements that represent virtual DOM. When a component is rendered, all its children are also rendered recursively before mounting in DOM.
//iii) componentDidMount() is called after component is rendered and mounted in DOM and is right place for make AJAX calls to get data from server.
//2. Update phase (When state or props of component changes):
//i) componentDidUpdate() is called after a component is updated i.e state or props is update. With this method, we can decide whether to make an AJAX call to server or not depending on change of props and state object.
//3. Unmount phase
//i) componentWillUnmount() is called just before component is removed from the DOM. Right place to clean timers or listeners before component is removed from DOM to prevent memory leaks.
