import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const Yoru = (props: SvgProps) => (
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
export default Yoru