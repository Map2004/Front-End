window.onload = function () {
  const logList = document.getElementById("logList");

  window.addLog = function () {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
      alert("กรอกข้อมูลให้ครบ");
      return;
    }

    const log = {
      title,
      content,
      date: new Date().toLocaleString()
    };

    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.unshift(log);
    localStorage.setItem("logs", JSON.stringify(logs));

    renderLogs();
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  };

  function renderLogs() {
    logList.innerHTML = "";
    const logs = JSON.parse(localStorage.getItem("logs")) || [];

    logs.forEach(log => {
      const div = document.createElement("div");
      div.className = "log";
      div.innerHTML = `
        <h3>${log.title}</h3>
        <small>${log.date}</small>
        <p>${log.content}</p>
      `;
      logList.appendChild(div);
    });
  }

  renderLogs();
};
