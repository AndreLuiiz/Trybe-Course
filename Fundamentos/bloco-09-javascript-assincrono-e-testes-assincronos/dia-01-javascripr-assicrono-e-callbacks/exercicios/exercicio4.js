const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature (temperature, delay) {
    const getTemperature = () => console.log(`Mars temperature is: ${temperature()} degree Celsius`)
    return setTimeout(getTemperature, delay);
}

//console.log(messageDelay());
sendMarsTemperature(getMarsTemperature, messageDelay()); 
// imprime "Mars temperature is: 20 degree Celsius", por exemplo