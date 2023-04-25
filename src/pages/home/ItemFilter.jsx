const filterList = ["all", "chair", "couch", "other"];

const ItemFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    console.log(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter w-100">
      <div className="flex flex-wrap text-sm justify-center md:justify-start  items-center w-100 rounded-xl">
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemFilter;
