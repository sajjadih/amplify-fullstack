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
export declare type ChatNotificationOverridesProps = {
    ChatNotification?: PrimitiveOverrideProps<ViewProps>;
    "Iconly/Bold/Chat"?: PrimitiveOverrideProps<ViewProps>;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ChatNotificationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ChatNotificationOverridesProps | undefined | null;
}>;
export default function ChatNotification(props: ChatNotificationProps): React.ReactElement;