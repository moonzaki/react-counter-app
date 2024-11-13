import './Text.scss';

function Text({ tag, children, className }) {
  const Tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(tag) ? tag : 'p';

  return (
    <Tag className={className}>{children}</Tag>
  );
}

export default Text;
