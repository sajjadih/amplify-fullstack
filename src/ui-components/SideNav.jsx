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
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import { Flex } from "@aws-amplify/ui-react";
export default function SideNav(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Nav Brand": {},
        "Nav Item81584": {},
        "Nav Item81594": {},
        "Nav Item81605": {},
        "Nav Item81615": {},
        "Nav Item81625": {},
        "Nav Item81635": {},
        "Nav Item81645": {},
        "Nav Item81655": {},
        "Nav Item81665": {},
        "Nav Item81697": {},
        "Nav List": {},
        "Brand + Nav List": {},
        "Nav Item115794": {},
        "Nav Item81744": {},
        "Logout + Toogle": {},
        SideNav: {},
      },
      variantValues: { mode: "Light", type: "Default" },
    },
    {
      overrides: {
        "Nav Brand": { mode: "Dark" },
        "Nav Item81584": { mode: "Dark" },
        "Nav Item81594": { mode: "Dark" },
        "Nav Item81605": { mode: "Dark" },
        "Nav Item81615": { mode: "Dark" },
        "Nav Item81625": { mode: "Dark" },
        "Nav Item81635": { mode: "Dark" },
        "Nav Item81645": { mode: "Dark" },
        "Nav Item81655": { mode: "Dark" },
        "Nav Item81665": { mode: "Dark" },
        "Nav Item81697": { mode: "Dark" },
        "Nav List": {},
        "Brand + Nav List": {},
        "Nav Item115794": { mode: "Dark" },
        "Nav Item81744": {},
        "Logout + Toogle": {},
        SideNav: { height: "1036px", backgroundColor: "rgba(3,28,48,1)" },
      },
      variantValues: { mode: "Dark", type: "Default" },
    },
    {
      overrides: {
        "Nav Brand": { mode: "Dark" },
        "Nav Item81584": { navLink: "False", mode: "Dark" },
        "Nav Item81594": { navLink: "False", mode: "Dark" },
        "Nav Item81605": { navLink: "False", mode: "Dark" },
        "Nav Item81615": { navLink: "False", mode: "Dark" },
        "Nav Item81625": { badge: "False", navLink: "False", mode: "Dark" },
        "Nav Item81635": { navLink: "False", mode: "Dark" },
        "Nav Item81645": { navLink: "False", mode: "Dark" },
        "Nav Item81655": { navLink: "False", mode: "Dark" },
        "Nav Item81665": { navLink: "False", mode: "Dark" },
        "Nav Item81697": { navLink: "False", mode: "Dark" },
        "Nav List": {},
        "Brand + Nav List": { justifyContent: "center", alignItems: "center" },
        "Nav Item115794": {
          trailingIcon: "False",
          navLink: "False",
          mode: "Dark",
        },
        "Nav Item81744": { navLink: "False" },
        "Logout + Toogle": {},
        SideNav: { height: "1036px", backgroundColor: "rgba(3,28,48,1)" },
      },
      variantValues: { mode: "Dark", type: "Minimize" },
    },
    {
      overrides: {
        "Nav Brand": {},
        "Nav Item81584": { navLink: "False" },
        "Nav Item81594": { navLink: "False" },
        "Nav Item81605": { navLink: "False" },
        "Nav Item81615": { navLink: "False" },
        "Nav Item81625": { badge: "False", navLink: "False" },
        "Nav Item81635": { navLink: "False" },
        "Nav Item81645": { navLink: "False" },
        "Nav Item81655": { navLink: "False" },
        "Nav Item81665": { navLink: "False" },
        "Nav Item81697": { navLink: "False" },
        "Nav List": {},
        "Brand + Nav List": { justifyContent: "center", alignItems: "center" },
        "Nav Item115794": { trailingIcon: "False", navLink: "False" },
        "Nav Item81744": { navLink: "False" },
        "Logout + Toogle": {},
        SideNav: { alignItems: "center" },
      },
      variantValues: { mode: "Light", type: "Minimize" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="79px"
      direction="column"
      width="unset"
      height="1068px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="32px 24px 32px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "SideNav")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Brand + Nav List")}
      >
        <NavBrand
          display="flex"
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          icon="True"
          text="False"
          mode="Light"
          {...getOverrideProps(overrides, "Nav Brand")}
        ></NavBrand>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Nav List")}
        >
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81584")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            backgroundColor="rgba(233,245,254,1)"
            state="Active"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81594")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81605")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81615")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="True"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81625")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81635")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81645")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81655")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81665")}
          ></NavItem>
          <NavItem
            display="flex"
            gap="0"
            direction="row"
            width="277px"
            height="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 8px 0px 8px"
            state="Default"
            icon="True"
            badge="False"
            trailingIcon="False"
            navLink="True"
            mode="Light"
            {...getOverrideProps(overrides, "Nav Item81697")}
          ></NavItem>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Logout + Toogle")}
      >
        <NavItem
          display="flex"
          gap="0"
          direction="row"
          width="277px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 8px 0px 8px"
          state="Default"
          icon="True"
          badge="False"
          trailingIcon="True"
          navLink="True"
          mode="Light"
          {...getOverrideProps(overrides, "Nav Item115794")}
        ></NavItem>
        <NavItem
          display="flex"
          gap="0"
          direction="row"
          width="277px"
          height="unset"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 8px 0px 8px"
          state="Active"
          icon="True"
          badge="False"
          trailingIcon="False"
          navLink="True"
          mode="Dark"
          {...getOverrideProps(overrides, "Nav Item81744")}
        ></NavItem>
      </Flex>
    </Flex>
  );
}
