import React from 'react';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

export default function Instruction({targetRef }) {

    const downloadImage = () => {
        if (targetRef.current) {
          htmlToImage.toPng(targetRef.current)
            .then((dataUrl) => {
              download(dataUrl, 'instagramQrCode.png');
            })
            .catch((error) => {
              console.error('Error downloading image:', error);
            });
        }
      };

  return (
    <div>
        <span className='opacity-80 text-white font-sans'>Your QR code is private. If you share it with someone, they can scan this to view your instagram</span>
        <div>
            <button className='text-white bg-black border border-white px-2 rounded-lg mt-2' onClick={downloadImage}>Download</button>
        </div>
    </div>
  )
}
