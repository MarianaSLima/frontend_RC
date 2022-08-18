//credentials login e senha 

export const listPostStart = (dados) => ({
    type: '@usuario/LISTPOST_START',
    dados,
});

export const listPostSuccess = (posts) =>({
    type: '@usuario/LISTPOST_SUCCESS',
    posts,
});

export const listPostFailure = (error) => ({
    type: '@usuario/LISTPOST_FAILURE',
    error,
});
export const registerPostStart = (dados) => ({
    type: '@usuario/REGISTERPOST_START',
    dados,
});
export const registerPostSuccess = (posts) =>({
    type: '@usuario/REGISTERPOST_SUCCESS',
    posts,
});

export const registerPostFailure = (error) => ({
    type: '@usuario/REGISTERPOST_FAILURE',
    error,
});


