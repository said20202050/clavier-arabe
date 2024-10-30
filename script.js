// دالة لإضافة الأحرف إلى مربع النص
function addChar(char) {
    document.getElementById("textArea").value += char;
}

// دالة لحذف آخر حرف
function deleteChar() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.slice(0, -1);
}

// زر النسخ
document.getElementById("copyBtn").onclick = function() {
    const textArea = document.getElementById("textArea");
    textArea.select();
    document.execCommand("copy");
    alert("تم نسخ النص!");
};

// ربط أزرار البحث في وسائل التواصل الاجتماعي بمحتوى مربع النص
const socialButtons = document.querySelectorAll(".social-btn");
socialButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        const query = document.getElementById("textArea").value.trim();
        if (query) {
            event.target.href += encodeURIComponent(query);
        } else {
            alert("الرجاء إدخال نص للبحث.");
            event.preventDefault();
        }
    });
});
