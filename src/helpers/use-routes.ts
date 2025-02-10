import type { App } from '@/types/app.type.js';

export const useRoutes = (app: App): void => {
  app.basePath('/api');
};
