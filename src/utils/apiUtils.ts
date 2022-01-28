import { filter } from "lodash";
import { IResource } from "../modals/apiUtils";

export interface IDeleteResourcePayload {
  id: number;
}

const mockResourceData = new Array(7).fill(0).map((v, i) => ({
  id: i + 1,
  title: `Post ${i} `,
}));

let data = mockResourceData;
export const fetchResources = async (): Promise<IResource[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data ?? [];
};

export const deleteResource = async ({
  id,
}: IDeleteResourcePayload): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  data = filter(data, (d) => d.id !== id);
};
