/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function NumberNotificationBadge(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(207,232,252,0.46)"
      {...getOverrideProps(overrides, "NumberNotificationBadge")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        color="rgba(51,63,73,1)"
        lineHeight="29px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-2px"
        left="9px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1"
        {...getOverrideProps(overrides, "1")}
      ></Text>
    </View>
  );
}
