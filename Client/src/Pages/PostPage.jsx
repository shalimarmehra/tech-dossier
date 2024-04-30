import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../Components/CallToAction";
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
      <h1 className="text-3xl p-3 text-left font-custom4 max-w-7xl mx-auto lg:text-4xl text-black dark:text-white">
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
        {/* <span className="flex">
          <MdImageSearch className="m-1" /> */}
        {/* Image Credits : TLcom */}
        {/* </span> */}
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

      {/* Share this post */}
      {/* <h6 className="text-center mt-2">Share this post with :</h6>
      <div class="w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap"> */}

      {/* <FacebookButton url={url + post.title} appId={439666108470620}> */}
      {/* Facebook */}
      {/* <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
          <svg
            class="transition-all duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
              fill="#337FFF"
            />
          </svg>
        </button>
      </FacebookButton> */}

      {/* <TwitterButton fetchRecentPosts appId={28716198}> */}
      {/* Twitter  */}
      {/* <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
          <svg
            class="transition-all duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
              fill="black"
            />
          </svg>
        </button> */}
      {/* </TwitterButton> */}
      {/* </div> */}

      <div
        className="p-3 max-w-5xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      
      <CommentSection postId={post._id} />

      {/* <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div> */}

      <section class="flex flex-col md:flex-row bg-blue-100 dark:bg-blue-900 rounded-b-lg">
        <div class="flex-1 m-6">
          <p class="text-2xl text-center">𝐹𝑜𝓁𝓁𝑜𝓌 𝑀𝑒 𝑜𝓃 : </p>
          <hr class="my-4"/>
          <div class="flex flex-wrap justify-center gap-1">
            <a href="https://twitter.com/shalimarmehra">
            <button class="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="fab fa-twitter mr-1"></i> Twitter ( X ) 
            </button></a>
            <a href="https://www.linkedin.com/in/shalimar-mehra/">
            <button class="bg-[#0077B5] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="fab fa-linkedin mr-1"></i> Linked In
            </button></a>
            <a href="https://www.instagram.com/shalimarmehra/">
            <button class="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="fab fa-instagram mr-1"></i> Instagram
            </button></a>
            <a href="https://github.com/shalimarmehra">
            <button class="bg-[#171515] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="fab fa-github mr-1"></i> Github
            </button></a>
            <a href="https://www.facebook.com/shalimar.mehra.7/">
            <button class="bg-[#1877F2] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="fab fa-facebook mr-1"></i> Facebook
            </button></a>
            <a href="https://www.youtube.com/@shalimarmehra">
            <button class="bg-[#FF0000] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <i class="fab fa-youtube mr-1"></i> Youtube
            </button></a>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5 font-custom4 border-b border-blue-500 rounded">Recent Articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
