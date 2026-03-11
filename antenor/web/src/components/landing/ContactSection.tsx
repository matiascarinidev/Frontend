export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col bg-black-900 text-black m-auto  w-full justify-center items-center"
    >
      <address className="w-full">
        <p className="flex w-full justify-center p-3 shadow-lg">
          <Location /> Calle 806, esquina 805, Tomás Jofre, B6601 Argentina.
        </p>
      </address>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.487786946976!2d-59.32069017528002!3d-34.69900783870793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc6fc6677b510b%3A0x4399b112a29421a1!2sAntenor!5e0!3m2!1ses!2sar!4v1749672017799!5m2!1ses!2sar"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Antenor Location"
      ></iframe>
    </section>
  );
}

function Location() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M4.25 9.799c0-4.247 3.488-7.707 7.75-7.707s7.75 3.46 7.75 7.707c0 2.28-1.138 4.477-2.471 6.323-1.31 1.813-2.883 3.388-3.977 4.483l-.083.083-.002.002-1.225 1.218-1.213-1.243-.03-.03-.012-.013c-1.1-1.092-2.705-2.687-4.035-4.53-1.324-1.838-2.452-4.024-2.452-6.293M12 3.592c-3.442 0-6.25 2.797-6.25 6.207 0 1.796.907 3.665 2.17 5.415 1.252 1.736 2.778 3.256 3.886 4.357l.043.042.16.164.148-.149.002-.002.061-.06c1.103-1.105 2.605-2.608 3.843-4.322 1.271-1.76 2.187-3.64 2.187-5.445 0-3.41-2.808-6.207-6.25-6.207m1.699 5.013a1.838 1.838 0 1 0-3.397 1.407A1.838 1.838 0 0 0 13.7 8.605m-2.976-2.38a3.338 3.338 0 1 1 2.555 6.168 3.338 3.338 0 0 1-2.555-6.169"></path>
    </svg>
  );
}
