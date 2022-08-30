import { AbilityBuilder, Ability } from '@casl/ability'

export const PERMISSIONS = {
  MANAGE: 'manage',
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
}

export const MODEL_NAMES = {
  ALL: 'all',
  NOTES: 'Notes',
  SALES: 'Sales',
  CLIENTS: 'Clients',
  LICENSES: 'Licenses',
  SETTINGS: 'Settings',
  ABOUT: 'About',
}

export function defineAbilitiesForAdmin() {
  const { rules, can } = new AbilityBuilder(Ability)
  can(PERMISSIONS.MANAGE, MODEL_NAMES.ALL)

  return new Ability(rules)
}

export function defineAbilitiesForMod() {
  const { rules, can, cannot } = new AbilityBuilder(Ability)
  can(PERMISSIONS.MANAGE, MODEL_NAMES.NOTES) /* start with full permissions */
  can(PERMISSIONS.MANAGE, MODEL_NAMES.SALES)
  can(PERMISSIONS.MANAGE, MODEL_NAMES.CLIENTS)
  can(PERMISSIONS.MANAGE, MODEL_NAMES.LICENSES)
  can(PERMISSIONS.MANAGE, MODEL_NAMES.SETTINGS)
  can(PERMISSIONS.MANAGE, MODEL_NAMES.ABOUT, ['info'])
  cannot(PERMISSIONS.MANAGE, MODEL_NAMES.ABOUT, ['buyLicense'])
  cannot(PERMISSIONS.CREATE, MODEL_NAMES.NOTES).because(
    'Only Admins can create Notes'
  )
  cannot(PERMISSIONS.DELETE, MODEL_NAMES.NOTES).because(
    'Only Admins can delete Notes'
  )

  return new Ability(rules)
}
