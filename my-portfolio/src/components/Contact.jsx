import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const newData = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/contact/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        toast("Thanks for your message! 🦄", { hideProgressBar: true });
        reset();
      } else {
        //console.log(responseData.error);
        toast(responseData.error, { hideProgressBar: true });
      }
    } catch (error) {
      toast("An error occured. Please try again later.", {
        hideProgressBar: true,
      });
      console.log(error);
    }
  };
  console.log(errors);

  return (
    <div>
      <section class="contact" id="contact">
        <h2>CONTACT ME</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            Feel free to contact me with queries or requests. I look forward to
            possibilities to collaborate.
          </p>
          <br />
          <label for="email">Your email:</label>
          <br />
          <input type="text" {...register("email")} />
          <br />
          <br />
          <label for="name">Your name:</label>
          <br />
          <input type="text" {...register("name")} />
          <br />
          <br />

          <label for="message">Your message:</label>
          <br />
          <textarea rows={10} cols={30} {...register("message")} />
          <br />

          <div className="button-wrapper">
            <input type="submit" />
          </div>
        </form>

        <div class="email-sm">
          <p class="find">You can also find me here:</p>
          <p>elenarmaroli@gmail.com</p>
          <p class="social-media">
            <a href="https://www.linkedin.com/in/elenarmaroli/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/elenarmaroli" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </p>
        </div>
      </section>
      <ToastContainer
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default Contact;
