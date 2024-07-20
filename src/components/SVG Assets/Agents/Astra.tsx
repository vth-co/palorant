import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const Astra = (props: SvgProps) => (
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
export default Astra