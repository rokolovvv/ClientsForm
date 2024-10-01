 const scriptURL = 'https://script.google.com/macros/s/AKfycbwue8E9lADUq5vzGoDW0e-GByoqLD-T5ylzJAp89CFJbvY8Z_bIM0OIP3er5dIFoRcE/exec'
        const form = document.forms['submit-to-google-sheet']

        const names = [
            "Іванна Пилипів",
            "Софія Рясне",
            "Наталя Дс марти",
            "Мария майоривка Светы",
            "Іра.люби невістка садік",
            "Оля Регини натали",
            "Зоряна колодійки",
         "Олександра Продович буг",
            "Аня лілі жовква",
            "Оля Нат. вол д.",
            "Жана",
            "Галя жучок Олеси",
                    "Маряна Жовква Ані"
        ];


        function filterNames() {
            const input = document.getElementById('Name');
            const dataList = document.getElementById('nameList');
            const inputValue = input.value.toLowerCase();
            dataList.innerHTML = '';  // Очищуємо поточний список

            names.forEach(name => {
                if (name.toLowerCase().includes(inputValue)) {
                    const option = document.createElement('option');
                    option.value = name;
                    dataList.appendChild(option);
                }
            });
        }
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })