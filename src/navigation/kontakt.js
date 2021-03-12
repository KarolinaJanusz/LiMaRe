import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import '../scss/app.scss';



const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = 'template_r8l0cze';
    const serviceID = 'my_gmail';
    sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
    r.target.reset();
}


  return (
    <>
    <h1 className = 'contactTitle'>kontakt</h1>

    <section className = 'contactDetails'>
      <div>
         <i class="far fa-envelope"></i>
           <h3>kontakt@limare.pl</h3>
                  </div>

       <div>
           <i class="fas fa-phone"></i>
           <h3>+48 793 017 988</h3>
      </div>
     </section>


      <div className="ContactForm">
      <h1>Skontaktuj się z nami :)</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Imię: </h4>
              <input 
                  className = "inputStyle"
                  placeholder="imię"
                  name="name" 
                  ref={
                      register({ 
                          required: "Wpisz swoje imię", 
                          maxLength: {
                              value: 20,
                              message: "Wpisz imię, które ma mniej niż 20 znaków"
                          } 
                      })
                  } 
              /><br />
              {errors.name && errors.name.message}<br />

              <h4>Adres email: </h4>
              <input
                className = "inputStyle"
                  placeholder="email"
                  name="email"
                  ref={
                      register({
                          required: "Wpisz swój email",
                          pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Zły adres mailowy"
                          }
                      })
                  }
              /><br/>
              {errors.email && errors.email.message}<br />

              <h4>Twoja wiadomość: </h4>
              <textarea 
                  placeholder="Twoja wiadomość"
                  name="comment" 
                  ref={
                      register({
                          required: true
                      })
                  } 
              /><br />
              {errors.comment && "oops, zapomniałaś wpisać wiadomości! ;)"}<br />

              <input type="submit" className = "submitbtn"/>
          </form>
      </div>

      <div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19552.311050665754!2d21.082685770369075!3d52.224511401735356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd82dc6022b9%3A0xe541e84eecd7aa1d!2sGoc%C5%82aw%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1614699820874!5m2!1spl!2spl" width="600" height="400" allowfullscreen="" loading="lazy" className = "map"></iframe>
    </div>
      </>
  );
}

export default Contact;



// const Contact = () =>{

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   return(
//     <>
//     <h1 className = 'contactTitle'>kontakt</h1>

//     <section className = 'contactDetails'>
//       <div>
//           <i class="far fa-envelope"></i>
//           <h3>kontakt@limare.pl</h3>
//       </div>

//       <div>
//           <i class="fas fa-phone"></i>
//           <h3>+48 793 017 988</h3>
//       </div>
//     </section>
//     <form>
//       <h1>Skontaktuj się z nami :)</h1>
//       <label><h4>Imię: </h4>
//       <input type="text" value={name} className = "inputStyle" onChange={e => setName(e.target.value)}/>
//       </label> <br></br>
      
//       <label><h4>Adres email: </h4>
//       <input type="email" className = "inputStyle" value={email} onChange={e => setEmail(e.target.value)}/>
//       </label> <br></br>

//       <label><h4>Twoja wiadomość: </h4>
//       <textarea value={message}  onChange={e => setMessage(e.target.value)}/>
//       </label> <br></br>

//       <input type="submit" className = "submitbtn" value="Wyślij" />

//     </form>

//     <div>
//     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19552.311050665754!2d21.082685770369075!3d52.224511401735356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd82dc6022b9%3A0xe541e84eecd7aa1d!2sGoc%C5%82aw%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1614699820874!5m2!1spl!2spl" width="600" height="400" allowfullscreen="" loading="lazy" className = "map"></iframe>
//     </div>
//     </>
//   )
// }

  // export default Contact;