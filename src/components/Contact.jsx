import React from "react";

function Contact() {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
                <form 
                    action="https://getform.io/f/9317dd34-bc8d-49b7-be12-5091a8ba3ab1"
                    method="POST"
                    className="flex flex-col w-1/2"
                >
                    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-neutral-900 dark:text-white">Contact</h1>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                        rows="10">
                    </textarea>
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-500 dorp-shadow-md hover:stroke-white">
                        Work With Me
                    </button>
                </form>
        </div>
    )
}

export default Contact;