import React from 'react'
import Button from 'components/Button'

const Select = () => {
  return (
    <div className="flex flex-col my-2">
      <div className="flex flex-nowrap">
        <Button type="button" className="">
          Thin
        </Button>
        <Button type="button" className="">
          Classic
        </Button>
      </div>
      <div className="flex flex-nowrap">
        <Button type="button" className="">
          26 cm
        </Button>
        <Button type="button" className="">
          36 cm
        </Button>
        <Button type="button" className="">
          40 cm
        </Button>
      </div>
    </div>
  )
}

export default Select