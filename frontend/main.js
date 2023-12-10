window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitorcount();
})

const functionApi = '';

const getVisitorcount = () => {
    let = count = 30;
    fetch (functionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called fuction API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count; 
}