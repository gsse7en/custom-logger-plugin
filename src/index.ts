import { registerPlugin } from '@capacitor/core';

import type { CustomLoggerPlugin } from './definitions';

const CustomLogger = registerPlugin<CustomLoggerPlugin>('CustomLogger', {
  web: () => import('./web').then(m => new m.CustomLoggerWeb()),
});

export * from './definitions';
export { CustomLogger };
