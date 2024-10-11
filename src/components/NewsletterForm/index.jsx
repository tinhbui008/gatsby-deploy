import React, { useEffect, useState } from "react"
import BlueCorner from "../../images/blue-corner.png"
import { useForm } from "react-hook-form"
import axios from "axios"

const Modal = ({ setModalOpen, modalOpen, children, backgroundColour }) => {
  return (
    <>
      <div
        className={"fixed inset-0 cert-modal capability-container !z-[50]"}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        style={{
          visibility: modalOpen ? "visible" : "hidden",
          opacity: modalOpen ? "1" : "0",
          transition: "all 0.2s ease",
        }}
      >
        <div className="fixed w-full flex flex-col items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
          <button
            onClick={() => {
              setModalOpen(false)
            }}
            type="button"
            className=""
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-80 transition-opacity "
              aria-hidden="true"
            ></div>
          </button>

          {/* <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span> */}

          <div className="inline-block">
            <div className="flex mb-5 items-center relative z-50 gap-2">
              {/* <span className="block mr-5 bg-green w-14 h-14 rounded-full "></span> */}
              <div className="bg-green w-[30px] h-[30px] rounded-full"></div>
              <h3 className="!text-white text-base sm:text-2xl">
                {" "}
                World Movers Newsletter
              </h3>
            </div>
            <div
              className={` align-bottom text-left p-10 transform transition-all sm:max-w-[710px] sm:my-8 sm:align-middle sm:w-full shadow border-2 border-gray-200 relative
                ${backgroundColour ? "bg-white" : "bg-[#0017288a]"}
              `}
            >
              <img
                className="top-0 left-0 absolute w-12"
                src={BlueCorner}
                alt="Curved Corner"
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Newsletter = ({ setModalOpen, modalOpen, backgroundColour }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async values => {
    await axios
      .post("/api/newsletter", {
        email: values.email,
        name: values?.name,
      })
      .then(() => {
        setIsSubmitted(true)
        reset()
      })
  }

  useEffect(() => {
    if (!modalOpen) {
      setIsSubmitted(false)
    }
  }, [modalOpen])

  return (
    <Modal
      backgroundColour={backgroundColour}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
    >
      <div className="flex sm:flex-row flex-col sm:gap-16 gap-8">
        <div className="flex flex-col gap-4">
          {/* <p className="text-green conthrax-heavy font-bold text-sm text-center md:text-left">
            Join the excitement!
          </p> */}
          <p
            className={`conthrax-heavy text-[24px] leading-[normal] font-extrabold ${
              backgroundColour ? "text-black" : "text-white"
            }`}
          >
            Subscribe now & stay in the loop how we keep the world moving.
          </p>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className={`px-3 py-2 bg-transparent border rounded-sm gotham-book ${
                backgroundColour
                  ? "border-black"
                  : "text-white placeholder:text-white border-white"
              }`}
              {...register("name", { required: "This field is required" })}
              placeholder="Your name"
            />
            {errors["name"] && (
              <p className="mt-3 animate-[fadeIn_0.5s_ease-in-out] text-[14px] leading-5 text-red-600">
                {errors["name"]?.message}
              </p>
            )}
          </div>
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={`px-3 py-2 bg-transparent border rounded-sm gotham-book ${
                backgroundColour
                  ? "border-black"
                  : "text-white placeholder:text-white border-white"
              }`}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  message: "Invalid email",
                  value: /\S+@\S+\.\S+/,
                },
              })}
              placeholder="Email"
            />
            {errors["email"] && (
              <p className="mt-3 animate-[fadeIn_0.5s_ease-in-out] text-[14px] leading-5 text-red-600">
                {errors["email"]?.message}
              </p>
            )}
          </div>
          <div>
            {!isSubmitted ? (
              <button type="submit">
                <span className="text-green uppercase conthrax-heavy font-bold text-sm text-center md:text-left">
                  SUBMIT
                </span>
              </button>
            ) : (
              <p className="animate-[fadeIn_0.5s_ease-in-out] font-medium text-green transition-all">
                Form has been successfully submitted
              </p>
            )}
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default Newsletter
