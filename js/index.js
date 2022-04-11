function clock() {
  const hoursArrow = document.querySelector('.hours');
  const minutesArrow = document.querySelector('.minutes');
  const secondsArrow = document.querySelector('.seconds');

  const hoursDegrees = 30;
  const minSecDegrees = 6;

  setInterval(() => {
    const day = new Date();

    const hours = day.getHours() * hoursDegrees;
    const minutes = day.getMinutes() * minSecDegrees;
    const seconds = day.getSeconds() * minSecDegrees;

    hoursArrow.style.transform = `rotateZ(${hours + minutes / 12}deg`;
    minutesArrow.style.transform = `rotateZ(${minutes}deg`;
    secondsArrow.style.transform = `rotateZ(${seconds}deg`;
  }, 0);
}

clock();
