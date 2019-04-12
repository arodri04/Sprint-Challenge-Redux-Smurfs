1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    we use concat to extend, or push, for each also doesnt mutate.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions do the things for the server, reducers take what actions tell them and change the state, store is like the super state that holds things.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
    bridges the store to the app
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    basically thunk is a function that returns a function and its cool because were able to use it to send a lot of information to the action creators
1.  Which `react-redux` method links up our `components` with our `redux store`?
    I think we use connect?
