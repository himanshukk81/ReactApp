import { map } from "lodash";
import { ListGroup, Spinner, Button } from "react-bootstrap";
import { useDeleteResources } from "../hooks/ResourceMutations";
import { useGetResource } from "../hooks/ResourcesQuery";
import { IResource } from "../modals/apiUtils";

export const Resources = () => {
  const { data, isLoading, isError, refetch } = useGetResource();
  console.log("data", data);

  const deleteMutate = useDeleteResources();

  if (isLoading) {
    return <Spinner animation="border" />;
  } else if (isError) {
    return <div>Data Fetching Error</div>;
  }

  const deleteResource = async (id: number) => {
    try {
      await deleteMutate.mutateAsync({
        id: id,
      });
      refetch();
    } catch (e) {}
  };

  const renderButtons = (id: number) => {
    return (
      <div>
        <Button variant="outline-primary">Edit</Button>
        <Button variant="outline-primary" onClick={() => deleteResource(id)}>
          Delete
        </Button>
      </div>
    );
  };
  return (
    <div className="mt-2">
      {map(data, (d: IResource) => (
        <ListGroup key={d.id} horizontal="sm">
          <ListGroup.Item>{d.id}</ListGroup.Item>
          <ListGroup.Item>{d.title}</ListGroup.Item>
          {renderButtons(d.id)}
        </ListGroup>
      ))}
    </div>
  );
};
