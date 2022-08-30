import React from 'react'
// import { createCanBoundTo } from '@casl/react'
import { connect, useSelector } from 'react-redux'
import { Can } from '@casl/react'

import { getRoleAbilityForUser } from './ability'

const CustomCan = ({ children, ...props }) => {
  const { role } = useSelector(({ auth }) => auth)

  return (
    <Can {...props} ability={getRoleAbilityForUser(role)}>
      {children}
    </Can>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps)(CustomCan)
// export const Can = createCanBoundTo(getRoleAbilityForUser('mod'))
