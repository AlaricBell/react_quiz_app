# Trivia Challenge

### Set up

after downloading the project use:

```bash
$ npm install
```

Start the project in development environment:

```bash
$ npm start
```

Run unit tests for project:

```bash
$ npm test
```

### Dependencies

The project was made with create-react-app

- [axios](https://axios-http.com/)
- [redux](https://redux.js.org/introduction/installation)
- [redux-toolkit](https://redux.js.org/introduction/installation)
- [react-redux](https://react-redux.js.org/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom)
- [font-awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

### Description

The project was created with create-react-app, typescript and Sass.

The workflow was structured in a way that it can be easily followed by looking at the commits.

Considering the size of the project I did not choose to use **Bootstrap** because that would affect the the amount of **Sass** code I can write and it's still not too much.

While building the components I paid attention to implement them a reuseable, scalable way, considering their use in a bigger application so they can be used later on. Some might find it unneccessary to create components for simple paragraph but considering the changes we might want to implement in design it will be a lot more convinient to change a single component.

I decided to use the **redux toolkit** package for defining the redux structure. It implements many useful tools like thunk by default and allows us to create more readable code. I personally decided not to use the .createSlice function, simply because I like separating the actions from the reducer.

One problem with my approach might be that I considered only one state (store) for the application neccessary, so I did not define root reducers etc. for scalability. That might get fixed in the near future.

I used **Jest** for unit testing, mostly focusing on render, component-user interaction, and state management.
