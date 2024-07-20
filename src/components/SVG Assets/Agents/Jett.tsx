import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const Jett = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={85}
    height={85}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h85v85H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01176)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={85}
        height={85}
      />
    </Defs>
  </Svg>
)
export default Jett