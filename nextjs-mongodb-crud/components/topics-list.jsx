import React from 'react'
import RemoveButton from "@/components/remove-button"
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

function TopicsList() {
  return (
    <div>
      <div className='p-4 border-slate-300 my-3 flex justify-between gap-5 items-start border-4'>
        <div>
        <h2 className='font-bold text-2xl'>Topic Title</h2>
        <div>Topic Description</div>
        </div>
        <div className='flex gap-2 items-center'>
            <RemoveButton />
            <Link href={"/edit-topic/123"}>
            <HiPencilAlt size={24} />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default TopicsList
