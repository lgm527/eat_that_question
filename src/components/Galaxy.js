import { useLottie } from 'lottie-react';
import galaxy from '../assets/galaxy.json';
import '../styles/Galaxy.css';

const Galaxy = () => {

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