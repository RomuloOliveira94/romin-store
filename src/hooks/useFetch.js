import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        setLoading(false);
        setData(json);
      } catch (e) {
        setError(e);
      }
    })();
  }, [url]);

  return [loading, data, error];
}
