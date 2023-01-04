import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { header } from './Seed';
import ProductFunc from './ProductFunc';

function App() {
  const header1 = header.map((header) => {
    return <ProductFunc
      text={header.text}
      description={header.description}
      order={header.order}
      url={header.url}
      votes={header.votes}
      logoUrl={header.logoUrl} />
  })


  return (
    <div className="App">
      <header className="App-header">
        {header1}
      </header>
    </div>
  );
}

export default App;
