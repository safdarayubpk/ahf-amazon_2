import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
      role: "USER" | "ADMIN"
    }
  }

  interface User {
    id: string
    email: string
    name?: string | null
    image?: string | null
    role: "USER" | "ADMIN"
  }
} 