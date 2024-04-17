/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Moon(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="48px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 48, height: 48 }}
      paths={[
        {
          d: "M24 48C31.4027 48 38.1637 44.632 42.6428 39.1133C43.3055 38.2969 42.5829 37.1042 41.5589 37.2992C29.9149 39.5168 19.2218 30.5889 19.2218 18.8348C19.2218 12.0639 22.8464 5.83772 28.7373 2.48531C29.6453 1.96856 29.417 0.591844 28.3852 0.40125C26.9387 0.134525 25.4709 0.000219032 24 0C10.7523 -1.79023e-15 0 10.7354 0 24C0 37.2477 10.7354 48 24 48Z",
          fill: "rgba(51,63,73,1)",
          fillRule: "nonzero",
          style: { transform: "translate(5.31%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Moon")}
      {...rest}
    ></Icon>
  );
}
