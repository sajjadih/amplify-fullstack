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
export declare type FilterOverridesProps = {
    Filter?: PrimitiveOverrideProps<ViewProps>;
    "Iconly/Bold/Filter"?: PrimitiveOverrideProps<ViewProps>;
    Filter6179?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FilterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FilterOverridesProps | undefined | null;
}>;
export default function Filter(props: FilterProps): React.ReactElement;
