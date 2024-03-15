import React, { useEffect, useState, useRef, } from "react";
import QrCode from "./QrCode";
import Instruction from "./Instruction";
import Skeleton from "react-loading-skeleton";


export default function UserShow({userId}) {
  const [userData,setUserData] = useState(null)
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const forDownloadRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://instagram-qr-backend.vercel.app/${userId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.profile_pic_url_hd) {
            fetch(data.profile_pic_url_hd)
            .then((response) => response.blob())
            .then((blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImgUrl(reader.result);
              };
              reader.readAsDataURL(blob);
            });
        }
        setUserData(data);
      })
      .catch(error => {
        setError("Error fetching data");
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
    
  }, []);



  return (
    <>
      <div className="relative">
         {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div
            style={{ background: "#202020" }}
            className="text-white mx-auto w-80 h-80 rounded-xl relative flex justify-center items-center"
          >
            <Skeleton circle width={80} height={80} />
            <div className="text-center">
              <Skeleton width={80} height={20} />
              <br />
              <Skeleton width={80} height={20} />
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-white">Error: {error}</div>
        </div>
      ) :(
        <>
          <div ref={forDownloadRef} id="forDownload" className="flex items-center justify-center h-screen">
            <div
              style={{ background: "#202020" }}
              className="text-white mx-auto w-80 h-80 rounded-xl relative flex justify-center items-center"
            >
              <div className="bg-black w-20 h-20 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
                <img className="rounded-full object-cover" src={imgUrl==""?"https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png":imgUrl } alt="Profile" />
                <div className="text-center">
                  <span className="font-bold font-sans">{userData?.data?.username}</span>
                  <br />
                  <span className="opacity-45">{userData?.data?.full_name}</span>
                </div>
              </div>
              <div className="bg-white w-48 h-48 mx-auto p-5 mt-16 rounded-xl">
                <QrCode userId={userData?.data?.username} />
              </div>
            </div>
          </div>
          <div className="absolute text-center bottom-16 left-0 right-0 p-5">
            <Instruction targetRef={forDownloadRef} />
          </div>
        </>
      )}
        
      </div>
    </>
  );
}
