declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BUILDER_API_KEY: string;
    }
  }
}

export {}