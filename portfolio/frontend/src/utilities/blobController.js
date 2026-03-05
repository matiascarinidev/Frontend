export function createBlob(lamp, className) {
  const blob = document.createElement("div");
  blob.classList.add(className);
  lamp.appendChild(blob);
  return blob;
}
export function animateBlobVertical(blob, speed = 0.5, amplitude = 50) {
  let time = 0;

  function animate() {
    // Ecuación: y = posiciónInicial + amplitud * sin(velocidad * tiempo)
    const baseY = window.innerHeight * 0.5 - blob.clientHeight * 0.5; // Posición vertical media
    const y = baseY + amplitude * Math.sin(speed * time);
    const x = window.innerWidth * 0.9 - blob.clientWidth * 0.5; // Posición horizontal media

    blob.style.transform = `translate(${x}px,${y}px)`;
    time += 0.01; // Incremento de tiempo pequeño para movimiento suave

    requestAnimationFrame(animate);
  }

  animate();
}
