import { useEffect, useRef, useState } from "react";

const useFetch = (anime) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //TODO: mantiene la referencia cuando el componente esta montado
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
      .then((res) => res.json())
      .then(
        (data) =>
          isMounted.current && setState({ loading: false, error: null, data })
      )
      .catch((err) => setState({ loading: false, error: err, data: null }));
  }, [anime]);

  return state;
};

export default useFetch;
