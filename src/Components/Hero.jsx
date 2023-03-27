import React from "react";
import '../index.css';
import { Tween, Timeline } from 'react-gsap';
import { gsap } from 'gsap';

function Hero() {
    return (
        <div className="h-screen w-screen bg-[url('https://i.imgur.com/15kLXCo.jpg')] bg-contain">
            {/* <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} ease="power1.out"> */}
            {/* <img src="https://i.imgur.com/15kLXCo.jpg" alt="" className="w-full h-auto bg-clip overflow-clip absolute" /> */}
            <div className="flex justify-center">
                <img src="https://i.imgur.com/sNLtX0F.png" alt="tedx-davv-logo" className="w-48 h-48 bottom-10 relative" />
            </div>
            <img src="https://i.imgur.com/ZxWvrSV.png" alt="Planet" className="relative left-[-485px] top-12 scale-[380%]" />
            <img src="https://i.imgur.com/iEkwjMj.png" alt="Clouds" className="relative w-screen h-64 left-[120px] bottom-36 scale-150 overflow-hidden" />
            <img src="https://i.imgur.com/ZAg3b4l.png" alt="Plane" className="relative h-24 left-[190px] bottom-[420px] scale-[150%]" />
            <img src="https://i.imgur.com/kKKVr8M.png" alt="Balloon" className="relative h-24 left-[300px] bottom-[310px] scale-[340%]" />
            <img src="https://i.imgur.com/1Y26fBs.png" alt="Rnth" className="relative h-24 left-[120px] bottom-[30px] scale-[450%]" />
            <img src="https://i.imgur.com/qZ7y30b.png" alt="admiin-building" className="relative h-24 left-[66px] bottom-[190px] scale-[250%]" />
            <img src="https://assets.codepen.io/721952/cloud1.png" alt="cloud-2" className="relative w-screen h-56 left-[200px] bottom-[450px] scale-[250%]" />
            {/* </Tween> */}
        </div>
    );
}

export default Hero;