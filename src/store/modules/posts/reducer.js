//estado inicial do store

const initialState = {
    posts: null,
    error: null,
}

//recebe a ação e carrega o currentUser
function posts(state=initialState, action) {
    switch(action.type) {
        case '@usuario/LISTPOST_SUCCESS':
            return{
                ...state,
                post: action.user,
                error: null,
            };
        case '@usuario/LISTPOST_FAILURE':
            return {
                ...state,
                error: action.error,
            };
            

        default:
            return state;
    }
}

export default usuario;