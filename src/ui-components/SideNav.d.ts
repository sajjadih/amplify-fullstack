/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBrandProps } from "./NavBrand";
import { NavItemProps } from "./NavItem";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideNavOverridesProps = {
    SideNav?: PrimitiveOverrideProps<FlexProps>;
    "Brand + Nav List"?: PrimitiveOverrideProps<FlexProps>;
    "Nav Brand"?: NavBrandProps;
    "Nav List"?: PrimitiveOverrideProps<FlexProps>;
    "Nav Item81584"?: NavItemProps;
    "Nav Item81594"?: NavItemProps;
    "Nav Item81605"?: NavItemProps;
    "Nav Item81615"?: NavItemProps;
    "Nav Item81625"?: NavItemProps;
    "Nav Item81635"?: NavItemProps;
    "Nav Item81645"?: NavItemProps;
    "Nav Item81655"?: NavItemProps;
    "Nav Item81665"?: NavItemProps;
    "Nav Item81697"?: NavItemProps;
    "Logout + Toogle"?: PrimitiveOverrideProps<FlexProps>;
    "Nav Item115794"?: NavItemProps;
    "Nav Item81744"?: NavItemProps;
} & EscapeHatchProps;
export declare type SideNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Dark" | "Light";
    type?: "Default" | "Minimize";
} & {
    overrides?: SideNavOverridesProps | undefined | null;
}>;
export default function SideNav(props: SideNavProps): React.ReactElement;
