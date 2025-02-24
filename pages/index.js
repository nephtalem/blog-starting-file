import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import MainNavigation from "../components/layout/main-navigation";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <MainNavigation />
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};
export default HomePage;

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts(); // ✅ Runs only on the server at build time

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1000,
  };
}
