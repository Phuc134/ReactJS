import { identity } from "lodash";
import axios from "../utils/axiosCustomize";
const postCreatNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const getListUsers = () => {
    return axios.get('api/v1/participant/all');
}

const putUpdateNewUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id)
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}

const deleteDeleteUser = (id) => {
    return axios.delete('api/v1/participant', { data: { id: id } });
}
export { postCreatNewUser, getListUsers, putUpdateNewUser, deleteDeleteUser }