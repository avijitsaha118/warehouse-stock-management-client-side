import { useEffect, useState } from "react";

const useItemDetail = itemId =>{
    
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://arcane-everglades-80652.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId, item]);
    return [item]
}

export default useItemDetail;