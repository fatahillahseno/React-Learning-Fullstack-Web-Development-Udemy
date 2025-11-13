import styles from "./likeButton.module.css";
import { useState } from "react";

export default function LikeButton() {
  // untuk membuat likes bisa tampil di browser
  // dan likes bisa dikontrol
  // likes harus dibuat secara state, bukan variabel
  let [likes, setLikes] = useState(0);

  function countLikes() {
    setLikes(likes + 1);
    console.log(likes);
  }
  return (
    <button onClick={countLikes} className={`${styles.button}`}>
      {likes} Likes
    </button>
  );
}
