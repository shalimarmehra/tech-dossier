import { Link } from "react-router-dom";
import { IoMdTimer } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PostCard({ post }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg sm:w-[430px] shadow-2xl dark:shadow-gray-800 hover:shadow-blue-200 hover:bg-blue-200 dark:hover:bg-gray-700 m-5 hover:shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 duration-300">
      <Link to={`/post/${post.slug}`}>
        <span className="italic text-sm bg-blue-700 text-white mx-2 my-2 px-6 ml-4 rounded-full float-left">
          {post.category}
        </span>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full  object-cover z-20 p-3 rounded-3xl"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2 font-custom3">
          {post.title}
        </p>
        <div className="flex justify-between pt-1 mx-auto w-full max-w-2xl text-xs">
          <span className="float-right italic text-sm text-blue-900 dark:text-blue-100 mx-2 my-2 px-2 rounded-md flex">
            <CiCalendarDate className="mr-2 mt-0.5" />
            {post &&
              new Date(post.createdAt).toLocaleDateString("en-US", options)}
          </span>
          <span className="italic text-blue-900 dark:text-blue-100 mx-2 my-2 px-2 rounded-md flex">
            <IoMdTimer className="mx-2 mt-0.5" />
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 absolute shadow-2xl hover:shadow-blue-700 rounded-3xl bottom-[25px] left-0 right-0 bg-blue-700 hover:border-blue-700 text-white hover:bg-blue-100 hover:text-blue-700 text-center py-2  m-2 dark:text-blue-100 dark:hover:text-blue-700 hover:dark:border-blue-100 dark:hover:bg-blue-100 dark:border-blue-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-10 duration-300"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
