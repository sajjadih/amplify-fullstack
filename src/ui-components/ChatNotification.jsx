/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ChatNotification(props) {
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
      {...getOverrideProps(overrides, "ChatNotification")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="40px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="8.33%"
        left="8.33%"
        right="8.33%"
        {...getOverrideProps(overrides, "Iconly/Bold/Chat")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="40px"
          height="44px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Chat")}
        >
          <Icon
            width="40px"
            height="40px"
            viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
            paths={[
              {
                d: "M20.04 0C31.4 0 40 9.31397 40 19.97C40 32.3285 29.92 40 20 40C16.72 40 13.08 39.1187 10.16 37.3961C9.14 36.7752 8.28 36.3145 7.18 36.675L3.14 37.8768C2.12 38.1973 1.2 37.3961 1.5 36.3145L2.84 31.8277C3.06 31.2068 3.02 30.5458 2.7 30.025C0.98 26.8603 0 23.3951 0 20.03C0 9.49424 8.42 0 20.04 0ZM29.18 17.4862C27.76 17.4862 26.62 18.6279 26.62 20.0501C26.62 21.4522 27.76 22.6139 29.18 22.6139C30.6 22.6139 31.74 21.4522 31.74 20.0501C31.74 18.6279 30.6 17.4862 29.18 17.4862ZM19.96 17.4862C18.56 17.4662 17.4 18.6279 17.4 20.03C17.4 21.4522 18.54 22.5939 19.96 22.6139C21.38 22.6139 22.52 21.4522 22.52 20.0501C22.52 18.6279 21.38 17.4862 19.96 17.4862ZM10.74 17.4862C9.32 17.4862 8.18 18.6279 8.18 20.0501C8.18 21.4522 9.34 22.6139 10.74 22.6139C12.16 22.5939 13.3 21.4522 13.3 20.0501C13.3 18.6279 12.16 17.4862 10.74 17.4862Z",
                fill: "rgba(51,63,73,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.09%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
          <Icon
            width="16px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
            paths={[
              {
                d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
                fill: "rgba(33,150,243,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="63.64%"
            left="60%"
            right="0%"
            {...getOverrideProps(overrides, "Ellipse 2")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
