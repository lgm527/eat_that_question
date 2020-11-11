import React from 'react';
import { useLottie } from 'lottie-react';
import galaxy from '../assets/galaxy.json';

const Galaxy = (props) => {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: galaxy,
        height: 100,
        width: 100
    }

    const { View } = useLottie(lottieOptions)

    return View;
}
 
export default Galaxy;