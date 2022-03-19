import React from 'react'
import classes from './Filter.module.css'
import InputGrey from '../../UI/InputGrey/InputGrey'
import SelectGrey from '../../UI/SelectGrey/SelectGrey'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectGrey
        defaultValue="Sorting"
        options={[
          { name: 'By name', value: 'title' },
          { name: 'By description', value: 'body' },
        ]}
        value={filter.sort}
        onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
      />
    </div>
  )
}

export default Filter
