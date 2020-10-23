import axios from 'axios';
import URLs from './URLs';

const appkey='Q_A_Q_1590927055348'
const ajax=axios.create({
    baseURL:URLs.baseURL,
    params:{
        appkey,
    }
})
ajax.interceptors.response.use((data)=>{
    const newData = data.data;
    if(newData.status == 'success'){
        return newData;
    }
    return Promise.reject(newData);
})
const login = (data)=>ajax.post(URLs.login,`appkey=${appkey}&${data}`);
const logon = (data)=>ajax.post(URLs.logon,`appkey=${appkey}&${data}`);
const pages = (page,size)=>ajax.get(URLs.page,{
    params:{
        page,
        size,
    }
});
const model = (modelStu)=>ajax.get(URLs.model,{
    params:{
        ...modelStu,
    }
});
const del = (sNo)=>ajax.get(URLs.del,{
    params:{
        sNo,
    }
});
const stuAdd = (options)=>ajax.get(URLs.addStu,{
    params:{
        ...options,
    }
})

export default{
    login,
    logon,
    pages,
    model,
    del,
    stuAdd,
}