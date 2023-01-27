import axios from "axios";

const API_URL = "http://localhost:3000";
export const RoomService = {

    createNewRoom: (name, userId, url) => {
        return axios.post(`${API_URL}/api/v1/rooms/`, {name, userId, url});
    }

}
