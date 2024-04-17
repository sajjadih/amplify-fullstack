/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Image(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Image")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="8.33%"
        left="8.33%"
        right="8.33%"
        {...getOverrideProps(overrides, "Iconly/Bold/Image")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Image6171")}
        >
          <Icon
            width="40px"
            height="40px"
            viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
            paths={[
              {
                d: "M28.6676 0C35.4462 0 40 4.75623 40 11.8334L40 28.1666C40 35.2438 35.4462 40 28.6656 40L11.3324 40C4.55379 40 0 35.2438 0 28.1666L0 11.8334C0 4.75623 4.55379 0 11.3324 0L28.6676 0ZM30.8732 21.1001C28.7293 19.7626 27.0741 21.6409 26.6276 22.2415C26.1973 22.8215 25.8272 23.4613 25.437 24.1011C24.4837 25.6801 23.3917 27.5005 21.5012 28.5593C18.754 30.0805 16.6684 28.6791 15.1681 27.6594C14.605 27.2797 14.0579 26.9205 13.5129 26.6811C12.1695 26.1011 10.9608 26.7616 9.16681 29.0402C8.22559 30.2312 7.29241 31.4118 6.34717 32.5882C5.78203 33.2921 5.91678 34.3777 6.67901 34.8483C7.89576 35.5975 9.37999 36 11.0573 36L27.9128 36C28.864 36 29.8173 35.87 30.7264 35.5728C32.7737 34.904 34.3987 33.3726 35.2474 31.3498C35.9634 29.6491 36.3113 27.5851 35.6416 25.8679C35.4184 25.2982 35.0845 24.7678 34.6159 24.3013C33.3871 23.0815 32.2388 21.9422 30.8732 21.1001ZM12.9977 8C10.2404 8 8 10.2435 8 13C8 15.7565 10.2404 18 12.9977 18C15.753 18 17.9954 15.7565 17.9954 13C17.9954 10.2435 15.753 8 12.9977 8Z",
                fill: "rgba(51,63,73,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
