import MainContent from "./MainContent";

const Profile = ({ language }) => {
  return (
    <div>
      <div>
        {/* MainContent is displayed as the primary content for the Overview page */}
        <MainContent language={language} />
      </div>
    </div>
  );
};

export default Profile;
