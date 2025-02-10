import {
  ALL_LOWERCASE_NO_WHITESPACES,
  SECURE_PASSWORD,
} from '@/config/regex.js';
import { ROLE, ROLES_VALUES } from '@/config/roles.js';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

export const UserSchema = z.object({
  username: z
    .string()
    .regex(ALL_LOWERCASE_NO_WHITESPACES, 'No whitespaces or capital letters.'),
  email: z.string().email(),
  roles: z.array(z.enum(ROLES_VALUES)).optional().default([ROLE.GUEST]),
});

export type User = z.infer<typeof UserSchema>;

export const RegisterUserSchema = UserSchema.extend({
  password: z
    .string()
    .regex(
      SECURE_PASSWORD,
      'At Least 8 Characters with at Least One Uppercase, One Lowercase, One Number, and One Special Character'
    ),
});

export const registerUserValidator = zValidator('json', RegisterUserSchema);

export type RegisterUserPayload = z.infer<typeof RegisterUserSchema>;

export const LoginUserSchema = RegisterUserSchema.omit({
  roles: true,
  username: true,
});

export type LoginUserPayload = z.infer<typeof LoginUserSchema>;
