import UserProfile from "./components/userProfile/userProfile.jsx";

const user = {
  firstName: "John",
  lastName: "Doe",
  skills: "React, Node JS",
};

const user2 = {
  firstName: "Mark",
  lastName: "Doe",
  skills: "Next JS, Nest JS",
};

function App() {
  return (
    <>
      <UserProfile
        firstName={user.firstName}
        lastName={user.lastName}
        skills={user.skills}
      />

      <UserProfile
        firstName={user2.firstName}
        lastName={user2.lastName}
        skills={user2.skills}
      />

      <UserProfile />
    </>
  );
}

export default App;
