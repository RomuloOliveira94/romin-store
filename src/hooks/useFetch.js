import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        setLoading(false);
        setData(json);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [url]);

  return [loading, data];
}
