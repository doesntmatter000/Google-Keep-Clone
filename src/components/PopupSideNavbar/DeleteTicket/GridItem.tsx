import React from 'react'

type GridItemProps = {
  height: number
}

export const GridItem = ({height}:GridItemProps) => {
  return (
    <div style={{width: "240px", height: `${height}px`, backgroundColor: "rgba(0,0,0, .2)", gridRow: "auto", breakInside: "avoid-column"}}></div>
  )
}
