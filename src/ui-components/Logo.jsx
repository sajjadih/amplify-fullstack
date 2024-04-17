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
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Logo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 2": {},
        "Rectangle 6": {},
        "Rectangle 3": {},
        "Rectangle 4": {},
        "Rectangle 5": {},
        Union: {
          viewBox: {
            minX: 0,
            minY: 0,
            width: 183.36207580566406,
            height: 177.08750915527344,
          },
          paths: [
            {
              d: "M60.6657 38.8078C57.3334 35.5228 57.3334 30.1969 60.6657 26.9119L85.4661 2.46371C88.7984 -0.821237 94.2011 -0.821237 97.5334 2.46371L122.334 26.9119C125.666 30.1969 125.666 35.5228 122.334 38.8078L97.5334 63.256C94.2011 66.541 88.7984 66.541 85.4661 63.256L60.6657 38.8078ZM86.9523 91.5906C85.2861 89.9482 85.2861 87.2852 86.9523 85.6427L88.5994 84.0189C90.2656 82.3765 92.9669 82.3765 94.633 84.0189L96.2802 85.6427C97.9463 87.2852 97.9463 89.9482 96.2802 91.5906L94.633 93.2144C92.9669 94.8569 90.2656 94.8569 88.5994 93.2144L86.9523 91.5906ZM119.195 82.7946C115.862 86.0796 115.862 91.4055 119.195 94.6905L143.995 119.139C147.327 122.424 152.73 122.424 156.062 119.139L180.863 94.6905C184.195 91.4055 184.195 86.0796 180.863 82.7946L156.062 58.3464C152.73 55.0615 147.327 55.0615 143.995 58.3464L119.195 82.7946ZM2.49921 94.6277C-0.833069 91.3427 -0.833069 86.0168 2.49921 82.7318L27.2997 58.2836C30.632 54.9986 36.0347 54.9986 39.3669 58.2836L64.1674 82.7318C67.4997 86.0168 67.4997 91.3427 64.1674 94.6277L39.3669 119.076C36.0347 122.361 30.632 122.361 27.2997 119.076L2.49921 94.6277ZM60.6657 138.28C57.3334 141.565 57.3334 146.891 60.6657 150.176L85.4661 174.624C88.7984 177.909 94.2011 177.909 97.5334 174.624L122.334 150.176C125.666 146.891 125.666 141.565 122.334 138.28L97.5334 113.831C94.2011 110.547 88.7984 110.547 85.4661 113.831L60.6657 138.28Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
            },
          ],
        },
        Logo: { backgroundColor: "rgba(33,150,243,1)" },
      },
      variantValues: { background: "Blue" },
    },
    {
      overrides: {
        "Rectangle 2": {},
        "Rectangle 6": {},
        "Rectangle 3": {},
        "Rectangle 4": {},
        "Rectangle 5": {},
        Union: {},
        Logo: {},
      },
      variantValues: { background: "White" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="31.415271759033203px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="25.132213592529297px"
      padding="25.132213592529297px 25.132213592529297px 25.132213592529297px 25.132213592529297px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Logo")}
      {...rest}
    >
      <Icon
        width="183.36px"
        height="177.09px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 183.36199951171875,
          height: 177.0874481201172,
        }}
        paths={[
          {
            d: "M60.6657 38.8078C57.3334 35.5228 57.3334 30.1969 60.6657 26.9119L85.4661 2.46371C88.7984 -0.821237 94.2011 -0.821237 97.5334 2.46371L122.334 26.9119C125.666 30.1969 125.666 35.5228 122.334 38.8078L97.5334 63.256C94.2011 66.541 88.7984 66.541 85.4661 63.256L60.6657 38.8078ZM86.9523 91.5906C85.2861 89.9482 85.2861 87.2852 86.9523 85.6427L88.5994 84.0189C90.2656 82.3765 92.9669 82.3765 94.633 84.0189L96.2802 85.6427C97.9463 87.2852 97.9463 89.9482 96.2802 91.5906L94.633 93.2144C92.9669 94.8569 90.2656 94.8569 88.5994 93.2144L86.9523 91.5906ZM119.195 82.7946C115.862 86.0796 115.862 91.4055 119.195 94.6905L143.995 119.139C147.327 122.424 152.73 122.424 156.062 119.139L180.863 94.6905C184.195 91.4055 184.195 86.0796 180.863 82.7946L156.062 58.3464C152.73 55.0615 147.327 55.0615 143.995 58.3464L119.195 82.7946ZM2.49921 94.6277C-0.833069 91.3427 -0.833069 86.0168 2.49921 82.7318L27.2997 58.2836C30.632 54.9986 36.0347 54.9986 39.3669 58.2836L64.1674 82.7318C67.4997 86.0168 67.4997 91.3427 64.1674 94.6277L39.3669 119.076C36.0347 122.361 30.632 122.361 27.2997 119.076L2.49921 94.6277ZM60.6657 138.28C57.3334 141.565 57.3334 146.891 60.6657 150.176L85.4661 174.624C88.7984 177.909 94.2011 177.909 97.5334 174.624L122.334 150.176C125.666 146.891 125.666 141.565 122.334 138.28L97.5334 113.831C94.2011 110.547 88.7984 110.547 85.4661 113.831L60.6657 138.28Z",
            fill: "rgba(33,150,243,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Union")}
      >
        <View
          width="51.77px"
          height="51.77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          borderRadius="8.472448348999023px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(33,150,243,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <View
          width="10.79px"
          height="10.79px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          borderRadius="4.236224174499512px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(33,150,243,1)"
          {...getOverrideProps(overrides, "Rectangle 6")}
        ></View>
        <View
          width="51.77px"
          height="51.77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          borderRadius="8.472448348999023px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(33,150,243,1)"
          {...getOverrideProps(overrides, "Rectangle 3")}
        ></View>
        <View
          width="51.77px"
          height="51.77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          borderRadius="8.472448348999023px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(33,150,243,1)"
          {...getOverrideProps(overrides, "Rectangle 4")}
        ></View>
        <View
          width="51.77px"
          height="51.77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="relative"
          borderRadius="8.472448348999023px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(33,150,243,1)"
          {...getOverrideProps(overrides, "Rectangle 5")}
        ></View>
      </Icon>
    </Flex>
  );
}
