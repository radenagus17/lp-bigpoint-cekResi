import React, { FC, useState } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";
import logo from "../public/newLogo.png";
import { CgMoreO } from "react-icons/cg";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const [checkResi, setCheckResi] = useState<string>("");
  const [resi, setResi] = useState<string>("...");
  const [verified, setVerified] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const handleLacak = (e: any): void => {
    e.preventDefault();
    if (!checkResi || !verified) return alert("Please insert data check");
    setIsOpen(true);
    setResi(checkResi);
    setCheckResi("");
  };

  const validateResi = (e: any): void => {
    const editResi = {
      name: e.target.name,
      resi: e.target.value,
    };
    setCheckResi(editResi.resi);
  };

  const recaptcha: ReCAPTCHAProps = (token: string | null): void => {
    console.log("Captcha value:", token);

    setVerified(true);
  };

  return (
    <main className="min-h-screen">
      <div className="container m-auto py-7">
        <section className="mb-3">
          <h1 className="lg:text-4xl text-3xl font-bold text-center mb-5 text-[#E3BB35]">
            Cek resi by Bigdelivery
          </h1>
          {/* form pelacakan */}
          <form
            onSubmit={handleLacak}
            className="flex flex-col lg:flex-row w-full gap-4 items-center justify-center"
          >
            <input
              type="text"
              name="resi"
              value={checkResi}
              onChange={validateResi}
              placeholder="input resi anda"
              className="shadow-md rounded-md px-3 py-2 lg:w-[30%] w-[70%] border border-blue-400 outline-none"
            />

            {!verified && (
              <ReCAPTCHA
                sitekey="6Ld83AooAAAAADCsP2jvHojeHvDFleOlJMDCQCoJ"
                onChange={recaptcha}
              />
            )}
            <button
              type="submit"
              disabled={!verified}
              className="px-4 py-2 bg-[#E3BB35] disabled:bg-gray-200 hover:bg-[#FED03C] transition duration-300 rounded-md text-white font-bold"
            >
              Lacak
            </button>
          </form>
        </section>
        {!isOpen && (
          <div className="flex items-center justify-center lg:min-h-[38.3em] min-h-[18em]">
            <img
              src={logo}
              alt="logoBIGD"
              loading="lazy"
              className="lg:w-[40%] w-[70%]"
            />
          </div>
        )}
        <div className={`${isOpen ? "block" : "hidden"} px-4 lg:px-0`}>
          <h1 className="text-3xl font-bold mb-2">Hasil Pelacakan</h1>
          <div className="shadow-md w-full lg:max-h-[39.3em] max-h-[25em] relative overflow-auto">
            <section className="flex justify-between items-center border-b p-3 text-base">
              {/* status */}
              <h3>status...</h3>
              {/* logo */}
              <div className="w-20">
                <img src={logo} alt="logoBIGD" loading="lazy" />
              </div>
            </section>
            {/* detail resi */}
            <section className="px-3 py-6 border-b grid lg:grid-cols-6 grid-cols-1 gap-3 lg:gap-0 text-sm">
              <div className="lg:flex-col lg:gap-3 gap-28 flex flex-row">
                <h5>Kode Resi</h5>
                <p>{resi}</p>
              </div>
              <div className=" lg:col-span-2 col-span-1 flex lg:flex-col flex-row lg:gap-3 gap-11">
                <h5>Tanggal Pengiriman</h5>
                <p>-</p>
              </div>
              <div className="flex lg:flex-col flex-row lg:gap-3 gap-28">
                <h5>Pengirim</h5>
                <p>-</p>
              </div>
              <div className="flex lg:flex-col flex-row lg:gap-3 gap-28">
                <h5>Penerima</h5>
                <p>-</p>
              </div>
              <div className="">
                <div className="flex lg:justify-end justify-center items-center h-full w-full">
                  <button
                    onClick={() => setOpenDetail(!openDetail)}
                    className={`${
                      openDetail
                        ? "text-blue-400 border-blue-400"
                        : "text-gray-700 border-gray-400"
                    } px-4 py-3 border hover:border-blue-400 transition duration-200 cursor-pointer rounded-md font-semibold hover:text-blue-400 inline-flex items-center gap-2`}
                  >
                    Selengkapnya
                    <span>
                      <CgMoreO />
                    </span>
                  </button>
                </div>
              </div>
            </section>
            {/* running */}
            <section
              className={`${
                openDetail ? "block" : "hidden"
              } border-b px-3 py-6 text-sm`}
            >
              <h4 className="capitalize">status detail paket</h4>
              <div className="flex w-full gap-2 mt-5">
                {/* tanggal */}
                <div className="basis-1/5 space-y-2">
                  <h4 className="font-bold capitalize">tanggal & waktu</h4>
                  <ul className="grid grid-rows-5 gap-2">
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                  </ul>
                </div>
                {/* shipper */}
                <div className="basis-1/2 space-y-2">
                  <h4 className="font-bold capitalize">status shipper</h4>
                  <ul className="grid grid-rows-5 gap-2">
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                  </ul>
                </div>
                {/* logistik */}
                <div className="basis-1/3 space-y-2">
                  <h4 className="font-bold capitalize">status logistic</h4>
                  <ul className="grid grid-rows-5 gap-2">
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
