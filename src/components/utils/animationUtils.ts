import { useSpring } from '@react-spring/web';


// custom hook to use useSpring hook for animation
const useAnimationProps = () => {
  const topSkillsProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { tension: 100, friction: 40 },
  });

  const bottomSkillsProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { tension: 100, friction: 40 },
  });

  const logoAnimationProps = useSpring({
    from: { transform: 'rotate(0deg) scale(1)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'rotate(360deg) scale(1.1)' });
        await next({ transform: 'rotate(0deg) scale(1)' });
      }
    },
    config: { tension: 50, friction: 40 },
  });

  return { topSkillsProps, bottomSkillsProps, logoAnimationProps };
};

export { useAnimationProps };