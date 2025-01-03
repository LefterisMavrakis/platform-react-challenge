import { TheCatAPI } from "@thatapicompany/thecatapi";
import axios from "axios";

const theCatAPI = new TheCatAPI(
  "live_pm6zrVEpUApZROPoyd9Z2hdqRhvjwYAclNksGqPrfRtbc3TFeKmLTisfZO5Mexa7"
);

export const catApiAxiosClient = axios.create({
  baseURL: "https://api.thecatapi.com/",
  headers: {
    "x-api-key":
      "live_pm6zrVEpUApZROPoyd9Z2hdqRhvjwYAclNksGqPrfRtbc3TFeKmLTisfZO5Mexa7",
  },
});

export default theCatAPI;
