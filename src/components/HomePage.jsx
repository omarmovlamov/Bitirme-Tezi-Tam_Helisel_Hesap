import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{ overflow: "hidden" }}
    >
      {/* Üstteki renkli blur arka plan */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* İçerik alanı, beyaz kutu */}
      <main className="flex-grow flex items-center justify-center px-6 pt-32 sm:pt-48 lg:pt-56">
        <div className="bg-transparent max-w-4xl w-full p-10 text-center">
          <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl mt-2 mb-2">
            React.js ile 180° Ankastre Helisel Merdiven Hesaplama Uygulaması
          </h1>

          <p className="mt-12 text-lg font-medium text-gray-500 sm:text-xl leading-relaxed mt-2 mb-2">
            Geleneksel mühendislik hesaplarının dijitalleştirilmesi, hız ve
            doğruluğu artırırken kullanıcı etkileşimini kolaylaştırır. Bu
            projede, açılım açısı 180° olan ve iki ucu ankastre helisel
            merdivenin hesaplamaları, React.js ile geliştirilen web tabanlı bir
            arayüz üzerinden gerçekleştirilmiştir.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              style={{
                paddingBottom: "5px",
                paddingTop: "5px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
              onClick={() =>
                window.open("https://github.com/senin-github-linkin", "_blank")
              }
              className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
            >
              GitHub'a Git
            </button>
            <button
              onClick={() => navigate("/hesaplama")}
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
            >
              Hesaplamaya Git <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </main>

      {/* Alttaki renkli blur arka plan */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
