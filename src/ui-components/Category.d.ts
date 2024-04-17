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
export declare type CategoryOverridesProps = {
    Category?: PrimitiveOverrideProps<ViewProps>;
    "Iconly/Bold/Category"?: PrimitiveOverrideProps<ViewProps>;
    Category6151?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CategoryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CategoryOverridesProps | undefined | null;
}>;
export default function Category(props: CategoryProps): React.ReactElement;
