import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {getIds, getIdsByFilter, getItems} from "../../api/products/products";
import {useActions} from "../hooks/useActions";

const FilterForm = () => {
    const products = useSelector(state => state.products)
    const {setProductIds, setCurrentPage, setPagesCount} = useActions()

    const [serchValue, setSearchValue] = useState('')
    const [brandValue, setBrandValue] = useState('')
    const [priceValue, setPriceValue] = useState(0)

    //функция обработки изменений в форме
    const handleChange = (event) => {
        switch (event.target.name){
            case 'searchInput':
                setSearchValue(event.target.value);
                break;
            case 'priceInput':
                setPriceValue(event.target.value);
                break;
            case 'brandSelect':
                setBrandValue(event.target.value);
                break;
            default: break;
        }
    }
//отправка формы фильтрации товаров
    const submitForm = async () => {
        let ids = []
        if (serchValue || priceValue || brandValue) {
            ids = await getIdsByFilter(serchValue, Number(priceValue), brandValue)
        } else {
            ids = await getIds()
        }
        setProductIds(ids)
        setCurrentPage(1)
        setPagesCount(Math.ceil(ids.length/50))

    }

    return (
        <div className="py-8 px-2 flex justify-between items-end flex-wrap md:flex-nowrap">
            <div className="w-full flex flex-col items-start md:mb-0 mb-4">
                <label htmlFor="searchInput" className="font-semibold">Название:</label>
                <input type="text" placeholder="Search..." className="w-full mr-2 p-2 rounded-xl shadow-md border border-blue-500" id="searchInput" name="searchInput" onChange={handleChange}  />
            </div>
            <div className="md:w-[150px] sm:w-1/5 w-2/6 md:px-2 flex flex-col items-start pr-2">
                <label htmlFor="priceInput" className="font-semibold">Цена:</label>
                <input type="number" min="0" step="10" className="w-full p-2 rounded-xl shadow-md border border-blue-500" id="priceInput" name="priceInput" onChange={handleChange}/>
                </div>
            <div className="md:w-[200px] sm:w-3/5 sm:pr-2 w-4/6 flex flex-col items-start">
                <label htmlFor="brandSelect" className="font-semibold">Бренд:</label>
                <select className="w-full p-2 rounded-xl shadow-md border border-blue-500 h-[42px]" id="brandSelect" name="brandSelect" onChange={handleChange}>
                        <option value="">Не выбран</option>
                        {
                        products.brands.map((brand, index) =>
                            <option value={brand} key={index}>{brand}</option>
                        )
                        }
                    </select>
                </div>
            <div className={`md:w-[100px] sm:w-1/5 w-full md:mt-0 mt-4 h-full px-3 py-2 border border-blue-500 rounded-xl shadow-md cursor-pointer bg-blue-200`} onClick={submitForm}>
                Поиск
            </div>

        </div>
        );
};

export default FilterForm;