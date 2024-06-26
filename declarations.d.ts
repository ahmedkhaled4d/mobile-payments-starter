declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-config' {
  export interface NativeConfig {
    GOOGLE_MAPS_API_KEY?: string;
    API_URL?: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
