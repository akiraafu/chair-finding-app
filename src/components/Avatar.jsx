import "./avatar.css";

const Avatar = ({ src }) => {
  return (
    <div className="avatar">
      <img className="object-cover" src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;
