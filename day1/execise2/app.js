const {Observable} = rxjs;

window.onload = function f() {
    document.getElementById("promise").onclick = handlePromiseBtn;
    document.getElementById("async").onclick = handleAsyncBtn;
    document.getElementById("reactive").onclick = handleReactiveBtn;
}


function handlePromiseBtn() {
    var resp = fetch("https://randomuser.me/api/",
        {method: 'GET'})
        .then(response => response.json())
        .then(response => response.results[0])
        .then(myJson => console.log("Name is :" + JSON.stringify(myJson.name) + "\nLocation is : " + JSON.stringify(myJson.location)))
        .catch(err => console.log(err));

    console.log(resp);
}

function handleAsyncBtn() {
    async function myAsync() {
        const response = await fetch("https://randomuser.me/api/");
        const result = await response.json();
        const myJson = result.results[0];
        console.log("Name is :" + JSON.stringify(myJson.name) + "\nLocation is : " + JSON.stringify(myJson.location))
    }

    myAsync();
}

function handleReactiveBtn() {

    const obs$ = Observable.create((observer) => {
        fetch("https://randomuser.me/api/",
            {method: 'GET'})
            .then(response => response.json())
            .then(response => response.results[0])
            .then(data => {
                observer.next(data);
                observer.complete();
            })
    })
    const subscription = obs$.subscribe(
        (myJson) => console.log("Name is :" + JSON.stringify(myJson.name) + "\nLocation is : " + JSON.stringify(myJson.location)),
        (err) => console.log(err),
        () => console.log('done')
    )


    // const obs$ = Observable.create((observer) => {
    //     observer.next('cs572');
    //     setTimeout(() => observer.complete(), 5000)
    // })
    // const subscription = obs$.subscribe(
    //     (x) => console.log(`value: ${x}`),
    //     (err) => console.log(err),
    //     () => console.log('done')
    // )

}