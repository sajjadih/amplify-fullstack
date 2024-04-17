/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import Logo from "./Logo";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NavBrand(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Logo841: {},
        Logo850: {},
        Cummo: {},
        Text: {},
        NavBrand: {},
      },
      variantValues: { icon: "True", text: "True", mode: "Light" },
    },
    {
      overrides: {
        Logo841: {
          background: "White",
          backgroundColor: "rgba(255,255,255,1)",
        },
        Logo850: {},
        Cummo: { color: "rgba(239,242,244,1)" },
        Text: {},
        NavBrand: {},
      },
      variantValues: { icon: "True", text: "True", mode: "Dark" },
    },
    {
      overrides: {
        Logo841: {},
        Logo850: {},
        Cummo: {},
        Text: { display: "none" },
        NavBrand: {},
      },
      variantValues: { icon: "True", text: "False", mode: "Light" },
    },
    {
      overrides: {
        Logo841: {
          background: "White",
          backgroundColor: "rgba(255,255,255,1)",
        },
        Logo850: {},
        Cummo: {},
        Text: { display: "none" },
        NavBrand: {},
      },
      variantValues: { icon: "True", text: "False", mode: "Dark" },
    },
    {
      overrides: {
        Logo841: { borderRadius: "4.111575603485107px" },
        Logo850: { display: "none" },
        Cummo: {},
        Text: {},
        NavBrand: {},
      },
      variantValues: { icon: "False", text: "True", mode: "Light" },
    },
    {
      overrides: {
        Logo841: { borderRadius: "4.111575603485107px" },
        Logo850: { display: "none" },
        Cummo: { color: "rgba(239,242,244,1)" },
        Text: {},
        NavBrand: {},
      },
      variantValues: { icon: "False", text: "True", mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "NavBrand")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Logo850")}
      >
        <Logo
          display="flex"
          gap="5.139470100402832px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="4.111575603485107px 4.111575603485107px 4.111575603485107px 4.111575603485107px"
          background="Blue"
          {...getOverrideProps(overrides, "Logo841")}
        ></Logo>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Epilogue"
          fontSize="23px"
          fontWeight="600"
          color="rgba(93,114,133,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cummo"
          {...getOverrideProps(overrides, "Cummo")}
        ></Text>
      </Flex>
    </Flex>
  );
}
