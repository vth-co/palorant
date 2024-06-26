// import * as React from "react"
// import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
// const InitiatorSVG = (props) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     width={64}
//     height={64}
//     fill="none"
//     {...props}
//   >
//     <Path fill="url(#a)" d="M0 0h150v150H0z" />
//     <Defs>
//       <Pattern
//         id="a"
//         width={1}
//         height={1}
//         patternContentUnits="objectBoundingBox"
//       >
//         <Use xlinkHref="#b" transform="scale(.00667)" />
//       </Pattern>
//       <Image
//         xlinkHref="data:image/png;base64,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"
//         id="b"
//         width={64}
//         height={64}
//       />
//     </Defs>
//   </Svg>
// )
// export default InitiatorSVG