import styles from "./userProfile.module.css";
import LikeButton from "../likeButton/LikeButton.jsx";

export default function UserProfile(props) {
  const { firstName = "-", lastName = "-", skills = "-" } = props;
  return (
    <>
      <section>
        <ul className={`${styles["user-details"]} ${styles.border}`}>
          <li>First Name: {firstName} </li>
          <li>Last Name: {lastName} </li>
          <li>Skills: {skills} </li>
        </ul>
        <LikeButton />
      </section>
    </>
  );
}
