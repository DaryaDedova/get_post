const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

//1 задача
document.querySelector('.btn-1').onclick = () => {
    xhr.open('GET', requestURL);
    xhr.responseText = 'json';
        xhr.onload = () => {
            if(xhr.status >= 400){
                console.error(xhr.response)
            }
            else{
                console.log(xhr.response)
            }
        }
        xhr.send();
}


//2 задача
document.querySelector('.btn-2').onclick = () => {
    function sendRequest(method, url, body = null){
        return new Promise((resolve, reject) =>{
            const xhr = new XMLHttpRequest();
            xhr.open(method, url)
            xhr.responseType = 'json';
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onload = () =>{
                if(xhr.status >= 400){
                    reject(xhr.response);
                }
                else{
                    resolve(xhr.response);
                }
                
            }
    
            xhr.onerror = () =>{// метод который работает если ответа нет 
                reject(xhr.response)
            }
    
            xhr.send(JSON.stringify(body));
        })
    }
    
    
    const body = {
        title: 'Доброе утро!!!',
        body: 'Утро - часть суток, следующая за ночью и предшествующая дню. В русском языке точный временной интервал со словом «утро» не связан. Первоначально «утром» считался период времени от восхода солнца (или от рассвета), однако обычно этим словом обозначают время от пробуждения человека до полудня.'
    }
    
    sendRequest('POST', requestURL, body)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    
}

//3 задача
document.querySelector('.btn-3').onclick = () =>{
    fetch(requestURL)
    .then((response) => response.json())
    .then(posts => 
            document.querySelector('.one').innerHTML = JSON.stringify(posts))
    .catch(console.error)
}

//4 задача
document.querySelector('.btn-4').onclick = ()=>{
    document.querySelector('.one').innerHTML = ''
}


const reqURL = 'https://jsonplaceholder.typicode.com/postss';

document.querySelector('.btn-5').onclick = () =>{
    async function getPosts(url){
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    }
    
    getPosts(reqURL)
        .then(data => console.log(data))
        .catch(err => console.error(err))
    
}

//5 задача

document.querySelector('.btn-6').onclick = () =>{
    function updateInfo(){
        xhr.open('GET', requestURL);
        xhr.responseText = 'json';
            xhr.onload = () => {
                if(xhr.status >= 400){
                    console.error(xhr.response)
                }
                else{
                    console.log(xhr.response)
                }
            }
            xhr.send();
    }
    setInterval(updateInfo(), 5000)
}
