/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ArrowRight2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ArrowRight2")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="20px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25%"
        bottom="25%"
        left="29.17%"
        right="29.17%"
        {...getOverrideProps(overrides, "Iconly/Bold/Arrow---Right-2")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="20px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Arrow---Down-2")}
        >
          <Icon
            width="24px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 20 }}
            paths={[
              {
                d: "M9.738 19.2616C9.622 19.1486 9.126 18.7219 8.718 18.3244C6.152 15.9942 1.952 9.91525 0.67 6.73356C0.464 6.25037 0.028 5.02874 0 4.37604C0 3.75061 0.144 3.15441 0.436 2.58548C0.844 1.87628 1.486 1.30736 2.244 0.995616C2.77 0.794934 4.344 0.483195 4.372 0.483195C6.094 0.171456 8.892 0 11.984 0C14.93 0 17.614 0.171456 19.362 0.426693C19.39 0.455918 21.346 0.767657 22.016 1.10862C23.24 1.73405 24 2.95567 24 4.26303L24 4.37604C23.97 5.22747 23.21 7.01802 23.182 7.01802C21.898 10.0283 17.904 15.9669 15.25 18.3536C15.25 18.3536 14.568 19.0258 14.142 19.3181C13.53 19.774 12.772 20 12.014 20C11.168 20 10.38 19.7448 9.738 19.2616Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="100%"
            bottom="-83.33%"
            left="0%"
            right="-20%"
            transformOrigin="top left"
            transform="rotate(-90deg)"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
