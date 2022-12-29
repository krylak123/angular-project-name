export const ROLES = {
  USER: 'USER',
  MENTOR: 'MENTOR',
} as const;

export type Roles = keyof typeof ROLES;
