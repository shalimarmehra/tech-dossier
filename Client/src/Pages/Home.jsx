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
      {/* Home Page Slider */}
      <div className="mb-10">
        <HomeSlider />
      </div>
      {/* Reacents Posts */}
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
                  View all articles
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Social Media */}
      <section className="flex flex-col md:flex-row bg-blue-100 dark:bg-blue-900 rounded-b-lg">
        <div className="flex-1 m-6">
          <p className="text-2xl text-center">𝐹𝑜𝓁𝓁𝑜𝓌 𝑀𝑒 𝑜𝓃 :</p>
          <hr className="my-4" />
          <div className="flex flex-wrap justify-center gap-1">
            <a href="https://twitter.com/shalimarmehra" target="_blank">
              <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-twitter mr-1"></i> Twitter ( X )
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/shalimar-mehra/"
              target="_blank"
            >
              <button className="bg-[#0077B5] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-linkedin mr-1"></i> Linked In
              </button>
            </a>
            <a href="https://www.instagram.com/shalimarmehra/" target="_blank">
              <button className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-instagram mr-1"></i> Instagram
              </button>
            </a>
            <a href="https://github.com/shalimarmehra" target="_blank">
              <button className="bg-[#171515] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-github mr-1"></i> Github
              </button>
            </a>
            <a
              href="https://www.facebook.com/shalimar.mehra.7/"
              target="_blank"
            >
              <button className="bg-[#1877F2] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-facebook mr-1"></i> Facebook
              </button>
            </a>
            <a
              href="https://www.youtube.com/@shalimarmehra?sub_confirmation=1"
              target="_blank"
            >
              <button className="bg-[#FF0000] rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <i className="fab fa-youtube mr-1"></i> Youtube
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Call To Action ( YouTube Subscribe) */}
      <div className="mt-10 mb-10">
        <CallToAction />
      </div>
      {/* <div>
        <Newsletter />
      </div> */}
    </div>
  );
}
