import React from "react";

interface ErrorProps {
    error: string;
}

function Error({error}: ErrorProps) {
  return (
    <div className='error'>{error}</div>
  )
}

export default Error