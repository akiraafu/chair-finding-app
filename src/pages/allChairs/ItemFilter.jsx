const filterList = ["all", "chair", "couch", "other"];

/**
 * ItemFilter component for filtering items
 * @param {string} currentFilter - The currently active filter
 * @param {function} changeFilter - Function to update the current filter
 * @returns {JSX.Element} A div containing filter buttons
 */
const ItemFilter = ({ currentFilter, changeFilter }) => {
  /**
   * Handles the click event and updates the filter
   * @param {*} newFilter - The new filter value to be applied
   * @returns {void} This function doesn't return a value
   */
  const handleClick = (newFilter) => {
    console.log(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter w-full md:my-5 flex justify-start">
      <div className="flex flex-wrap text-sm justify-center md:justify-start items-center w-100 rounded-xl">
        <p>Filter by:</p>
        /**
         * Renders a list of filter buttons based on the provided filterList
         * @param {Array} filterList - An array of filter options to be displayed as buttons
         * @param {Function} handleClick - The function to be called when a filter button is clicked
         * @param {string} currentFilter - The currently active filter
         * @returns {JSX.Element} A React fragment containing filter buttons
         */
        {filterList.map((f) => (
          <button
            key={f}
            /**
             * Handles the click event for a specific element
             * @param {Function} f - The function to be executed when the element is clicked
             * @returns {void} This function does not return a value
             */
            onClick={() => handleClick(f)}
            className={
              "hover:bg-red-500 hover:text-white  py-1 px-2 md:py-2 md:px-5" +
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
