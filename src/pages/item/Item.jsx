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
    <div className="grid grid-cols-2 gap-10">
      <ItemSummary item={document} />
      <ItemComments item={document} />
    </div>
  );
};

export default Item;
