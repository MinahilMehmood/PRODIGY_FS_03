import axios from "axios";

const BASE_URL = "http://localhost:5000/";
let TOKEN = "";

const persistedRoot = localStorage.getItem("persist:root");
if (persistedRoot) {
    try {
        const persistedUser = JSON.parse(JSON.parse(persistedRoot).user);
        TOKEN = persistedUser?.currentUser?.accessToken || "";
    } catch (error) {
        console.error("Error parsing persisted user:", error);
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
