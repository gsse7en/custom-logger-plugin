export interface CustomLoggerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
