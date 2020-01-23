;(function (){
    'use strict';

        let text     = document.querySelector('#text'),
            textarea = document.querySelector('#textarea'),
            edit     = document.querySelector('.btn--edit'),
            save     = document.querySelector('.btn--save'),
            cancel   = document.querySelector('.btn--cancel');

        document.body.addEventListener('keydown', function(event) {
            console.log(event);
            if (event.ctrlKey == true && event.keyCode == 69) {
                openTextarea();
            };

            if (event.ctrlKey == true && event.keyCode == 83) {
                saveValueTextarea();
            };

            if (event.keyCode == 27){
                closeTextarea();
            }
        });

        edit.addEventListener('click', (event) => openTextarea());
        save.addEventListener('click', (event) => saveValueTextarea());
        cancel.addEventListener('click', (event) => closeTextarea());

        function openTextarea() {
            event.preventDefault();
            textarea.style.display = 'block';
            text.style.display = 'none';

            edit.style.display = 'none';
            save.style.display = 'block';
            cancel.style.display = 'block';
        };
        function closeTextarea() {
            event.preventDefault();
            textarea.style.display = 'none';
            text.style.display = 'block';

            edit.style.display = 'block';
            save.style.display = 'none';
            cancel.style.display = 'none';
        };

        function saveValueTextarea() {
            event.preventDefault();
            let message = textarea.value;
            textarea.style.display = 'none';

            text.innerHTML = message;
            text.style.display = 'block';

            textarea.value = "";

            edit.style.display = 'block';
            save.style.display = 'none';
            cancel.style.display = 'none';
        }


    
})();