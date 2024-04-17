/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Logout(props) {
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
      {...getOverrideProps(overrides, "Logout")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="41.56px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="8.33%"
        left="8.33%"
        right="5.08%"
        {...getOverrideProps(overrides, "Iconly/Bold/Logout")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="41.56px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Logout6147")}
        >
          <Icon
            width="41.56px"
            height="40px"
            viewBox={{ minX: 0, minY: 0, width: 41.56039810180664, height: 40 }}
            paths={[
              {
                d: "M18.9855 0C23.9506 0 28 3.98 28 8.88L28 18.46L15.7907 18.46C14.9157 18.46 14.2238 19.14 14.2238 20C14.2238 20.84 14.9157 21.54 15.7907 21.54L28 21.54L28 31.1C28 36 23.9506 40 18.9448 40L9.03488 40C4.04942 40 0 36.02 0 31.12L0 8.9C0 3.98 4.06977 0 9.05523 0L18.9855 0ZM33.0804 13.1004C33.6804 12.4804 34.6604 12.4804 35.2604 13.0804L41.1004 18.9004C41.4004 19.2004 41.5604 19.5804 41.5604 20.0004C41.5604 20.4004 41.4004 20.8004 41.1004 21.0804L35.2604 26.9004C34.9604 27.2004 34.5604 27.3604 34.1804 27.3604C33.7804 27.3604 33.3804 27.2004 33.0804 26.9004C32.4804 26.3004 32.4804 25.3204 33.0804 24.7204L36.2804 21.5404L28.0004 21.5404L28.0004 18.4604L36.2804 18.4604L33.0804 15.2804C32.4804 14.6804 32.4804 13.7004 33.0804 13.1004Z",
                fill: "rgba(51,63,73,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
