import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const getContent = async () => {
      const req = await fetch("https://romin-store-mock-api.herokuapp.com/products");
      const res = await req.json();
      setData(res);
    };
    getContent();
  }, []);
  
  useEffect(() => {
    const filters = data && data.filter((val) => {
      return val.name.toLowerCase().includes("mario");
    });
    setFilteredData(filters);
  }, [data]);

  return (
    <div className="App">
      {data &&
        data.map((items, index) => (
          <div key={index}>
            <img src={items.img} alt="" />
            <li>{items.name}</li>
            <li>{items.description}</li>
            <li>{items.price}</li>
          </div>
        ))}
        {filteredData &&
        filteredData.map((val, index) => (
          <div key={index}>
            <img src={val.img} alt="" />
            <li>{val.name}</li>
            <li>{val.description}</li>
          </div>
        ))}
    </div>
  );
}

export default App;
