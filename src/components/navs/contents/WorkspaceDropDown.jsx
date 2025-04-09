import React from 'react'

function WorkspaceDropDown() {
    return (
        <div className='w-[250px] px-2 bg-white flex flex-col'>
            <h3 className='text-gray-700 font-semibold text-sm'>Workspace</h3>
            <div className="flex flex-col mt-2">
                <a  href="#" className="flex items-center w-full hover:bg-slate-100 px-2 py-1 rounded-md">
                    <img src="https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-[50px] w-[50px] rounded-md" alt="" />
                    <span className='ml-2 text-gray-600 text-md font-[500]'>My first board</span>
                </a>
            </div>
        </div>
    )
}

export default WorkspaceDropDown
