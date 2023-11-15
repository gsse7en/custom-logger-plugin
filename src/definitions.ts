export interface CustomLoggerPlugin {
  log(options: { value: string }): Promise<{ value: string }>;
}
