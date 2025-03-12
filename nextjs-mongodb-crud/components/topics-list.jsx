import React from 'react'
import RemoveButton from "@/components/remove-button"
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import {getTopics} from "@/lib/apiHandlers"


async function TopicsList() {
  const {topics} = await getTopics();
  return (
    <div>
      {topics.map((topic) => (
        <div className='p-4 border-slate-300 my-3 flex justify-between gap-5 items-start border-4' key={topic._id}>
        <div>
        <h2 className='font-bold text-2xl'>{topic.title}</h2>
        <div>{topic.description}</div>
        </div>
        <div className='flex gap-2 items-center'>
            <RemoveButton />
            <Link href={`/edit-topic/${topic._id}`}>
            <HiPencilAlt size={24} />
            </Link>
        </div>
      </div>
      ))}
    </div>
  )
}

export default TopicsList
