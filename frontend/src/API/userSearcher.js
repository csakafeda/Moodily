export const userSearcher = (id) => {
    return fetch(`/api/users/${id}`)
        .then((res) => res.json());
}