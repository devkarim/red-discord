export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_APP_ID: string;
      DISCORD_PUBLIC_KEY: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      DISCORD_TOKEN: string;
      DISCORD_DEV_GUILD_ID: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}
