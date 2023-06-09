import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Geocoder from "../../components/Geocoder";

const Create = () => {
  const { addDocument, response } = useFirestore("items");
  const { user } = useAuthContext();
  const [coords, setCoords] = useState("");

  const navigate = useNavigate();

  //form field values
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

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

    const imageFile = image;

    await addDocument(doc, imageFile);

    if (!response.error) {
      navigate("/all");
    }
  };

  return (
    <div className="mx-3 md:w-2/5 create-form my-10 rounded-lg shadow-md bg-gray-50 p-10">
      <Geocoder getCoords={(coords) => setCoords(coords)} location={location} />

      <h2 className="page-title font-bold text-lg">Add a new item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            placeholder="What did you find?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Location</span>
          <input
            type="text"
            placeholder="Where is the item?"
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
        <label>
          <span>Add item image &#40;Lower than 100k&#41; </span>
          <input type="file" onChange={handleFileChange} required />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        <button className="text-white text-md px-8 py-2 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 ">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Create;