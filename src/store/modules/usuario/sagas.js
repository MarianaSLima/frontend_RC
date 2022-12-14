import Api from "../../../services/api";
import {loginFailure, loginSuccess, registerFailure, registerSuccess, updateFailure, updateSuccess} from "./actions";
import {all, put, takeLatest} from 'redux-saga/effects';

async function logIn(email, password) {
    const data = JSON.stringify({
        email,
        password
    });
    const response = await Api.post('/user/signin', data);
    return response.data.data;
    
}

//implementar essse
async function signUp(nome, sobrenome, fotoUser, datanasc, email, password, passwordCompare){
    const data = JSON.stringify({
        nome,
        sobrenome,
        fotoUser,
        datanasc,
        email,
        password, 
        passwordCompare
    });
    
    const response = await Api.post('/user/signup', data);
    return response.data;
}

async function updade(id, nome, sobrenome, datanasc, email){
    const data = JSON.stringify({
        nome,
        sobrenome,
        datanasc,
        email
    });
    const response = await Api.put(`/user/${id}`, data);
    return response.data.data;
}

function* logInWithCredentials({credentials}){
    try{
        const user = yield logIn(credentials.email, credentials.password);
        yield put(loginSuccess(user));
    } catch(error){
        yield put(loginFailure(error));
    }
}

//esse aqui
function* registerWithCredentials({credentials}){
    const {nome, sobrenome, fotoUser, datanasc, email, password, passwordCompare} = credentials;
    try{
        const user = yield signUp(nome, sobrenome, fotoUser, datanasc, email, password, passwordCompare);
        console.log(user);
        yield put(registerSuccess(user));
    }catch(error){
        yield put(registerFailure(error));
    }
}

function* updateWithCredentials({credentials}){
    const{id, nome, sobrenome, datanasc, email} = credentials;
    try{
        const user = yield updade(id, nome, sobrenome, datanasc, email);
        yield put(updateSuccess(user));
    }catch(error){
        yield put(updateFailure(error));
    }
}
//fala qual função vai disparar quando a ação for executada

export default all([
    takeLatest("@usuario/LOGIN_START", logInWithCredentials),
    takeLatest("@usuario/REGISTER_START", registerWithCredentials),
    takeLatest("@usuario/UPDATE_START", updateWithCredentials),
]);