import "./feed.css";
import styles from "../../index.css"
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed flex-5.5">
      <div className="feedWrapper p-5">
        <Share />
        {Posts.map((eachPost) => (
          <Post key={eachPost.id} post={eachPost} />
        ))}
      </div>
    </div>
  );
}
