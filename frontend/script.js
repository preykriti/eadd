const submitButton = document.getElementById("submit");
const yourName = document.getElementById("name");
const result = document.getElementById("result");

submitButton.addEventListener("click", async()=>{
        try{
            const response = await fetch("http://localhost:8000/submit",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: yourName.value})
                
            });
            const data = await response.json();
            result.textContent = data.message;
        } catch(error){
            console.log(error);
        }
})