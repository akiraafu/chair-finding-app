import "./avatar.css";

const Avatar = ({ src }) => {
  return (
    <div className="avatar w-10 h-10">
      <img className="object-cover" src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;
