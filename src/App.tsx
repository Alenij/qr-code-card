import QR from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" flex flex-1 justify-center items-center">
        <div className="bg-white w-55 text-center rounded-lg">
          <div className="p-2">
            <img
              src={QR}
              alt="qr-code-img"
              className="mx-auto rounded-xl sm:rounded-lg"
            />
          </div>
          <div className="p-2">
            <h2 className=" mb-2 text-[16px] font-bold">
              Improve your front-end skills by building projects
            </h2>
            <p className="font-light text-[12px] text-gray-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ijiebor Bethany-McCarthy</a>.
      </div>
    </div>
  );
}

export default App;
