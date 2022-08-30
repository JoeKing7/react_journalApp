// import { AbilityBuilder, Ability } from '@casl/ability'

// export default function defineAbilityFor(user) {
//   const { can, cannot, rules } = new AbilityBuilder(Ability)

//   // can('read', 'Article');
//   // can('update', 'Article', ['title', 'description'], { authorId: user.id });

//   if (user.isLoggedIn && user.role === 'admin') {
//     can('manage', 'all')
//   }

//   if (user.isLoggedIn && user.role === 'trainer') {
//     can('manage', 'sales')
//     can('manage', 'clients')
//     can('manage', 'licenses')
//     can('manage', 'settings')
//     can('manage', 'about', ['info'])
//     cannot('manage', 'about', ['buyLicense'])
//   }

//   if (user.isLoggedIn && user.role === 'customer') {
//     can('read', 'buy')
//     can('write', 'buy')
//     can('update', 'buy')
//     cannot('delete', 'buy')
//   }

//   return new Ability(rules)
// }

import { AbilityBuilder, Ability } from '@casl/ability'
import { defineAbilitiesForAdmin, defineAbilitiesForMod } from './roles'

const USER_ROLES = {
  ADMIN: 'admin',
  MOD: 'mod',
}

const DEFAULT_ABILITIES = new Ability()

export function getRoleAbilityForUser(role = '') {
  let ability

  switch (role) {
    case USER_ROLES.ADMIN:
      console.log(USER_ROLES.ADMIN)
      ability = defineAbilitiesForAdmin()
      break
    case USER_ROLES.MOD:
      ability = defineAbilitiesForMod()
      break
    default:
      ability = DEFAULT_ABILITIES
      break
  }
  return ability
}
