import "./item.css";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ItemSummary from "./ItemSummary";
import ItemComments from "./ItemComments";

const Item = () => {
  const { id } = useParams();
  const { document, error } = useDocument("items", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading</div>;
  }

  return (
    <>
      <div className="w-100 min-h-[calc(100vh-100px)] flex flex-col md:flex-row justify-center items-center md:items-start gap-10 py-10 md:py-20">
        <ItemSummary item={document} />
        <ItemComments item={document} />
      </div>
    </>
  );
};

export default Item;
