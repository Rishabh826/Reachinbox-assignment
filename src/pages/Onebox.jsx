import React, { useState, useEffect } from 'react';
import OneboxNavbar from '../container/OneboxNavbar';
import OneboxTopNavbar from '../container/OneboxTopNavbar';
import { MdOutlineRefresh } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { mails } from '../jsonData/data';
import { RiSendPlaneFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import MailCard from '../components/MailCard';
import { BsFillReplyFill } from "react-icons/bs";
import { BiLogoGmail } from 'react-icons/bi';
import { IoMailOutline } from "react-icons/io5";
import { FaMoon, FaSun} from 'react-icons/fa'

const Onebox = () => {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState({});
  const [i, setI] = useState(1);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setEmails(mails);
  }, []);

  const handleClick = (id) => {
    setI(0);
    setEmail(emails.find((email) => email.id === id));
    console.log(email);
  };

  const handleReply = ({ email }) => {
    const mailtoLink = `mailto:${email.to}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.message)}`;
    window.location.href = mailtoLink;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'r' || event.key === 'R') {
      const mailtoLink = `mailto:${email?.to}?subject=${encodeURIComponent(email?.subject)}&body=${encodeURIComponent(email?.message)}`;
      window.location.href = mailtoLink;
    } else if (event.key === 'd' || event.key === 'D') {
      console.log(mails.filter(mail => mail.id !== 1));
      setEmails(mails.filter(mail => mail.id !== 1));
      setI(1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [email]);

  return (
    <div className={isLightMode ? 'light-mode' : ''}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsLightMode(!isLightMode)}
        className='fixed top-3 right-44 p-3 rounded-2xl bg-gray-500 text-white z-10'
      >
        {isLightMode ? <FaMoon /> : <FaSun />}
      </button>

      <div className='flex flex-col'>
        <div>
          <OneboxTopNavbar />
          <div className='flex'>
            <OneboxNavbar />
            <div className='w-1/4 bg-black p-4 border-r-2 border-gray-700'>
              <div className='flex flex-col gap-2 h-screen overflow-y-scroll scroll-smooth'>
                <div className='flex justify-between'>
                  <h2 className='text-xl text-blue-500 flex items-center gap-2'>All Inbox(s) <span><FaAngleDown /></span></h2>
                  <button className='text-white bg-neutral-700 py-1 px-3 rounded'><MdOutlineRefresh /></button>
                </div>
                <div>
                  <p className='text-white'>25/25 <span className='text-gray-500'>Inboxes selected</span></p>
                </div>
                <div className='mt-4'>
                  <input type={'text'} placeholder={`Search`} className='bg-zinc-600 py-1 px-2 w-full rounded' />
                </div>
                <div className='mt-4 flex items-center gap-2'>
                  <p className='text-blue-700 inline bg-zinc-900 p-2 rounded-xl'>26</p>
                  <p className='text-white'>New Replies</p>
                  <p className='text-white ml-20 flex items-center gap-4'>Newest <FaAngleDown /></p>
                </div>
                {emails && emails.map((mail) => (
                  <div className='border-t border-gray-500 mt-2 p-2 cursor-pointer' key={mail.id} onClick={() => handleClick(mail.id)}>
                    <div className='flex justify-between items-center mt-2'>
                      <h4 className='text-lg text-white'>{mail?.from}</h4>
                      <p className='text-gray-500'>{mail?.date?.slice(0, 6)}</p>
                    </div>
                    <p className='text-gray-100 font-thin'>
                      {mail?.subject?.length > 20
                        ? mail?.subject?.slice(0, 20) + '...'
                        : mail?.subject}
                    </p>
                    <div className='flex gap-4 mt-4'>
                      <p className='text-green-400 bg-zinc-800 py-1 px-4 rounded-3xl'><span className='text-green-400 h-2 w-2 rounded-full'></span> Interested</p>
                      <p className='text-gray-100 bg-zinc-800 py-1 px-4 rounded-3xl flex items-center gap-1'><span><RiSendPlaneFill /></span> Campaign Name</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-black w-1/2 border-r-2 border-gray-700 flex flex-col'>
            {i ? <h2 className='text-white text-4xl items-center m-auto'><BiLogoGmail className='bg-white p-2 text-black w-28 h-28 ml-3' /></h2> : <>
              <div className='h-20 border-b-2 border-gray-500 py-4 px-8 flex justify-between items-center'>
                <div>
                  <h2 className='text-white'>Rishabh kumar</h2>
                  <p className='text-gray-500 font-thin text-sm'>rishabh@gmail.com</p>
                </div>
                <div className='flex gap-6'>
                  <select name='meeting-options' className='bg-zinc-800 h-8 text-gray-300 py-1 px-3 rounded'>
                    <option value={"Meeting Completed"}>Meeting Completed</option>
                    <option value={"Inprogress"}>Inprogress</option>
                    <option value={"Cancelled"}>Cancelled</option>
                  </select>
                  <select name="meeting-options-2" className='bg-zinc-800 text-gray-300 h-8 py-1 px-2 rounded'>
                    <option value={"Move"}>Move</option>
                    <option value={"Accept"}>Accept</option>
                    <option value={"Reject"}>Reject</option>
                  </select>
                  <button className='bg-zinc-800 text-white py-1 px-2 rounded'><BsThreeDots /></button>
                </div>
              </div>
              
                <hr className='bg-gray-700 relative top-8 w-1/3 left-16 h-px' />
                <hr className='bg-gray-700 relative top-8 w-1/3 left-96 h-px' />
                <div className='flex flex-col items-center mt-4'>
                  <p className='text-white bg-zinc-900 items-center w-auto py-1 px-3 mr-2'>Today</p>
                </div>
                <div className='bg-zinc-800 h-auto m-4 border border-gray-900 rounded-lg p-4'>
                  {/* Mail Card */}
                  <MailCard email={email} />
                </div>
                <hr className='bg-gray-700 relative top-4 w-1/3 left-8 h-px' />
                <hr className='bg-gray-700 relative top-4 w-1/3 left-96 h-px' />
                <div className='flex flex-col items-center'>
                  <p className='text-white bg-zinc-900 items-center w-auto py-1 px-3 mr-4'>View all <span className='text-blue-600'>{email.replies}</span> replies</p>
                </div>
                <div className='mt-44 p-4' onClick={() => handleReply({ email })}>
                  <button className='text-white bg-blue-600 py-2 px-12 flex items-center gap-2'><BsFillReplyFill className='text-2xl' /> Reply</button>
                </div>
              </>
              }
            </div>
            <div className='bg-black w-1/4'>
              <div className='flex flex-col py-4 px-2'>
                <h4 className='text-lg text-gray-100 bg-zinc-800 py-1 px-4 rounded'>Lead Details</h4>
                <div className='flex justify-between p-2 mt-4'>
                  <h5 className='text-white'>Name </h5>
                  <p className='text-gray-400'>Rishabh</p>
                </div>
                <div className='flex justify-between p-2'>
                  <h5 className='text-white'>Contact No </h5>
                  <p className='text-gray-400'>+91-7078092642 </p>
                </div>
                <div className='flex justify-between p-2'>
                  <h5 className='text-white'>Email ID </h5>
                  <p className='text-gray-400'>rishabh@gmail.com </p>
                </div>
                <div className='flex justify-between p-2 mt-4'>
                  <h5 className='text-white'>Linkedin </h5>
                  <p className='text-gray-400'>linkedin.com/in/rishabh </p>
                </div>
                <div className='flex justify-between p-2 mt-4'>
                  <h5 className='text-white'>Company Name </h5>
                  <p className='text-gray-400'>Reachinbox </p>
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col py-4 px-2'>
                  <h4 className='text-lg text-gray-100 bg-zinc-800 py-1 px-4 rounded'>Activities</h4>
                </div>
                <div className='py-4 px-8'>
                  <h4 className='text-gray-100 text-lg mb-2'>Campaign Name</h4>
                  <div className='flex'>
                    <p className='text-gray-200 mr-6'>3 steps</p>
                    <p className='text-white border-l border-gray-600 pl-4 font-thin'>5 Days in Sequence</p>
                  </div>
                  <div className='flex text-white items-center gap-10'>
                    <div className='mt-8'>
                      <IoMailOutline className='h-8 w-8 bg-gray-700 py-1 px-2 rounded-full' />
                    </div>
                    <div className='flex flex-col items-center mt-8'>
                      <div>
                        <h4>Step 1: Email</h4>
                      </div>
                      <div>
                        <p className='text-gray-400 font-thin text-sm flex items-center gap-1'><span><RiSendPlaneFill /></span> Sent 3rd, Feb</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex text-white items-center gap-10'>
                    <div className='mt-8'>
                      <IoMailOutline className='h-8 w-8 bg-gray-700 py-1 px-2 rounded-full' />
                    </div>
                    <div className='flex flex-col items-center mt-8'>
                      <div>
                        <h4>Step 2: Email</h4>
                      </div>
                      <div>
                        <p className='text-gray-400 font-thin text-sm flex items-center gap-1'><span><RiSendPlaneFill /></span> Sent 3rd, Feb</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex text-white items-center gap-10'>
                    <div className='mt-8'>
                      <IoMailOutline className='h-8 w-8 bg-gray-700 py-1 px-2 rounded-full' />
                    </div>
                    <div className='flex flex-col items-center mt-8'>
                      <div>
                        <h4>Step 3: Email</h4>
                      </div>
                      <div>
                        <p className='text-gray-400 font-thin text-sm flex items-center gap-1'><span><RiSendPlaneFill /></span> Sent 3rd, Feb</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onebox;