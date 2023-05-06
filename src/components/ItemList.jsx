import { Link } from "react-router-dom";
import moment from "moment";

import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length === 0 && <p>No items yet!</p>}

      {items.map((item) => (
        <Link to={`/items/${item.id}`} key={item.id}>
          <div className="flex h-28 md:h-min max-w-md overflow-hidden md:max-w-lg bg-white rounded-lg shadow-lg mb-4">
            <div className="w-1/3 bg-cover bg-landscape ">
              <img className="h-full object-cover" src={item.imgUrl} alt="" />
            </div>
            <div className="w-2/3 p-2 md:p-4">
              <h1 className="md:text-2xl font-bold text-gray-900">
                {item.title}
              </h1>
              <p className="mt-1 md:mt-2 text-xs md:text-sm  text-gray-600">
                {item.location[0]}
              </p>
              <div className="flex justify-between mt-1 md:mt-3 item-center">
                <p className="text-xs md:text-sm text-gray-700">
                  Posted {moment(item.createdAt.toDate()).fromNow()}
                </p>
                <button className="p-1 md:px-3 md:py-2 text-xs font-bold text-white uppercase bg-red-500 rounded">
                  View Item
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
