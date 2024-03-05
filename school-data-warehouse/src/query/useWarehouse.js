import { fetchWarehouse } from "./AxiosRequests";
import { useQuery } from "@tanstack/react-query";

const useWarehouse = (query) => {
  const results = useQuery([query], fetchWarehouse);

  results[(results?.data?.breeds ?? [], results.status)];
};

export default useWarehouse;
