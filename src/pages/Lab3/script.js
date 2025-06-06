console.log(1);
fetch ('http://www.cbr-xml-daily.ru/daily_json.js')
.then ( (req) => {
    return req.json()
})
.then ( (data) => {
    const root = document.querySelector('.content');
    const mas = data.Valute;
    console.log(mas);
    for (key in mas)  
        {
            const p = document.createElement('p');
            p.textContent = key + ':' + mas[key].Name + ' ' + mas[key].Value;
            root.appendChild(p);
        }          
})
.catch ( (err) => {
    console.log(err)
});