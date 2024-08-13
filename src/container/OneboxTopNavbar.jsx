import React,{useState} from 'react'
import { BiLogoGmail } from 'react-icons/bi'


const OneboxTopNavbar = () => {

    const handleLogout = () => {
    window.location.href = "http://localhost:3000"
    }

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'logout') {
          handleLogout();
        }
    };

    const [isLightMode,setIsLightMode] = useState(true);

    const toggleTheme = () => {
      setIsLightMode(!isLightMode);
    }


  return (
    <div className='h-16 bg-neutral-800 border-b border-gray-800 flex items-center justify-between'>
        <div className='flex gap-12'>
        <BiLogoGmail className='bg-white w-10 h-7 ml-3' />
        <h1 className='text-xl font-light text-white font-mono'>Onebox</h1>
        </div>
        <div className='flex gap-8'>
        {/* <p className='text-white mr-4'>Nimish Workspace</p> */}
        <select name='profile' className='bg-inherit text-white' onChange={handleSelectChange}>
            <option value={'Nimish-Workspace'}>Rishabh Workspace</option>
            <option value={'logout'}>Logout</option>
        </select>
        </div>
    </div>
  )
}

export default OneboxTopNavbar