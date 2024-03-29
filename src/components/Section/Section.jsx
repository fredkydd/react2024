'use strict';
import PropTypes from 'prop-types';

export default function Section({ title, children, ...props }) {
  const propsExample = { ...props };
  console.log(propsExample);

  return (
    <section {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
