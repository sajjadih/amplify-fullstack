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
import Home from "./Home";
import { Flex, Text } from "@aws-amplify/ui-react";
import NumberNotificationBadge from "./NumberNotificationBadge";
import ArrowRight2 from "./ArrowRight2";
export default function NavItem(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: {},
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "True",
        trailingIcon: "True",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { color: "rgba(255,255,255,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: { backgroundColor: "rgba(102,122,138,1)" },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "True",
        trailingIcon: "True",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(93,114,133,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "True",
        trailingIcon: "True",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(239,242,244,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(239,242,244,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "True",
        trailingIcon: "True",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(93,114,133,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: { display: "none" },
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "False",
        trailingIcon: "True",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(239,242,244,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: { display: "none" },
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "False",
        trailingIcon: "True",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(93,114,133,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": { display: "none" },
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "True",
        trailingIcon: "False",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(239,242,244,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(239,242,244,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": { display: "none" },
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "True",
        trailingIcon: "False",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(93,114,133,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: { justifyContent: "flex-start" },
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(239,242,244,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: { justifyContent: "flex-start" },
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(93,114,133,1)" },
        "Nav Link": { display: "none" },
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: { width: "unset", justifyContent: "flex-start" },
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "False",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "400", color: "rgba(93,114,133,1)" },
        "Nav Link": { display: "none" },
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": { backgroundColor: "rgba(233,245,254,1)" },
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: { width: "unset", justifyContent: "flex-start" },
      },
      variantValues: {
        state: "Default",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "False",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: {},
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: { display: "none" },
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "False",
        trailingIcon: "True",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { color: "rgba(255,255,255,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: { display: "none" },
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": {},
        NavItem: { backgroundColor: "rgba(102,122,138,1)" },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "False",
        trailingIcon: "True",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: {},
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": { display: "none" },
        "Trailing Icon + Badge": {},
        NavItem: {},
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "True",
        trailingIcon: "False",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { color: "rgba(255,255,255,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": { display: "none" },
        "Trailing Icon + Badge": {},
        NavItem: { backgroundColor: "rgba(102,122,138,1)" },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "True",
        trailingIcon: "False",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: {},
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: { justifyContent: "flex-start" },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "True",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { color: "rgba(255,255,255,1)" },
        "Nav Link": {},
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: {
          justifyContent: "flex-start",
          backgroundColor: "rgba(102,122,138,1)",
        },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "True",
        mode: "Dark",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "500", letterSpacing: "0px" },
        "Nav Link": { display: "none" },
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: { width: "unset", justifyContent: "flex-start" },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "False",
        mode: "Light",
      },
    },
    {
      overrides: {
        Home: {},
        "Leading Icon": {},
        Dashboard: { fontWeight: "500", letterSpacing: "0px" },
        "Nav Link": { display: "none" },
        "Leading Icon + Nav Link": {},
        "Number Notification Badge": {},
        Badge: {},
        "Arrow - Right 2": {},
        "Trailing Icon": {},
        "Trailing Icon + Badge": { display: "none" },
        NavItem: {
          width: "unset",
          justifyContent: "flex-start",
          backgroundColor: "rgba(102,122,138,1)",
        },
      },
      variantValues: {
        state: "Active",
        icon: "True",
        badge: "False",
        trailingIcon: "False",
        navLink: "False",
        mode: "Dark",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="277px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="0px 8px 0px 8px"
      backgroundColor="rgba(233,245,254,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavItem")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Leading Icon + Nav Link")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          display="flex"
          {...getOverrideProps(overrides, "Leading Icon")}
        >
          <Home
            width="32px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Home")}
          ></Home>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          display="flex"
          {...getOverrideProps(overrides, "Nav Link")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(12,127,218,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dashboard"
            {...getOverrideProps(overrides, "Dashboard")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Trailing Icon + Badge")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Badge")}
        >
          <NumberNotificationBadge
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Number Notification Badge")}
          ></NumberNotificationBadge>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Trailing Icon")}
        >
          <ArrowRight2
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Arrow - Right 2")}
          ></ArrowRight2>
        </Flex>
      </Flex>
    </Flex>
  );
}
