const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  setTimeout(() => {
    console.log(`Mars temperature is: ${getMarsTemperature()} degrees Celsius`)
  }, messageDelay())
}
// quando chamamos sendMarsTemperature() e dentro dela temos como parâmetro a funcão
// setTimeOut, o fluxo de execução entra em setTimeout que tem, por sua vez, como
// parâmetro a função messageDelay. messageDelay calcula um valor aleatório de até 5000
// que é interpretado por setTimeout como milisegundos. Após o tempo de messageDelay
// sendMarsTemperature executa o console.log e chama a função getMarsTemperature,
// que por sua vez retorna um valor aleatório de até 58. Sendo assim, o console.log
// é executado imprimindo no console a mensagem.

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo