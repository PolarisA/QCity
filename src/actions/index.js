import {ADD, DELETE} from '../constants/config'

export const add = (data) => {
  return {
    data,
    type: ADD
  }
}

export const del = (id) => {
  return {
    id,
    type: DELETE
  }
}
