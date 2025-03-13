"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("failed to update the topic");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className=" border-slate-500 px-8 border-4 py-2"
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        className=" border-slate-500 px-8 border-4 py-2"
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button className="bg-green-500 font-bold py-3 px-6 w-fit text-white">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
