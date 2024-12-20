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

  const toggleButtonProps = useSpring({
    from: { transform: 'translateY(100%) scale(1)', opacity: 0 },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(0%) scale(1.2)', opacity: 1 });
        await next({ transform: 'translateY(0%) scale(1)' });
      }
    },
    config: { tension: 50, friction: 40 },
  })

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

  const visitorsAnimationProps = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      while (true) {
        await next({ opacity: 0 });
        await next({ opacity: 1 });
      }
    },
    config: { duration: 2000 }
  });

  return { topSkillsProps, bottomSkillsProps, logoAnimationProps, toggleButtonProps, visitorsAnimationProps };
};

export { useAnimationProps };