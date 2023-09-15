const ContactSection = () => {
  return (
    <section className="bg-[#00172F] p-20 pt-10 scroll-mt-20" id="contact">
      <div className="max-w-lg flex flex-col justify-center mx-auto">
        <div className="text-center">
          <h2 class="inline text-white text-2xl font-bold tracking-tighter">
            Contact Me
          </h2>
          <p class="inline text-3xl text-primary font-bold">.</p>
        </div>
        <form className="bg-[#00264B] p-8 mt-10 rounded-xl border-[1px] border-primary">
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
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
