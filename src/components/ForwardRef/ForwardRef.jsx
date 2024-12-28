import { forwardRef } from 'react';

const ForwardRef = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));
export default ForwardRef;
