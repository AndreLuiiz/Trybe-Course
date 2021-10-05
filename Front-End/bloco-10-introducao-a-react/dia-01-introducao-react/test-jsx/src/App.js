import './App.css';

const testJSX = 'World';
function Element() {
  return <h1>Hello, {testJSX}</h1>;
}

function App() {
  return (
    <div className="App">
      <Element></Element>
    </div>
  );
}

export default App;
