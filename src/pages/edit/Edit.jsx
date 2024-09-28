import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import Geocoder from "../../components/Geocoder";

/**
 * Edit component for updating an existing item
 * @param {void} - This component doesn't accept any props
 * @returns {JSX.Element} A form for editing an existing item
 */
const Edit = () => {
  const { id } = useParams();
  const { document, error } = useDocument("items", id);
  const { updateDocument, response } = useFirestore("items");
  const [coords, setCoords] = useState("");

  const { user } = useAuthContext();
  const navigate = useNavigate();

  // Form field values
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  ```
  /**
   * Updates component state with document properties when the document changes
   * @param {Object} document - The document object containing title, location, details, and category
   * @returns {void} This effect does not return anything
   */
  ```
  useEffect(() => {
    if (document) {
      // Convert the database values to the right format and set them in the state
      /**
       * Handles the change event for a select element
       * @param {Event} e - The event object from the select change
       * @returns {void} This function doesn't return a value
       */
      setTitle(document.title || "");
      setLocation(document.location ? document.location[0] : "");
      setDetails(document.details || "");
      setCategory(document.category || "");
    /**
     * Handles file selection for image upload
     * @param {Event} e - The file input change event
     * @returns {void} This function doesn't return a value
     */
    }
  }, [document]);

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFileChange = (e) => {
    setImage(null);
    //only allow 1 file be selected
    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }
    setThumbnailError(null);
    setImage(selected);
  };

  /**
   * Handles the form submission for updating an item.
   * @param {Event} e - The form submit event.
   * @returns {Promise<void>} A promise that resolves when the item is updated and navigation occurs.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, location, details, category, image);

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const doc = {
      title,
      location: [location, coords[1], coords[0]],
      details,
      category,
      comments: [],
      createdBy,
      available: true,
    };

    await updateDocument(id, doc);
    if (!response.error) {
      navigate(`/items/${id}`);
    /**
     * Renders a Geocoder component for geocoding locations
     * @param {function} getCoords - Callback function to receive and set coordinates
     * @param {string} location - The location to be geocoded
     * @returns {JSX.Element} A Geocoder component
     */
    }
  };

  return (
    <div className="mx-3 md:w-2/5 create-form my-10 rounded-lg shadow-md bg-gray-50 p-10">
      <Geocoder getCoords={(coords) => setCoords(coords)} location={location} />

      <h2 className="page-title font-bold text-lg">Edit item</h2>
      {document && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Title</span>
            <input
              type="text"
              placeholder="What did you find?"
              ```
              /**
               * Event handler for updating the title state when the input value changes
               * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
               * @returns {void} This function doesn't return a value
               */
              
              ```              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label>
            <span>Location</span>
            <input
              type="text"
              placeholder="Where is the item?"
              /**
               * Event handler for updating the location state when the input value changes
               /**
                * Handles the change event for an input field and updates the details state
                * @param {Event} e - The change event object
                * @returns {void} This function does not return a value
                */
               * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
               * @returns {void} This function doesn't return a value
               */
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
          </label>
          <label>
            <span>Description</span>
            <textarea
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              required
            ></textarea>
          </label>
          <label>
            <span>Category</span>
            <select value={category} onChange={handleSelectChange} required>
              <option value="">--Choose an option--</option>
              <option value="chair">Chair</option>
              <option value="couch">Couch</option>
              <option value="other">other</option>
            </select>
          </label>
          {/* <label>
            <span>Add item image</span>
            <input type="file" onChange={handleFileChange} />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label> */}
          <button className="text-white text-md px-8 py-2 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 ">
            Edit Item
          </button>
        </form>
      )}
    </div>
  );
};

export default Edit;
