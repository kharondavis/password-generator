document.getElementById("param-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
}