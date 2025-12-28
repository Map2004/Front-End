const logList = document.getElementById("logList");

window.onload = () => {
    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.forEach(log => createLog(log.title, log.content, log.date));
};

function addLog() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("กรุณากรอกให้ครบ");
        return;
    }

    const date = new Date().toISOString();
    const logdata = { title, content, date};

    createLog(title, content, date);
    saveLog(logData);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function createLog(title, content, date) {
    const div = document.createElement("div");
    div.className = "log";

    div.innerHTML = `
    <h3>${title}</h3>
    <small>${date}</small>
    <p>${content}</p>
    `;
}

function saveLog(log) {
    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.unshift(log);
    localStorage.setItem("logs", JSON.stringify(logs));
}