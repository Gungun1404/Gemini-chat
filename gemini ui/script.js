

function askgemini() {
    let question = document.getElementById("questionInput").value
    let answerDiv = document.getElementById("answer")
    answerDiv.innerText = "Thinking..."
   fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=your_api_key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: question }] }]
        })
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let answer = data.candidates[0].content.parts[0].text
            answerDiv.innerText = answer
        })
}
