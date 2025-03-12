import React from 'react'

function AddTopic() {
  return (
    <form className='flex flex-col gap-3'>
      <input className=" border-slate-500 px-8 border-4 py-2" type='text' placeholder='Topic Title' />
      <input className=" border-slate-500 px-8 border-4 py-2" type='text' placeholder='Topic Description' />
      <button className='bg-green-500 font-bold py-3 px-6 w-fit text-white'>Add Topic</button>
    </form>
  )
}

export default AddTopic
