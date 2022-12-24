import React from 'react'

const AddUser = () => {
  return (
    <div className='flex max-w-xl mx-auto shadow border-black'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New User</h1>
            </div>
            <div className='flex'>
                <div className='items-center flex-1'>
                    <label className='text-black text-sm font-normal'>First Name</label>
                    <input type='text' className='h-10 w-48 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center flex-1'>
                    <label className='text-black text-sm font-normal'>Last Name</label>
                    <input type='text' className='h-10 w-48 border mt-2 px-2 py-2'></input>
                </div>
            </div>
            <div className='flex space-x-40 pt-4'>
                <div className='items-center'>
                    <label className='text-black text-sm font-normal block'>Age</label>
                    <input type='text' className='h-10 w-24 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center'>
                    <label className='text-black text-sm font-normal block'>UserName</label>
                    <input type='text' className='h-10 w-48 border mt-2 px-2 py-2'></input>
                </div>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-black text-sm font-normal'>Email</label>
                <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button className='rounded text-white font-semibold py-2 px-6 bg-blue-400 hover:bg-blue-800'>Save</button>
                <button className='rounded text-white font-semibold py-2 px-6 bg-red-400 hover:bg-red-800'>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddUser;