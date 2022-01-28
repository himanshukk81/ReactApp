import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { ReactQueryConstant } from "../enums/ReactQueryConsts";
import { IResource } from "../modals/apiUtils";
import { fetchResources } from "../utils/apiUtils";

export function useGetResource(
  options?: UseQueryOptions<IResource[], Error>
): UseQueryResult<IResource[]> {
  return useQuery([ReactQueryConstant.RESOURCES], fetchResources(), {
    // ...options, // commented due to issue
  });
}
