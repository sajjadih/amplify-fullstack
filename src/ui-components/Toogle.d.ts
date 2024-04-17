/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ToogleOverridesProps = {
    Toogle?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    ON?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ToogleProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Dark" | "Light";
} & {
    overrides?: ToogleOverridesProps | undefined | null;
}>;
export default function Toogle(props: ToogleProps): React.ReactElement;
