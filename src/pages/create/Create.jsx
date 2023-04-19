import "./create.css";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const Create = () => {
  const { user } = useAuthContext();

  //form field values
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, location, details, category, image);

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const item = {
      title,
      location,
      details,
      category,
      image,
      comments: [],
      createdBy,
    };
    console.log(item);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
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
    console.log("thumbnail updated");
  };

  return (
    <div className="create-form">
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
        <button className="button">Add Item</button>
      </form>
    </div>
  );
};

export default Create;
