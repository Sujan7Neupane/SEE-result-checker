document.getElementById("btn-Calc")
    .addEventListener("click", calculateResults);

function calculateResults() {
    // fetching values of height weight from HTML document 
    var results = document.getElementById("result").value;

    // variable to hold results and grade
    var results;
    var grade;

    // Applying conditions
    if (results < 100 && results >= 90) {
        results = "Outstanding";
        grade = "A+";
    }
    else if (results <= 89 && results >= 80) {
        results = "Excellent";
        grade = "A";
    }
    else if (results <= 79 && results >= 70) {
        results = "Very good";
        grade = "B+";
    }
    else if (results <= 69 && results >= 60) {
        results = "Good";
        grade = "B";
    }
    else if (results <= 59 && results >= 50) {
        results = "Satisfactory";
        grade = "C+";
    }
    else if (results <= 49 && results >= 40) {
        results = "Acceptable";
        grade = "C";
    }
    else if (results <= 39 && results >= 35) {
        results = "Basic";
        grade = "D";
    }
    else if (results < 35) {
        results = "Not Graded";
        grade = "NG";
    }

    alert(`Congratulations! You have secured ${grade} (${results})`)
}






