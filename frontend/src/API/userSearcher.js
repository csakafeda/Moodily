export const userSearcher = (id) => {
    return fetch(`/api/user/${id}`)
        .then((res) => res.json());
}