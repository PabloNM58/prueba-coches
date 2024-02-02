import { useEffect, useState } from "react";

export default function useGetDataFromApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("error fetching data");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => err);
  }, [url]);
  return { data, loading };
}
