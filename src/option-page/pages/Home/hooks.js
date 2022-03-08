export const useCloseModal = (stateSetter) => {
  stateSetter(false)
}

export const useOpenModal  = (stateSetter) => {
  stateSetter(true)
}