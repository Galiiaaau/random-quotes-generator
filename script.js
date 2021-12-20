const sliderFunction = () => {

      let count = 0;
      let slideCollection;

      const btnStart = document.querySelector('.btn-start');

      const startFunction = (event) => {
            event.stopPropagation();
            btnStart.classList.add('hide');
            fetch("https://type.fit/api/quotes")
                  .then(function (response) {
                        return response.json();
                  })
                  .then(showSlide);
      }

      function showSlide(data) {
            console.log(data[6]);
            const background = document.querySelector('body');

            for (let i = 0; i < data.length; i++) {
                  let div = document.createElement('div');
                  div.classList.add('slide');
                  div.classList.add('opacity');
                  if (i !== 0) div.classList.add('hide');
                  if (i === 0) div.style.background = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
                  let text = document.createElement('div');
                  let author = document.createElement('span');
                  text.textContent = data[Math.floor(Math.random() * data.length)].text;

                  if (data.author === null) {
                        author.textContent = "";
                  } else author.textContent = '"' + data[Math.floor(Math.random() * data.length)].author + '"';
                  // text.style.transition = 'all 2s';
                  div.append(text);
                  div.append(author);
                  background.append(div);
            }

            background.addEventListener('click', showNextSlide);
            slideCollection = document.querySelectorAll('.slide');
      }

      const showNextSlide = () => {
            slideCollection[count].classList.add('hide');
            fetch("https://type.fit/api/quotes")
                  .then(function (response) {
                        return response.json();
                  })
                  .then( (data) => {
                        if (count + 1 < data.length) {
                              count++;
                        } else {
                              count = 0;
                        }
                        showNewSlide(count);
                  });
      }

      function showNewSlide(n) {
            slideCollection[n].classList.remove('hide');
            slideCollection[n].style.background = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
      }

      function getRandomInt(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
      }

      btnStart.addEventListener('click', startFunction);
}


document.addEventListener("DOMContentLoaded", sliderFunction);
