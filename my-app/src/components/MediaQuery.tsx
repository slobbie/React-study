import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"


// const [width, setwidth] = useState<number>(
//     typeof window !== 'undefined' ? window.innerWidth : null
// );

const Mobile :React.FC = ({children}) => {
const isMobile = useMediaQuery({
  query : "(max-width:811px)"
});
return <React.Fragment>{isMobile && children}</React.Fragment>
}

const PC :React.FC = ({children}) => {
const isPc = useMediaQuery({
  query : "(min-width:812px) "
});
return <React.Fragment>{isPc && children}</React.Fragment>
}

export  {Mobile,PC};