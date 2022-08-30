import { useSelector } from 'react-redux'
import { getRoleAbilityForUser } from './ability'

export function useAbility(action, subject) {
  const { role } = useSelector((state) => state.auth)

  return getRoleAbilityForUser(role).can(action, subject)
}
