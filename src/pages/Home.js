import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData, 
    isLoading, 
    isError, 
    refetch
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  
  if (isError) {
    return <h1>Looks like something when wrong...</h1>
  }

   return (
    <h1>
      This is the home page <p>{catData?.fact}</p>
      <button onClick={refetch}>New Fact</button>
    </h1>
  );
};