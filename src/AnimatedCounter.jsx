import { useSpring, animated } from "@react-spring/web";
import PropTypes from 'prop-types';
const AnimatedCounter = ({start, end}) => {
    // Define the animation
    const props = useSpring({
        from: { number: start },
        to: { number: end },
        config: { duration: 4000 },
    });

    const formatNumber = (number) =>{
        return number.toLocaleString("en-US");
    }

    return (
        <animated.div>
            {props.number.to((n) => formatNumber(Math.round(n)))}
        </animated.div>
    );
};

AnimatedCounter.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
    number: PropTypes.number
}
export default AnimatedCounter;