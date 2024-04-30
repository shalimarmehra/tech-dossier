import { Link } from "react-router-dom";
import CallToAction from "../Components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";
import { MdArticle } from "react-icons/md";
import { Button } from "flowbite-react";
import Newsletter from "../Components/Newsletter";
import "./Home.css";
import HomeSlider from "./HomeSlider";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="mb-10">
        <HomeSlider />
      </div>
      {/* <section class="relative h-96 flex flex-col items-center justify-center text-center text-white">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            class="min-w-full min-h-full absolute object-cover"
            src="https://cdn.pixabay.com/video/2023/06/07/166237-834228357_tiny.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div class="video-content space-y-2 z-10">
          <h1 class="font-light text-5xl max-sm:text-xl">
            Do not miss any updates. Subscribe to the newsletter
          </h1>
          <form action="#">
            <div class="items-center mx-auto mb-3 sm:mt-10 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div class="relative w-full max-sm:w-80 ml-14">
                <label
                  for="email"
                  class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="py-3 px-5 w-full max-sm:w-72 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </section> */}

      {/* <hr class="h-px bg-blue-400 border-0 dark:bg-gray-700" /> */}

      <div className=" mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-center font-custom3 border-b border-blue-500 rounded-3xl">
              Recents Posts
            </h2>
            <div className="flex flex-wrap gap-4 justify-center text-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <div className="self-center">
              <Link to={"/search"} className="text-lg">
                <Button
                  color="blue"
                  className="w-72 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  View all posts
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <section class="flex flex-col md:flex-row bg-blue-100 dark:bg-blue-900 rounded-b-lg">
        <div class="flex-1 m-6">
          <p class="text-2xl text-center">𝐹𝑜𝓁𝓁𝑜𝓌 𝑀𝑒 𝑜𝓃 :</p>
          <hr class="my-4" />
          <div class="flex flex-wrap justify-center gap-1">
            <a href="https://twitter.com/shalimarmehra">
              <button class="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fab fa-twitter mr-1"></i> Twitter ( X )
              </button>
            </a>
            <a href="https://www.linkedin.com/in/shalimar-mehra/">
              <button class="bg-[#0077B5] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fab fa-linkedin mr-1"></i> Linked In
              </button>
            </a>
            <a href="https://www.instagram.com/shalimarmehra/">
              <button class="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fab fa-instagram mr-1"></i> Instagram
              </button>
            </a>
            <a href="https://github.com/shalimarmehra">
              <button class="bg-[#171515] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fab fa-github mr-1"></i> Github
              </button>
            </a>
            <a href="https://www.facebook.com/shalimar.mehra.7/">
              <button class="bg-[#1877F2] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fab fa-facebook mr-1"></i> Facebook
              </button>
            </a>
            <a href="https://www.youtube.com/@shalimarmehra">
              <button class="bg-[#FF0000] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fab fa-youtube mr-1"></i> Youtube
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="mt-10 mb-10">
        <CallToAction />
      </div>
      {/* <div>
        <Newsletter />
      </div> */}
    </div>
  );
}
