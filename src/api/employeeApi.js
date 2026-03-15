const API_URL = "https://backend.jotish.in/backend_dev/gettabledata.php";

/**
 * Fetch employee table data from backend
 * API requires POST request with credentials payload
 */
export const fetchEmployees = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "test",
        password: "123456",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch employee data");
    }

    const data = await response.json();
    console.log("API Response:", data.TABLE_DATA.data); // Debug log

    return data.TABLE_DATA.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
