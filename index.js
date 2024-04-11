function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
    }
    
    var items = ["yes", "no", "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", 
    "As I see it, yes", "Most likely", "Don’t count on it", "Very doubtful", "My sources say no", "Definitely not"];

function submit() {

    let question = document.getElementById("question").value;
    if (question.trim() === "") {
        alert("Ask a yes or no question first!");
        return;
    }

    var content = `
    <p id="answer">${(random_item(items))}</p>`;

    document.getElementById("baller").innerHTML = content;

    document.getElementById("question").value = "";
};