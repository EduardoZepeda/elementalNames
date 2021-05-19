import SearchInput from './components/SearchInput'

function App() {
  return (
    <>
        <div className="App min-h-1/2 text-gray-800 px-2 flex justify-center items-end">
          <header className="App-header mb-8">
          <h1 className="text-6xl mb-4">Elemental names</h1>
          <p>This web app will use chemical elements to form words. What word should we use?</p>
          </header>
        </div>
        <SearchInput></SearchInput>
    </>
  );
}

export default App;
