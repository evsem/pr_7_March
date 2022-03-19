import React from 'react'
import ButtonNavBrown from '../../UI/Buttons/ButtonNavBrown/ButtonNavBrown'
import { getPageArray } from '../../Utils/forPages'
import classes from './Pagination.module.css'

const Pagination = ({ changePage, totalCount }) => {
  let pageArray = getPageArray(totalCount)
  return (
    <div className={classes.wrapper}>
      {pageArray.map((page) => (
        <ButtonNavBrown key={page} onClick={() => changePage(page)}>
          {page}
        </ButtonNavBrown>
      ))}
    </div>
  )
}

export default Pagination
