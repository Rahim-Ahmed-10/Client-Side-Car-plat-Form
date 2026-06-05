import { jwtClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

// ১. কনফিগারেশনসহ মূল authClient তৈরি করুন
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL, 
  plugins: [
    jwtClient(), 
  ]
});

// ২. ভুলভাবে আবার কল না করে, তৈরি করা authClient থেকেই ফাংশনগুলো এক্সপোর্ট করুন
export const { signIn, signUp, useSession } = authClient;