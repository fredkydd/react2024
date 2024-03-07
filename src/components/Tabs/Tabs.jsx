/* eslint-disable react/prop-types */
'use strict';

export default function Tabs({ children, buttonsJSX, ButtonComponent }) {
  return (
    <>
      <ButtonComponent>{buttonsJSX}</ButtonComponent>
      {children}
    </>
  );
}
