import "./avatar.css";

const Avatar = ({ src }) => {
  return (
    <div className="avatar w-20 h-20">
      <img className="object-cover" src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;
