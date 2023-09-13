const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Moscow, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2"> WhatsApp</h2>
            <p>
              <h3>8 800 555 35 35 </h3>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                ushin99665@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
