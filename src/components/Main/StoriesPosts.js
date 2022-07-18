import Stories from "./StoriesPosts/Stories.js";
import Posts from "./StoriesPosts/Posts";

export default function StoriesPosts() {
  return (
    <section className="stories-posts">
      <Stories />   
      <Posts />
    </section>
  );
}