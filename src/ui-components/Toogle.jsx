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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Toogle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Ellipse 1": {}, ON: {}, Toogle: {} },
      variantValues: { mode: "Dark" },
    },
    {
      overrides: {
        "Ellipse 1": {
          paths: [
            {
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
              fill: "rgba(33,150,243,1)",
              fillRule: "nonzero",
            },
          ],
        },
        ON: { color: "rgba(51,63,73,1)" },
        Toogle: { backgroundColor: "rgba(233,245,254,1)" },
      },
      variantValues: { mode: "Light" },
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
      borderRadius="100px"
      padding="2px 4px 2px 4px"
      backgroundColor="rgba(102,122,138,1)"
      display="flex"
      {...getOverrideProps(overrides, "Toogle")}
      {...rest}
    >
      <Icon
        width="16px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        paths={[
          {
            d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
            fill: "rgba(239,242,244,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        color="rgba(239,242,244,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.11px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ON"
        {...getOverrideProps(overrides, "ON")}
      ></Text>
    </Flex>
  );
}
