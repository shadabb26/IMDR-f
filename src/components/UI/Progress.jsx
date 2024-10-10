import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
// import './Progress.css';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={`progress-root ${className}`}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="progress-indicator"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };