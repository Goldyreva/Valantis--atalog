import './App.css';
import ProductsPage from "./pages/ProductsPage";
import {useEffect} from "react";
import {useActions} from "./components/hooks/useActions";
import {getIds} from "./api/products/products";


function App() {
  const {setProductIds, setPagesCount} = useActions()

  useEffect(() => {
      const fetchData = async () => {
       let ids = await getIds()
        setProductIds(ids)
        setPagesCount(Math.ceil(ids.length/50))
      }

      fetchData()
  }, [])

  return (
    <div className="App">
      <ProductsPage/>
    </div>
  );
}

export default App;
