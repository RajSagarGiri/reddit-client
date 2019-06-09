export const fetchData = key => {
    return localStorage.getItem(key)
};

export const updateData = (key, data) =>{
    localStorage.setItem(key, JSON.stringify(data))
}