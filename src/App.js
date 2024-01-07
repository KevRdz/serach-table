import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from '../src/data/data'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
