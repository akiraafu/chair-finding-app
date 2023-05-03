import "./create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

const Create = () => {
  const { addDocument, response } = useFirestore("items");
  const { user } = useAuthContext();
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
      location: [location, ""],
      details,
      category,
      comments: [],
      createdBy,
    };

    const imageFile = image;

    await addDocument(doc, imageFile);

    if (!response.error) {
      navigate("/");
    }
  };

  return (
    <div className="create-form my-10 rounded-lg shadow-md bg-gray-50 p-10">
      <h2 className="page-title font-bold text-lg">Add a new item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            placeholder="What did you find?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Location</span>
          <input
            type="text"
            placeholder="Where is the item?"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Category</span>
          <select value={category} onChange={handleSelectChange}>
            <option value="">--Choose an option--</option>
            <option value="chair">Chair</option>
            <option value="couch">Couch</option>
            <option value="other">other</option>
          </select>
        </label>
        <label>
          <span>Add item image</span>
          <input type="file" onChange={handleFileChange} />
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
