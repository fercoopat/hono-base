export enum ROLE {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
}

export const ROLES_VALUES = [
  ROLE.ADMIN,
  ...Object.values(ROLE)?.filter((r) => r !== ROLE.ADMIN),
] as const;
