import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center gap-16 ">
      <div className="flex h-screen gap-10 justify-center flex-col p-28 px-3 max-w-6xl">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to <br /> <span className="text-pink-700 text-7xl">Quantum University.</span>
        </h1>
        <p className="text-gray-500 max-w-[80ch] text-xs sm:text-sm">
          Quantum University unfolds a whole new age of learning! It takes into
          account your aspirations and your passions. It offers a unique
          inter-disciplinary environment where one could study computer science
          with economics, agriculture with entrepreneurship, or MBA with cyber
          security. Hundreds of such combinations are waiting to be explored. At
          the same time one is given the opportunity to follow his or her
          Passion in Theatre, Sports, Music, Dance, Photography and much more.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          Explore More
        </Link>
      </div>
      
      <img src="https://www.quantumuniversity.edu.in/images/headers/home/02.jpg" className="w-[650px] rounded-xl border-3" alt="" />
      </div>
      
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
    </div>
  );
}
