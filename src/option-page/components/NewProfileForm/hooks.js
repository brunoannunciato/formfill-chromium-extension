const useAddNewField = (fieldsIds, setFieldsId) => {
  const lastId = fieldsIds[fieldsIds.length - 1]

  setFieldsId([...fieldsIds, lastId + 1])
}

const deleteField = (fieldsIds, setFieldsId, fieldId) => {
  const newFieldsArr = fieldsIds.filter(id => id !== fieldId)

  setFieldsId(newFieldsArr)
}

export default {
  useAddNewField,
  deleteField
}