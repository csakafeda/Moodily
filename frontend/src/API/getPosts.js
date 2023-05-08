export const getAllPost = () => {
    return fetch(`/api`)
        .then((res) => res.json());
}