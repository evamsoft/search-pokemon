# PokemonSearcher Component
The PokemonSearcher component is a React component that allows users to search for Pokemon information. It provides a search box where users can enter the name of a Pokemon, and it displays the corresponding Pokemon information based on the search result.

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Props
The PokemonSearcher component does not accept any props.

## Usage

### To use the PokemonSearcher component, follow these steps:
1. Import the PokemonSearcher component from the appropriate file.
2. Render the PokemonSearcher component in your React application, providing any necessary props.

```jsx
import React from 'react';
import PokemonSearcher from './components/PokemonSearcher';

function App() {
  return (
    <div>
      <h1>Welcome to the Pokemon Searcher!</h1>
      <PokemonSearcher />
    </div>
  );
}

export default App;
```

## Functionality
The PokemonSearcher component provides the following functionality:

### Search
The PokemonSearcher component includes a search box where users can enter the name of a Pokemon they want to search for. The search box allows users to input the name and triggers the search when the user submits the form.

### Retrieve Pokemon Information
Once the user clicks search, the PokemonSearcher component uses the useFetchPokemon hook to fetch the Pokemon information based on the entered name. It passes the entered name to the hook and receives the state of the fetch operation.

### Display Pokemon Information
Based on the state of the fetch operation, the PokemonSearcher component renders different views to display the Pokemon information:

#### Pending View
When the fetch operation is pending, a loading view is displayed to indicate that the data is being fetched.

#### Success View
When the fetch operation is successful, the Pokemon information is displayed using the SuccessPokemonView component.

#### Error View
When the fetch operation encounters an error, an error view is displayed to inform the user about the error.


## Detailed Usage Example
Here's an example of how to use the PokemonSearcher component in a React application:

In this example, the PokemonSearcher component is rendered within the App component, allowing users to search for Pokemon information.


```jsx
import React from 'react';
import PokemonSearcher from './components/PokemonSearcher';

function App() {
  return (
    <div>
      <h1>Welcome to the Pokemon Searcher!</h1>
      <PokemonSearcher />
    </div>
  );
}

export default App;
```

## Detailed Output Examples

### Searching for `"Pikachu"`
When the user searches for "Pikachu", the PokemonSearcher component will display the corresponding Pokemon information for Pikachu.

### Searching for `"Mew"`
When the user searches for "Mew", the PokemonSearcher component will display the corresponding Pokemon information for Mew.

### Searching for `"Charizard"`
When the user searches for "Charizard", the PokemonSearcher component will display the corresponding Pokemon information for Charizard.

Note: The specific output and formatting of the Pokemon information may vary based on the implementation of the SuccessPokemonView component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.