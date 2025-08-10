const API_BASE_URL = "https://api.videosdk.live";
const VIDEOSDK_TOKEN = process.env.REACT_APP_VIDEOSDK_TOKEN;
const API_AUTH_URL = process.env.REACT_APP_AUTH_URL;

export const getToken = async () => {
  try {
    if (VIDEOSDK_TOKEN && API_AUTH_URL) {
      console.warn(
        "Both REACT_APP_VIDEOSDK_TOKEN and REACT_APP_AUTH_URL are set. Preferring REACT_APP_VIDEOSDK_TOKEN."
      );
      return VIDEOSDK_TOKEN;
    } else if (VIDEOSDK_TOKEN) {
      console.log("Using VideoSDK token from environment variables");
      return VIDEOSDK_TOKEN;
    } else if (API_AUTH_URL) {
      console.log("Fetching token from auth server:", API_AUTH_URL);
      const res = await fetch(`${API_AUTH_URL}/get-token`, { method: "GET" });
      if (!res.ok) throw new Error(`Auth server error (${res.status})`);
      const { token } = await res.json();
      return token;
    } else {
      throw new Error("Missing REACT_APP_VIDEOSDK_TOKEN or REACT_APP_AUTH_URL");
    }
  } catch (err) {
    console.error("Error getting token:", err);
    return undefined;
  }
};

export const createMeeting = async ({ token }) => {
  try {
    const url = `${API_BASE_URL}/v2/rooms`;
    const options = {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
    };

    console.log("Creating meeting with token:", token ? "Token present" : "No token");
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.roomId) {
      console.log("Meeting created successfully:", data.roomId);
      return { meetingId: data.roomId, err: null };
    } else {
      console.error("Failed to create meeting:", data.error);
      return { meetingId: null, err: data.error };
    }
  } catch (error) {
    console.error("Error creating meeting:", error);
    return { meetingId: null, err: error.message };
  }
};

export const validateMeeting = async ({ roomId, token }) => {
  try {
    const url = `${API_BASE_URL}/v2/rooms/validate/${roomId}`;

    const options = {
      method: "GET",
      headers: { Authorization: token, "Content-Type": "application/json" },
    };

    console.log("Validating meeting:", roomId);
    const response = await fetch(url, options);

    if (response.status === 400) {
      const data = await response.text();
      console.error("Meeting validation failed:", data);
      return { meetingId: null, err: data };
    }

    const data = await response.json();

    if (data.roomId) {
      console.log("Meeting validated successfully:", data.roomId);
      return { meetingId: data.roomId, err: null };
    } else {
      console.error("Meeting validation error:", data.error);
      return { meetingId: null, err: data.error };
    }
  } catch (error) {
    console.error("Error validating meeting:", error);
    return { meetingId: null, err: error.message };
  }
};
