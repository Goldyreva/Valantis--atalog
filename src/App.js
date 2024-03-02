import './App.css';
import ProductsPage from "./pages/ProductsPage";
import {useEffect, useState} from "react";
import {getBrands, getIds} from "./api/products/products";
import {useActions} from "./hooks/useActions";
import Loader from "./components/loader/Loader";

function App() {
  const {setProductIds, setProductBrands, setPagesCount} = useActions()
  const [isLoading, setLoading] = useState(true)

  //получение всех идентификаторов и брендов, подсчет страниц
  useEffect(() => {
      const fetchData = async () => {
       let ids = await getIds()
        let brands = await getBrands()
        setProductIds(ids)
        setProductBrands(brands)
        setPagesCount(Math.ceil(ids.length/50))
        setLoading(false)
      }
      fetchData()
  }, [])

  return (
    <div className="App">
      {
      isLoading
      ? <Loader/>
        : <ProductsPage/>
      }
    </div>
  );
}

export default App;
