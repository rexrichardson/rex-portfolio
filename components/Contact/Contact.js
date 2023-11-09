import Button from "../Button/Button";

const Contact = () => {
  return (
    <div
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#009ffd10] w-full"
      id="contact"
    >
      <div className="absolute inset-y-0 right-1/2 -z-10 -mr-48 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" />
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Want to chat about a project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I{"'"}d love to hear from you. Use a method below to reach out.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="mailto:rex.richardson@me.com"
              text="Email Me"
              color="brand"
              size="lg"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            ></Button>
            <a
              href="https://www.linkedin.com/in/rex-richardson/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              LinkedIn <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
