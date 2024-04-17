/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ArrowRight2OverridesProps = {
    ArrowRight2?: PrimitiveOverrideProps<ViewProps>;
    "Iconly/Bold/Arrow---Right-2"?: PrimitiveOverrideProps<ViewProps>;
    "Arrow---Down-2"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ArrowRight2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ArrowRight2OverridesProps | undefined | null;
}>;
export default function ArrowRight2(props: ArrowRight2Props): React.ReactElement;
