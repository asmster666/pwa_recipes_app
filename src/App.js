import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Welcome, Recipe, Meals, Categories } from './pages';

function App() {
  return (
    <Router>
      <div className={'app'}>
        <Routes>
          <Route path={'/'} element={<Welcome />} />
          <Route path={':name/:meal/recipe'} element={<Recipe />} />
          <Route path={':name/meals'} element={<Meals />} />
          <Route path={'/categories'} element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
