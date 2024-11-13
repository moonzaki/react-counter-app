import './Overlay.scss';

function overlay({ children, ...props }) {
  const { active } = props;
  return (
    <div className={`overlay${active ? ' active' : ''}`}>{children}</div>
  );
}

export default overlay;
