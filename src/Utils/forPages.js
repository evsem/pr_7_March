export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPageArray = (totalCount) => {
  let pageArray = []
  for (let i = 0; i < totalCount; i++) {
    pageArray.push(i + 1)
  }
  return pageArray
}
