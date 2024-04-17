/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HomeProps } from "./Home";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { NumberNotificationBadgeProps } from "./NumberNotificationBadge";
import { ArrowRight2Props } from "./ArrowRight2";
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
export declare type NavItemOverridesProps = {
    NavItem?: PrimitiveOverrideProps<FlexProps>;
    "Leading Icon + Nav Link"?: PrimitiveOverrideProps<FlexProps>;
    "Leading Icon"?: PrimitiveOverrideProps<FlexProps>;
    Home?: HomeProps;
    "Nav Link"?: PrimitiveOverrideProps<FlexProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
    "Trailing Icon + Badge"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<FlexProps>;
    "Number Notification Badge"?: NumberNotificationBadgeProps;
    "Trailing Icon"?: PrimitiveOverrideProps<FlexProps>;
    "Arrow - Right 2"?: ArrowRight2Props;
} & EscapeHatchProps;
export declare type NavItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    badge?: "False" | "True";
    icon?: "True";
    mode?: "Dark" | "Light";
    navLink?: "False" | "True";
    state?: "Active" | "Default";
    trailingIcon?: "False" | "True";
} & {
    overrides?: NavItemOverridesProps | undefined | null;
}>;
export default function NavItem(props: NavItemProps): React.ReactElement;
