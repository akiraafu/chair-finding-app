const filterList = ["all", "chair", "couch", "other"];

const ItemFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    console.log(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter w-full my-5 flex justify-start">
      <div className="flex flex-wrap text-sm justify-center md:justify-start items-center w-100 rounded-xl">
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={
              "hover:bg-red-500 hover:text-white" +
              (currentFilter === f ? "active" : "")
            }
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemFilter;
