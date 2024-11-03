import axios from "axios"
import { teamAction } from "../slice/TeamSlice";


export function teamApi() {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/team");
            dispatch(teamAction.setTeamSlice(response.data))
        } catch (error) {
            console.log("error here", error);
        }
    }
}