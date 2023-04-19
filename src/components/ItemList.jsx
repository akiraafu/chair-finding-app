import { Link } from "react-router-dom";

import "./itemList.css";

const ItemList = () => {
  return (
    <Link to="/item/:id">
      <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mb-2">
        <div className="w-1/3 bg-cover bg-landscape">img</div>
        <div className="w-2/3 p-4">
          <h1 className="text-2xl font-bold text-gray-900">Wooden Armchair</h1>
          <p className="mt-2 text-sm text-gray-600">2 People want this</p>
          <div className="flex justify-between mt-3 item-center">
            <p className="text-sm text-gray-700">Posted 2 hours ago</p>
            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
              View Item
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
