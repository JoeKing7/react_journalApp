import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { Can } from '@casl/react'
// import { useAbility } from '../../casl/useAbility'

import { getRoleAbilityForUser } from '../../casl/ability'
import CustomCan from '../../casl/Can'

const NothingSelected = () => {
  //   const getAbi = useAbility('read', 'Notes') //REMOVE use . is a normal function

  return (
    <div className="nothing_main-content">
      <p>
        Select something
        <br></br>
        or create an entry!
      </p>
      {/* <Can I="read" a="Sales">
        <i className="fas fa-star fa-4x mt-5"></i>
      </Can> */}
      <CustomCan I="read" a="Notes">
        I can read notes
      </CustomCan>
      <br />
      <CustomCan not I="create" a="Notes">
        I cannot create notes
      </CustomCan>
    </div>
  )
}

export default NothingSelected
