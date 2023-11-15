import { WebPlugin } from '@capacitor/core';

import type { CustomLoggerPlugin } from './definitions';

export class CustomLoggerWeb extends WebPlugin implements CustomLoggerPlugin {
  async log(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
