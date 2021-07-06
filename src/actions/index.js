export const REQUEST_DATA_SERVER = Symbol('REQUEST_DATA_SERVER');
export const DELETE_DATA_SERVER = Symbol('DELETE_DATA_SERVER');


export const requestDataServer = () => ({
  type: REQUEST_DATA_SERVER
});
export const deleteDataServer = () => ({
    type: DELETE_DATA_SERVER
});
  