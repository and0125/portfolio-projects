import React from "react";
import EditTopicForm from "@/components/edit-topic-form";
import { getTopicById } from "@/lib/apiHandlers";

async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  console.log("id: ", id);
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
}

export default EditTopic;
