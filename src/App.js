import './App.css';
import ProductsPage from "./pages/ProductsPage";
import {useEffect} from "react";
import {useActions} from "./components/hooks/useActions";
import {getBrands, getIds} from "./api/products/products";


function App() {
  const {setProductIds, setProductBrands, setPagesCount} = useActions()

  //получение всех идентификаторов и брендов, подсчет страниц
  useEffect(() => {
      const fetchData = async () => {
       let ids = await getIds()
        let brands = await getBrands()
        setProductIds(ids)
        setProductBrands(brands)
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
