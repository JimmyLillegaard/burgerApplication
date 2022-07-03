import React from 'react';

interface Property {}

const NewUser: React.FC<Property> = (props) => {
  return (
    <>
      <p>Rendering new user component from shared</p>
    </>
  );
};

export default NewUser;
