import { useState, useEffect } from "react"
import { makeRequest } from "../makeRequest"

 function useFetch(url) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await makeRequest.get(url)
        setData(res.data.data)
        // console.log(res.data.data[0].attributes.img2.data.attributes.url)
      }
      catch (err) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])
  return { data, loading, error }
}

export default useFetch

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         const res = await axios.get(url);
//         setData(res.data.data);
//       } catch (err) {
//         setError(true);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;