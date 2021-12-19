const sliderFunction = () => {
      const data = [
            "Начальник не всегда прав, но он всегда начальник.",
            "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
            "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
            "Не спеши выполнять приказ — его могут отменить.",
            "Тому, кто сам ничего не делает, все кажется по плечу.",
            "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
            "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
            "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
            "Не будь незаменимым — тебя никогда не повысят.",
            "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
      ];

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
                  text.textContent = data[i];
                  div.append(text);
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

      function showNewSlide (n) {
            slideCollection[n].classList.remove('hide');
            slideCollection[n].style.background = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
      }

      function getRandomInt(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
      }

      btnStart.addEventListener('click', startFunction);
}


document.addEventListener("DOMContentLoaded", sliderFunction);