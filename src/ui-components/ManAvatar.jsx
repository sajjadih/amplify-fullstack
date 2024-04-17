/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function ManAvatar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="56px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ManAvatar")}
      {...rest}
    >
      <Icon
        width="56px"
        height="56px"
        viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
        paths={[
          {
            d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
            fill: "rgba(188,223,251,1)",
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
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="56px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Mask Group")}
      >
        <Icon
          width="56px"
          height="56px"
          viewBox={{ minX: 0, minY: 0, width: 56, height: 56 }}
          paths={[
            {
              d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
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
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <Image
          width="85.72%"
          height="128.57%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="-28.57%"
          left="7.14%"
          right="7.13%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(
            overrides,
            "jurica-koletic-7YVZYZeITc8-unsplash_ccexpress 1"
          )}
        ></Image>
      </View>
    </View>
  );
}
