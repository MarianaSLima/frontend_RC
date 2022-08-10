export const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 1000);
    },
    signup(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 1000);
    }
};

export const fakePost = {
    posts: [],   
    getPosts(cb) {
        fakePost.posts = [{
            id: 1, 
            data: '11/07/2022 13:30:00', 
            publicacao: 'Falta de iluminacao',
            latitude: 0,
            longitude: 0, 
            imgs: [''] , 
            curtidas: 10, 
            comentarios: [{
                usuario: 'adolfo',
                usuarioImg: '',
                comentario: 'realmente muito escuro precisa de iluminação'
            },
            {
                usuario: 'adolfo',
                usuarioImg: '',
                comentario: 'realmente muito escuro precisa de iluminação'
            },
            {
                usuario: 'adolfo',
                usuarioImg: '',
                comentario: 'realmente muito escuro precisa de iluminação'
            }
            ],
            usuario: 'isaac',
            usuarioImg: ''
            },
            {
                id: 1, 
                data: '11/07/2022 13:30:00', 
                publicacao: 'Falta de iluminacao',
                latitude: 0,
                longitude: 0, 
                imgs: [''] , 
                curtidas: 10, 
                comentarios: [{
                    usuario: 'adolfo',
                    usuarioImg: '',
                    comentario: 'realmente muito escuro precisa de iluminação'
                },
                {
                    usuario: 'adolfo',
                    usuarioImg: '',
                    comentario: 'realmente muito escuro precisa de iluminação'
                },
                {
                    usuario: 'adolfo',
                    usuarioImg: '',
                    comentario: 'realmente muito escuro precisa de iluminação'
                }
                ],
                usuario: 'isaac',
                usuarioImg: ''
                },
                {
                    id: 1, 
                    data: '11/07/2022 13:30:00', 
                    publicacao: 'Falta de iluminacao',
                    latitude: 0,
                    longitude: 0, 
                    imgs: [''] , 
                    curtidas: 10, 
                    comentarios: [{
                        usuario: 'adolfo',
                        usuarioImg: '',
                        comentario: 'realmente muito escuro precisa de iluminação'
                    },
                    {
                        usuario: 'adolfo',
                        usuarioImg: '',
                        comentario: 'realmente muito escuro precisa de iluminação'
                    },
                    {
                        usuario: 'adolfo',
                        usuarioImg: '',
                        comentario: 'realmente muito escuro precisa de iluminação'
                    }
                    ],
                    usuario: 'isaac',
                    usuarioImg: ''
                    }];
        setTimeout(cb, 1000);
    }
}