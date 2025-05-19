    function checkAge() {
        var age = document.getElementById("typeAge").value
        if(age < 13){
            result.textContent = "Tum Abhi Bacha ho 🧒"
            result.style.color = "Blue"
        }
        else if(age < 18){
            result.textContent = "Tum teenager ho 😎"
            result.style.color = "Green"
        }
        else if(age <= 50){
            result.textContent = "Adult ho ab. Zimmedaari ka time hai 💼"
            result.style.color = "red"
        }
        else{
            result.textContent = "Ab Burhay ho gai ho Ab ghr pr aram kro"
            result.style.color = "black"
        }
    }