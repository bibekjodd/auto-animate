import { AutoAnimateOptions } from '@formkit/auto-animate';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { HTMLAttributes } from 'react';

type AutoAnimateProps = {
  animationOptions?: Partial<AutoAnimateOptions>;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Provide animationOptions for more customization
 */
export function AutoAnimate({ children, animationOptions, ...props }: AutoAnimateProps) {
  const [ref] = useAutoAnimate(animationOptions);
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}
