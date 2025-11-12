import styles from "./userProfile.module.css";

export default function UserProfile() {
  return (
    <>
      <section>
        <ul className={`${styles["user-details"]} ${styles.border}`}>
          <li>First Name: John</li>
          <li>Last Name: Doe</li>
          <li>Skills: React, Javascript</li>
        </ul>
      </section>
    </>
  );
}
