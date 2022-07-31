import Credits from './components/Credits'
import { BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import ElementDetail from './components/ElementDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen px-8">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":elementId" element={<ElementDetail />} />
        </Routes>
        <Credits></Credits>
      </div>
    </BrowserRouter>
  );
}

export default App;
