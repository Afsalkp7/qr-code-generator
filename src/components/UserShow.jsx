import React, { useEffect, useState } from 'react'
import QrCode from './QrCode'
import {userData} from '../constant/data'


export default function UserShow() {

    const [imgUrl,setImgUrl] = useState('')

    useEffect(() => {
        fetch(userData.data.profile_pic_url_hd)
          .then(response => response.blob())
          .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUrl(reader.result);
            };
            reader.readAsDataURL(blob);
          });
      }, []);

  return (
    <>
    <div className='flex items-center justify-center h-screen '>
        <div style={{background:'#202020'}} className='text-white mx-auto  w-80 h-80 rounded-xl relative flex justify-center items-center'>
            <div className='bg-black w-20 h-20 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10'>
                <img className='rounded-full object-cover' src={imgUrl} />
                <div className='text-center'>
                    <span className='font-bold font-sans'>{userData.data.username}</span><br /><span className='opacity-45'>{userData.data.full_name}</span>
                </div>
                
            </div>
            <div className='bg-white w-48 h-48 mx-auto p-5 mt-16 rounded-xl'>
                <QrCode userId={userData.data.username}/>
            </div>
            
        </div>
        
    </div>
    
    </>
    
  )
}
