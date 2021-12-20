const sliderFunction = () => {
      const data = [{
                  "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
                  "author": "Thomas Edison"
            },
            {
                  "text": "You can observe a lot just by watching.",
                  "author": "Yogi Berra"
            },
            {
                  "text": "A house divided against itself cannot stand.",
                  "author": "Abraham Lincoln"
            },
            {
                  "text": "Difficulties increase the nearer we get to the goal.",
                  "author": "Johann Wolfgang von Goethe"
            },
            {
                  "text": "Fate is in your hands and no one elses",
                  "author": "Byron Pulsifer"
            },
            {
                  "text": "Be the chief but never the lord.",
                  "author": "Lao Tzu"
            },
            {
                  "text": "Nothing happens unless first we dream.",
                  "author": "Carl Sandburg"
            },
            {
                  "text": "Well begun is half done.",
                  "author": "Aristotle"
            },
            {
                  "text": "Life is a learning experience, only if you learn.",
                  "author": "Yogi Berra"
            },
            {
                  "text": "Self-complacency is fatal to progress.",
                  "author": "Margaret Sangster"
            },
            {
                  "text": "Peace comes from within. Do not seek it without.",
                  "author": "Buddha"
            },
            {
                  "text": "What you give is what you get.",
                  "author": "Byron Pulsifer"
            },
            {
                  "text": "We can only learn to love by loving.",
                  "author": "Iris Murdoch"
            },
            {
                  "text": "Life is change. Growth is optional. Choose wisely.",
                  "author": "Karen Clark"
            },
            {
                  "text": "You'll see it when you believe it.",
                  "author": "Wayne Dyer"
            },
            {
                  "text": "Today is the tomorrow we worried about yesterday.",
                  "author": null
            },
            {
                  "text": "It's easier to see the mistakes on someone else's paper.",
                  "author": null
            },
            {
                  "text": "Every man dies. Not every man really lives.",
                  "author": null
            },
            {
                  "text": "To lead people walk behind them.",
                  "author": "Lao Tzu"
            },
            {
                  "text": "Having nothing, nothing can he lose.",
                  "author": "William Shakespeare"
            },
            {
                  "text": "Trouble is only opportunity in work clothes.",
                  "author": "Henry J. Kaiser"
            }
      ]

      let count = 0;
      let slideCollection;

      const btnStart = document.querySelector('.btn-start');

      const startFunction = (event) => {
            event.stopPropagation();
            btnStart.classList.add('hide');
            showSlide();
      }

      const showSlide = () => {
            const background = document.querySelector('body');

            for (let i = 0; i < data.length; i++) {
                  let div = document.createElement('div');
                  div.classList.add('slide');
                  if (i !== 0) div.classList.add('hide');
                  if (i === 0) div.style.background = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
                  let text = document.createElement('div');
                  let author = document.createElement('span');
                  text.textContent = data[Math.floor(Math.random() * data.length)].text;
                  
                  if (data.author === null) {
                        author.textContent = "";
                  }
                  else author.textContent = data[Math.floor(Math.random() * data.length)].author;
                  div.append(text);
                  div.append(author);
                  background.append(div);
            }

            background.addEventListener('click', showNextSlide);
            slideCollection = document.querySelectorAll('.slide');
      }

      const showNextSlide = () => {
            slideCollection[count].classList.add('hide');
            if (count + 1 < data.length) {
                  count++;
            } else {
                  count = 0;
            }
            showNewSlide(count);
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