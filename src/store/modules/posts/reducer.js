//estado inicial do store

const initialState = {
    posts: null,
    error: null,
}

//recebe a ação e carrega o currentUser
function posts(state = initialState, action) {
    switch (action.type) {
        case '@usuario/LISTPOST_SUCCESS':
            return {
                ...state,
                post: action.user,
                error: action.user.error,
            };
        case '@usuario/LISTPOST_FAILURE':
            return {
                ...state,
                error: action.error,
            };
        case '@usuario/REGISTERPOST_FAILURE':
            return {
                ...state,
                currentUser: action.user.data,
                error: action.user.error,
            };

        default:
            return state;
    }
}

export default usuario;