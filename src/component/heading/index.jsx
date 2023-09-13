import './headings.css';

function Heading({ level, text, className }) {
  const Tag = `h${level}`;
  return <Tag className={`heading heading-${level} ${className}`}>{text}</Tag>;
}

export default Heading;
