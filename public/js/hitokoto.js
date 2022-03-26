function setHitokoto (idh) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://v1.hitokoto.cn");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var hitokoto = document.getElementById(idh);
            // console.log(hitokoto);
            hitokoto.href = "https://hitokoto.cn/?uuid=" + data.uuid;
            hitokoto.innerText = data.hitokoto;
        }
    };
    xhr.send();
}