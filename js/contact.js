function validateForm() {
    // 获取所有的输入框和文本域
    var inputs = document.querySelectorAll('.myform .inp, .myform .msg');
    var errorMessages = document.querySelector('.contact-button-errormgs');
    errorMessages.innerHTML = ''; // 清空先前的错误消息
    var allFilled = true; // 假设所有字段最初都已填写

    inputs.forEach(function(input) {
        if (input.value.trim() === '') { // 如果发现空的输入框
            allFilled = false;
            var fieldName = input.name.charAt(0).toUpperCase() + input.name.slice(1); // 使字段名首字母大写
            errorMessages.innerHTML += fieldName + ' is required.<br>'; // 添加错误消息
        }
    });

    if (allFilled) {
        // 如果所有字段都填写了，正常提交表单
        console.log('All fields are filled. Form can be submitted.');
        // document.querySelector('.myform').submit(); // 取消注释以允许表单提交
    }
}

function copyText(elementId) {
    var text = document.getElementById(elementId).innerText.split(': ')[1];  // 获取要复制的文本
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);  // 简单的复制确认
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

document.getElementById('downloadLink').addEventListener('click', function() {
    var a = document.createElement('a');
    a.href = './Resume_2.pdf'; // 指定文件路径
    a.download = 'MyResume.pdf'; // 指定下载文件的默认名称
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

