import Image from 'next/image';
import React from 'react';
import image from "../../assets/logo/logo-2.png";

const Logo = () => {
    return (
        <div>
            <Image src={image || "/placeholder-image.png"} width={140} height={80} alt="Site Logo" />
        </div>
    );
};

export default Logo;