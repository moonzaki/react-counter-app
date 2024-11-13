import cn from 'classnames';
import './Button.scss';

function Button({ children, className, ...props }) {
  return (
    <button {...props} className={cn('button', className)}>{children}</button>
  );
}

export default Button;
