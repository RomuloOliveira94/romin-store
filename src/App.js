import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const getContent = async () => {
      const req = await fetch("http://localhost:3000/products");
      const res = await req.json();
      setData(res);
    };
    getContent();
  }, []);
  
  useEffect(() => {
    const filters = data && data.anime.filter((val) => {
      return val.name.toLowerCase().includes("naruto");
    });
    setFilteredData(filters);
  }, []);

  return (
    <div className="App">
      {data &&
        data.anime.map((items, index) => (
          <div key={index}>
            <img src={items.img} alt="" />
            <li>{items.name}</li>
            <li>{items.description}</li>
            <li>{items.price}</li>
          </div>
        ))}
      {data &&
        data.games.map((items, index) => (
          <div key={index}>
            <img src={items.img} alt="" />
            <li>{items.name === "naruto"}</li>
            <li>{items.description}</li>
            <li>{items.price}</li>
          </div>
        ))}
      {data &&
        data.comics.map((items, index) => (
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
      {data &&
        data.anime
          .filter((val) => {
            return val.name.toLowerCase().includes("naruto") 
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <img src={val.img} alt="" />
                <li>{val.name}</li>
                <li>{val.description}</li>
              </div>
            );
          })}
    </div>
  );
}

export default App;
