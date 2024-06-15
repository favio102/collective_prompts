"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "@components/profile";


const myProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [allPosts, setAllPosts] = useState([]);
  const handleEdit = () => {};
  const handleDelete = async () => {};
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setAllPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page."
      data={allPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default myProfile;
