import { createAccessControl } from 'better-auth/plugins/access';
import { adminAc, defaultStatements } from 'better-auth/plugins/admin/access';

/**
 * make sure to use `as const` so typescript can infer the type correctly
 */
const statement = {
  ...defaultStatements,
  // project: ['create', 'share', 'update', 'delete'],
  shift: ['create', 'share', 'update', 'delete'],
  jobCreate: ['create', 'share', 'update', 'delete', 'publish'],
  jobApply: ['apply', 'withdraw'],
  job: ['delete', 'publish'],
} as const;

export const ac = createAccessControl(statement);

export const admin = ac.newRole({
  // project: ['create', 'update'],
  shift: ['update', 'delete'],
  ...adminAc.statements,
});

export const user = ac.newRole({
  // project: ['create'],
  shift: ['create', 'share', 'update'],
});

export const owner = ac.newRole({
  // project: ['create', 'update', 'delete'],
  shift: ['update', 'delete'],
});

export const nurse = ac.newRole({
  shift: ['create', 'share', 'update'],
});

// export const myCustomRole = ac.newRole({
//   // project: ['create', 'update', 'delete'],
//   shift: ['create', 'update', 'delete'],
//   user: ['ban'],
// });
