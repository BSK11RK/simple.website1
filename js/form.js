document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event){
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const company = document.getElementById("company").value;
        const email = document.getElementById("email").value;
        const title = document.getElementById("title").value;
        const message = document.getElementById("message").value;

        if(!name || !email || !message){
            responseMessage.textContent = "すべての項目を入力してください。";
            responseMessage.style.color = "red";
        }else{
            responseMessage.textContent = `ありがとうございます、${name}様！ お問い合わせ内容: "${message}" が送信されました。`;
            responseMessage.style.color = "green";

            form.reset();
        }
    });
});
