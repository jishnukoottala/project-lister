import React, { useState } from 'react'
import Button from '../Button'

export default function ProjectForm({id, onUpdateHandler, projectData = {workflow: "", projectName: "" }}) {

    const [ showDropDown, setShowDropDown] = useState(false)
    const [workflow, setWorkFlow ] = useState(projectData.workflow);
    const [projectName, setProjectName] = useState(projectData.projectName)
    const [error, setError] = useState("")

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        if(!workflow || !projectName){
            console.log("inside if")
            setError("Please Fill in All Details");
            return;
        }
        setError(false);
        console.log({projectName, workflow})
        onUpdateHandler(id, { projectName, workflow })
    }

  return (
    <div className="container border border-solid border-gray-400 m-auto">
     <div className="flex items-center justify-center p-12">
    
     <form className="mx-auto w-full max-w-[550px]" method="POST"> 
     {error && <div className="mt-5 w-full max-w-[40ch]  py-2 text-rose-600 text-center">{error}</div> } 
     <div className="mb-5">
        <label
          for="projectName"
          className="mb-3 block text-base font-semibold text-slate-900"
        >
         Project Name
        </label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          placeholder="Project Name"
          value={projectName}
          onChange={(e)=> setProjectName(e.target.value)}
          className="w-full rounded-md border border-gray-200 bg-white py-3 px-6 text-base font-medium  outline-none focus:border-gray-400 focus:shadow-md"
        />
      </div>
      <div>
      <div className="mb-5"> 
      <label
          for="workflow"
          className="mb-3 block text-base font-semibold text-slate-900 mr-3"
        >
         Workflow
         </label>
      <button id="workflow" onClick={()=>setShowDropDown(!showDropDown)} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" 
      data-dropdown-toggle="dropdown">{workflow === "" ? "Select Workflow" : workflow } <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        {showDropDown &&(<div className="block bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
   
    <ul className="py-1 text-base font-medium text-gray-900" aria-labelledby="dropdown">
    <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={()=> {
        setWorkFlow("Type 1");
        setShowDropDown(false)
    }}>
       Type 1
    </li>
    <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={()=> {
        setWorkFlow("Settings");
        setShowDropDown(false)
    }}>Settings
    </li>
    <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={()=> {
        setWorkFlow("Test");
        setShowDropDown(false)
    }}>
        Test
    </li>
    <li className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={()=> {
        setWorkFlow("Demo");
        setShowDropDown(false)
    }}>
       Demo
    </li>
    </ul>
   
</div>)}


      </div>
        <Button
        onClick={onSubmitHandler}

        >
          <h1 className="text-base font-semibold text-white">Submit</h1>
        </Button>
      </div>
     
     </form>
  
     </div>
    </div>
  )
}
