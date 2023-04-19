import Map from "../../components/Map";
import "./item.css";

const Item = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="w-full rounded-lg shadow-md lg:max-w-sm">
        <img
          className="object-cover w-full h-48"
          src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
          alt="image"
        />

        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            React Tailwind Card with Image
          </h4>
          <p className="mb-2 pb-2 leading-normal border-b-2 border-gray-300 ">
            react tailwind css card with image It is a long established fact
            that a reader will be distracted by the readable content.
          </p>
          <p className="mb-2 leading-normal">Wilson, WA</p>
          <p className="mb-2 leading-normal">
            Submitted by <strong>Joe Doe</strong>
          </p>
          <div className="button-area">
            <button className="px-4 py-2 mr-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Edit
            </button>
            <button className="px-4 py-2 text-sm text-blue-100 bg-red-500 rounded shadow">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Map />
      </div>
    </div>
  );
};

export default Item;
