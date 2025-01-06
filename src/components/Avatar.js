const Avatar = ({ avatar_url, classes }) => {
  return (
    <span>
      <img alt="avatar" src={avatar_url} className={classes} />
    </span>
  );
};
export default Avatar;
