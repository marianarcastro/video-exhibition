import axios from "axios";

const API_URL = "http://localhost:3000";
export const UserService = {

    createNewUser: (userName, name) => {
        return axios.post(`${API_URL}/api/v1/users/`, {userName, name}).then((response) => response.data);
    }

}
