export { default } from "next-auth/middleware";

// wont be accessible when logged out. 
export const config = {matcher: ['/me'] }