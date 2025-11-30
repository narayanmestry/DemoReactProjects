export const getUserService = async () => {
    let url = "https://jsonplaceholder.typicode.com/users"; 
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
}