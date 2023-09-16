const ContactForm = () => {
  return (
    <form className="bg-[#00264B] p-8 mt-10 rounded-xl border-[1px] border-primary flex-auto">
      <div className="flex flex-col gap-2">
        <label className="text-gray-200 font-bold text-lg">Name:</label>
        <input
          className="bg-[#00172F] px-4 py-2 rounded-xl text-white caret-primary"
          placeholder="John Doe"
        ></input>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <label className="text-gray-200 font-bold text-lg">Email:</label>
        <input
          className="bg-[#00172F] px-4 py-2 rounded-xl text-white caret-primary"
          placeholder="johndoe@gmail.com"
          type="email"
        ></input>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <label className="text-gray-200 font-bold text-lg">Message:</label>
        <textarea
          className="bg-[#00172F] px-4 py-2 rounded-xl h-40 overflow-y-auto text-white caret-primary"
          placeholder="Awesome job!"
        ></textarea>
      </div>
      <button className="btn w-full mt-4 font-medium bg-primary">Send</button>
    </form>
  );
};

export default ContactForm;
