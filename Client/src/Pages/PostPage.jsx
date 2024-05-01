import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../Components/CommentSection";
import PostCard from "../Components/PostCard";
// import { MdImageSearch } from "react-icons/md";
// import { FacebookButton, FacebookCount, TwitterButton } from "react-social";
import { IoMdTimer } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
let url = "url";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=4`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    // Blog Post Inf
    <main className="p-3 flex flex-col max-w-7xl mx-auto min-h-screen">
      <Link to={`/search?category=${post && post.category}`} className="mt-0">
        <Button
          color="gray"
          pill
          size="xs"
          className="italic text-sm bg-blue-700 text-white dark:bg-blue-700 dark:text-white mx-2 my-0 px-2 rounded-md"
        >
          {post && post.category}
        </Button>
      </Link>
      <h1 className="text-3xl p-3 text-left font-custom4 max-w-7xl lg:text-4xl text-black dark:text-white">
        {post && post.title}
      </h1>
      <div className="m-4">
        <span className="font-custom5">Shalimar Mehra /</span>&nbsp;
        <br className="md:hidden" />
        <span className="underline underline-offset-8 hover:underline-offset-4 text-sm hover:text-blue-700 decoration-dotted">
          <a href="https://twitter.com/shalimarmehra">@shalimarmehra</a>
        </span>{" "}
        &nbsp;/&nbsp;{" "}
        <span className="text-sm">
          {post && new Date(post.createdAt).toLocaleTimeString()} •{" "}
          {post &&
            new Date(post.createdAt).toLocaleDateString("en-US", options)}
        </span>
      </div>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-0 p-3 max-h-[600px] w-full object-cover rounded-t-3xl"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-5xl text-xs">
        <span className="flex">
          <CiCalendarDate className="mr-2 mt-0.5" />
          {post && new Date(post.createdAt).toLocaleTimeString()} •{" "}
          {post &&
            new Date(post.createdAt).toLocaleDateString("en-US", options)}
        </span>
        <span className="italic flex">
          <IoMdTimer className="mx-2 mt-0.5" />
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-5xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      {/* Comment Section */}

      <CommentSection postId={post._id} />

      {/* Social Media */}
      <section className="flex flex-col md:flex-row bg-blue-100 dark:bg-blue-900 rounded-b-lg">
        <div className="flex-1 m-6">
          <p className="text-2xl text-center">𝐹𝑜𝓁𝓁𝑜𝓌 𝑀𝑒 𝑜𝓃 : </p>
          <hr className="my-4" />
          <div className="flex flex-wrap justify-center gap-1">
            <a href="https://twitter.com/shalimarmehra">
              <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-twitter mr-1"></i> Twitter ( X )
              </button>
            </a>
            <a href="https://www.linkedin.com/in/shalimar-mehra/">
              <button className="bg-[#0077B5] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-linkedin mr-1"></i> Linked In
              </button>
            </a>
            <a href="https://www.instagram.com/shalimarmehra/">
              <button className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-instagram mr-1"></i> Instagram
              </button>
            </a>
            <a href="https://github.com/shalimarmehra">
              <button className="bg-[#171515] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-github mr-1"></i> Github
              </button>
            </a>
            <a href="https://www.facebook.com/shalimar.mehra.7/">
              <button className="bg-[#1877F2] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-facebook mr-1"></i> Facebook
              </button>
            </a>
            <a href="https://www.youtube.com/@shalimarmehra">
              <button className="bg-[#FF0000] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-youtube mr-1"></i> Youtube
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Recents Posts */}
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5 font-custom4 border-b border-blue-500 rounded">
          Recent Articles
        </h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
