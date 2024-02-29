import React, {useState} from 'react';

const FilterForm = () => {

    const [serchValue, setSearchValue] = useState('')

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        console.log(serchValue)
    }

    return (
        <div className="my-10 p-2">
            <div className="flex">
                <input type="text" placeholder="Search..." name="search" className="w-full mr-2 p-2 rounded-xl shadow-md border border-blue-500" value={serchValue} onChange={handleChange}  />
                <div className={`w-[100px] h-full px-3 py-2 border border-blue-500 rounded-xl shadow-md cursor-pointer bg-blue-200`}>
                    Поиск
                </div>
            </div>
            <div>
                <div>
                    <input type="number" min="0" step="10" />
                </div>
            </div>

        </div>
        );
};

export default FilterForm;