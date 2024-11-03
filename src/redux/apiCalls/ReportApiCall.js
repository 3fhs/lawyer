import axios from "axios"
import { reportAction } from "../slice/Report";


export function reportApi() {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:5000/report");
            dispatch(reportAction.setReport(response.data));
        } catch (error) {
            console.log("error in report", error);
        }
    }
};
