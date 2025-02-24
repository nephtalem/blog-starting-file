import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ posts }) {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
}

export default AllPostsPage;

export async function getStaticProps() {
  const posts = getAllPosts(); // ✅ Runs only on the server at build time

  return {
    props: {
      posts,
    },
    revalidate: 1000,
  };
}
