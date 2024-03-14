import QRCode from "react-qr-code";
import React from 'react'

export default function QrCode({userId}) {
  return (
    <>
        <QRCode className="w-36 h-40 mx-auto" value={`https://www.instagram.com/${userId}/`} />
    </>
  )
}