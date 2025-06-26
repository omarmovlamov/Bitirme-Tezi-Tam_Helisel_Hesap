import { useState } from "react";
import KesitDiagramlari from "../photo/KesitDiagramlari.png";
import betonvecelik from "../photo/betonvecelik.png";
import ilkresim from "../photo/ilkresim.png";
import { useNavigate } from "react-router-dom";
function InputForm() {
  const [input1Value, setInputValue] = useState("17");
  const [inputyValue, setInputyValue] = useState("3");
  const [inputxValue, setInputxValue] = useState("0.15");
  const [inputbValue, setInputbValue] = useState("1.5");
  const [inputbyaniValue, setInputbyaniValue] = useState("0.75");
  const [inputplakValue, setInputplakValue] = useState("25");
  const [inputsıvaValue, setInputsıvaValue] = useState("22");
  const [inputkaplamaValue, setInputkaplamaValue] = useState("22");
  const [inputQValue, setInputQValue] = useState("2");
  const [inputfckValue, setInputfckValue] = useState("25");
  const [inputfykValue, setInputfykValue] = useState("420");
  const [inputgama_MCValue, setInputgama_MCValue] = useState("1.5");
  const [inputgama_MSValue, setInputgama_MSValue] = useState("1.15");
  const [inputpas_PayiValue, setInputpas_PayiValue] = useState("1.5");
  const basamakSayisi = parseFloat(input1Value);
  const y_YonuDegerResim = parseFloat(inputyValue);
  const x_YonuDegerResim = parseFloat(inputxValue);
  const b_basamakGenisligi = parseFloat(inputbValue);
  const byani_basamakGenisligi = parseFloat(inputbyaniValue);
  const Plak = parseFloat(inputplakValue);
  const Sıva = parseFloat(inputsıvaValue);
  const Kaplama = parseFloat(inputkaplamaValue);
  const Q_Yuku = parseFloat(inputQValue);
  const fck = parseFloat(inputfckValue);
  const fyk = parseFloat(inputfykValue);
  const gama_MC = parseFloat(inputgama_MCValue);
  const gama_MS = parseFloat(inputgama_MSValue);
  const pas_Payi = parseFloat(inputpas_PayiValue);
  const navigate = useNavigate();

  const basamakYuksekligi = y_YonuDegerResim / basamakSayisi;
  const basamak_Genisligi_A = (Math.PI * 1.5) / basamakSayisi;
  const fcd = fck / gama_MC;
  const fyd = fyk / gama_MS;
  const fctk = 0.35 * Math.sqrt(fck);
  const fctd = fctk / gama_MC;

  //!   Tan hesabı
  const tanValue = 0.6366; // Buraya istediğin tan(α) değerini yaz
  const alphaRad = Math.atan(tanValue);
  const alphaDeg = (alphaRad * 180) / Math.PI;

  //!   Sin hesabı

  const SinalphaDeg = 32.48;
  const SinalphaRad = (SinalphaDeg * Math.PI) / 180;
  const sinAlpha = Math.sin(SinalphaRad).toFixed(3);

  //!   Cos hesabı

  const CosalphaDeg = 32.48;
  const CosalphaRad = (CosalphaDeg * Math.PI) / 180;
  const CosAlpha = Math.cos(CosalphaRad).toFixed(3);

  //!   Yük hesabı
  const plak_Agırlıgı = 0.15 * Plak;
  const sıva_Agırlıgı = 0.015 * Sıva;
  const kaplama_Agırlıgı = 0.02 * Kaplama;
  const toplam_Agirlik = plak_Agırlıgı + sıva_Agırlıgı + kaplama_Agırlıgı;
  const yatay_Duzlem = toplam_Agirlik / CosAlpha;
  const basamaklardan_Gelen_Yuk = (basamakYuksekligi / 2) * Kaplama;
  const G_Yuku = basamaklardan_Gelen_Yuk + yatay_Duzlem;
  const Pd = G_Yuku * 1.4 + 1.6 * Q_Yuku;
  const q_hesabi = b_basamakGenisligi * Pd;
  const Ix = (b_basamakGenisligi * Math.pow(x_YonuDegerResim, 3)) / 12;
  const Iy = (x_YonuDegerResim * Math.pow(b_basamakGenisligi, 3)) / 12;
  const a = Ix / Iy;
  const c = (1 - Math.pow(CosAlpha, 2) / 2) * (1 - a);
  const r = 1.5;
  const jo = Math.PI / 2;
  const e_Bolu_r = Math.pow(b_basamakGenisligi, 2) / (12 * Math.pow(r, 2));
  const f = q_hesabi * Math.pow(r, 2) * (1 + e_Bolu_r / r);

  const aDeg = 32.48;
  const aRad = aDeg * (Math.PI / 180); // Dereceden radyana dönüşüm

  const part1 = (4 - 3 * c - a + e_Bolu_r) * (Math.sin(jo) - jo * Math.cos(jo));

  const part2 = (1 - c) * Math.pow(jo, 2) * Math.sin(jo);

  const delta05 =
    2 * q_hesabi * Math.pow(r, 2) * Math.tan(aRad) * (part1 - part2);
  const delta06 =
    2 *
    q_hesabi *
    Math.pow(r, 2) *
    ((1 - c) * (Math.PI / 2) * Math.cos(Math.PI / 2) -
      (2 - c + e_Bolu_r) * Math.sin(Math.PI / 2));
  const delta55 =
    Math.pow(0.637, 2) *
      (((2 - c) * Math.pow(Math.PI / 2, 3)) / 3 -
        (c * Math.pow(Math.PI / 2, 2) * Math.sin((2 * Math.PI) / 2)) / 2 -
        ((2 - 3 * c - 2 * a) *
          (Math.sin((2 * Math.PI) / 2) -
            2 * (Math.PI / 2) * Math.cos((2 * Math.PI) / 2))) /
          4) +
    ((2 * c - 1 + 3 * a) * (2 * (Math.PI / 2)) - Math.sin((2 * Math.PI) / 2)) /
      4;

  const delta56 =
    (-0.637 / 4) *
    (2 * (1 - c - a) * (2 * (Math.PI / 2) - Math.sin((2 * Math.PI) / 2)) +
      c *
        (Math.sin((2 * Math.PI) / 2) -
          2 * (Math.PI / 2) * Math.cos((2 * Math.PI) / 2)));
  const delta66 = (2 - c) * (Math.PI / 2) + c * Math.sin((2 * Math.PI) / 2);
  // X5= -(δ66 * δo5 - δ56 * δo6)/(δ55 * δ66 -δ56²)
  const X5 =
    -(delta66 * delta05 - delta56 * delta06) /
    (delta55 * delta66 - Math.pow(delta56, 2));
  const X6 =
    -(delta55 * delta06 - delta56 * delta05) /
    (delta55 * delta66 - Math.pow(delta56, 2));

  //!  φ = 0 durumu

  const fi1_Durumu = 0;
  const N =
    q_hesabi * r * Math.sin(aRad) * fi1_Durumu -
    (Math.cos(aRad) * X5 * Math.sin(fi1_Durumu)) / r;
  const Qx =
    q_hesabi * r * Math.cos(aRad) * fi1_Durumu +
    (Math.sin(aRad) * X5 * Math.sin(fi1_Durumu)) / r;
  const Qy = (X5 * Math.cos(fi1_Durumu)) / r;
  const MT =
    q_hesabi * r * r * Math.cos(aRad) * fi1_Durumu +
    (Math.sin(aRad) * X5 - X6 * Math.cos(aRad)) * Math.sin(fi1_Durumu) -
    X5 * Math.sin(aRad) * fi1_Durumu * Math.cos(fi1_Durumu);
  const Mx =
    -q_hesabi * r * r * (1 + e_Bolu_r) -
    X5 * 0.637 * fi1_Durumu * Math.sin(fi1_Durumu) +
    X6 * Math.cos(fi1_Durumu);
  const My =
    -q_hesabi * r * r * Math.sin(fi1_Durumu) * fi1_Durumu +
    (X5 * Math.cos(aRad) + X6 * Math.sin(aRad)) * Math.sin(fi1_Durumu) +
    X5 * Math.sin(aRad) * 0.637 * fi1_Durumu * Math.cos(fi1_Durumu);

  //!  φ = 1,571 durumu

  const fi2_Durumu = 1.571;
  const N1 =
    q_hesabi * r * Math.sin(aRad) * fi2_Durumu -
    (Math.cos(aRad) * X5 * Math.sin(fi2_Durumu)) / r;
  const Qx1 =
    q_hesabi * r * Math.cos(aRad) * fi2_Durumu +
    (Math.sin(aRad) * X5 * Math.sin(fi2_Durumu)) / r;
  const Qy1 = (X5 * Math.cos(fi2_Durumu)) / r;
  const MT1 =
    q_hesabi * r * r * Math.cos(aRad) * fi2_Durumu +
    (Math.sin(aRad) * X5 - X6 * Math.cos(aRad)) * Math.sin(fi2_Durumu) -
    X5 * Math.sin(aRad) * fi2_Durumu * Math.cos(fi2_Durumu);
  const Mx1 =
    -q_hesabi * r * r * (1 + e_Bolu_r) -
    X5 * 0.637 * fi2_Durumu * Math.sin(fi2_Durumu) +
    X6 * Math.cos(fi2_Durumu);
  const My1 =
    -q_hesabi * Math.pow(r, 2) * Math.sin(aRad) * fi2_Durumu +
    (X5 * Math.cos(aRad) + X6 * Math.sin(aRad)) * Math.sin(fi2_Durumu) +
    X5 * Math.sin(aRad) * Math.tan(aRad) * fi2_Durumu * Math.cos(fi2_Durumu);

  //!  φ = 1,571 durumu

  const fi3_Durumu = 0.785;
  const N2 =
    q_hesabi * r * Math.sin(aRad) * fi3_Durumu -
    (Math.cos(aRad) * X5 * Math.sin(fi3_Durumu)) / r;
  const Qx2 =
    q_hesabi * r * Math.cos(aRad) * fi3_Durumu +
    (Math.sin(aRad) * X5 * Math.sin(fi3_Durumu)) / r;
  const Qy2 = (X5 * Math.cos(fi3_Durumu)) / r;
  const MT2 =
    q_hesabi * r * r * Math.cos(aRad) * fi3_Durumu +
    (Math.sin(aRad) * X5 - X6 * Math.cos(aRad)) * Math.sin(fi3_Durumu) -
    X5 * Math.sin(aRad) * fi3_Durumu * Math.cos(fi3_Durumu);
  const Mx2 =
    -q_hesabi * r * r * (1 + e_Bolu_r) -
    X5 * 0.637 * fi3_Durumu * Math.sin(fi3_Durumu) +
    X6 * Math.cos(fi3_Durumu);
  const My2 =
    -q_hesabi * Math.pow(r, 2) * Math.sin(aRad) * fi3_Durumu +
    (X5 * Math.cos(aRad) + X6 * Math.sin(aRad)) * Math.sin(fi3_Durumu) +
    X5 * Math.sin(aRad) * Math.tan(aRad) * fi3_Durumu * Math.cos(fi3_Durumu);

  //! Max değerler
  const Nmax = N1 > N2 ? `${N1.toFixed(2)}` : `${N2.toFixed(2)}`;
  const Qxmax = Qx1 > Qx2 ? ` ${Qx1.toFixed(2)}` : `${Qx2.toFixed(2)}`;

  const Qymax = (() => {
    const absN = Math.abs(Qy);
    const absN1 = Math.abs(Qy1);
    const absN2 = Math.abs(Qy2);
    const max = Math.max(absN, absN1, absN2);
    return `${max.toFixed(2)}`;
  })();

  const Mxmax = (() => {
    const absN = Math.abs(Mx);
    const absN1 = Math.abs(Mx1);
    const absN2 = Math.abs(Mx2);
    const max = Math.max(absN, absN1, absN2);
    return `${max.toFixed(2)}`;
  })();

  const Mymax = (() => {
    const absN = Math.abs(My);
    const absN1 = Math.abs(My1);
    const absN2 = Math.abs(My2);
    const max = Math.max(absN, absN1, absN2);
    return `${max.toFixed(2)}`;
  })();

  const MTmax = (() => {
    const absN = Math.abs(MT);
    const absN1 = Math.abs(MT1);
    const absN2 = Math.abs(MT2);
    const max = Math.max(absN, absN1, absN2);
    return `${max.toFixed(2)}`;
  })();
  const NmaxVal = Math.max(Math.abs(N), Math.abs(N1), Math.abs(N2));
  const MymaxVal = Math.max(Math.abs(My), Math.abs(My1), Math.abs(My2));

  const alpha_X = (Mymax / Mxmax) * (x_YonuDegerResim / b_basamakGenisligi);
  const alpha_Y = (Mxmax / Mymax) * (b_basamakGenisligi / x_YonuDegerResim);
  const hb = 0.92 * b_basamakGenisligi;
  const hd = 0.92 * x_YonuDegerResim;
  const Mey = MymaxVal - NmaxVal * (hb - b_basamakGenisligi / 2);
  const Mey_Alt = MymaxVal + NmaxVal * (hb - b_basamakGenisligi / 2);
  const bw = 150;
  const d = 1485;
  const basinc_Derinligi =
    d - Math.sqrt(d * d - (2 * Mey * Math.pow(10, 6)) / (0.85 * fcd * bw));
  const basinc_Derinligi_Alt =
    d - Math.sqrt(d * d - (2 * Mey_Alt * Math.pow(10, 6)) / (0.85 * fcd * bw));
  const As1 = (Mey * Math.pow(10, 6)) / (fyd * (d - basinc_Derinligi / 2));
  const As1_Alt =
    (Mey_Alt * Math.pow(10, 6)) / (fyd * (d - basinc_Derinligi_Alt / 2));
  const As2 = (Nmax * 1000) / fyd;
  const As3 = As1 + As2;
  const As4 = As1_Alt - As2;
  const Asmin = 0.0015 * bw * d;
  const fi16_alan = (Math.PI * Math.pow(16, 2)) / 4; // ⌀16'nın bir adet alanı

  const adet = Math.ceil(Asmin / fi16_alan); // Yukarı yuvarla
  const toplamAlan = adet * fi16_alan;
  const fi16Sonuc = `${adet} adet ⌀16 yeterlidir. Sağlanan alan: ${toplamAlan.toFixed(
    2
  )} mm²`;
  const Vmax = (0.22 * fcd * bw * d) / 1000;
  const Vcr = (0.65 * fctd * bw * d) / 1000;
  const Td_degeri = MTmax;
  const Vd_degeri = Qymax;
  const Aso = (adet * Math.PI * 10 * 10) / 4;
  const hk = 84;
  const bk = 1434;
  const Ae = hk * bk;
  const ue = 3036;
  const h = 150;
  const S_Burulma_Momenti = (bw * bw * h) / 3;
  const TdVd_Hesabi =
    (Td_degeri * Math.pow(10, 3)) / S_Burulma_Momenti +
    (Vd_degeri * Math.pow(10, 3)) / (1500 * 135);
  const Vcr2 = ((0.65 * fctd * bw) / 100) * 135;
  const Tcr = (1.35 * fctd * S_Burulma_Momenti) / 10000;
  const Aov = ((Vd_degeri - 0.8 * Vcr2) * 1000) / (adet * fyd * 135);
  const Aot = (Td_degeri * Math.pow(10, 6)) / (adet * Ae * fyd);
  const Ao = Aov + Aot;
  const Asl =
    ((Td_degeri * Math.pow(10, 6) * ue) / (2 * fyd * Ae)) * (fyd / fyd);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative isolate overflow-hidden">
      {/* Arka plan geçişli efekt */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 w-[64rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#gradientId)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="gradientId">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>

      {/* Ana içerik kutusu */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">
        <div
          style={{ padding: "20px", fontFamily: "Arial" }}
          className="bg-white"
        >
          <div className="w-full bg-gray-900 text-white py-4 shadow-md rounded-2xl">
            <div className="max-w-6xl mx-auto text-center px-4">
              <h1 className="text-xl md:text-3xl font-bold tracking-wide">
                TAM AÇILIM AÇISI 180 DERECE OLAN İKİ UCU ANKASTRE HELİSEL
                MERDİVEN HESABI
              </h1>
              <p className="text-center pr-6 text-sm text-red-400 mt-2 ">
                sadece sarı hücrelere veri girişi yapınız
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => navigate("/")}
              style={{
                paddingRight: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
              className="mt-8 fixed bottom-0 text-black right-0 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium  shadow-md transition duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Ana Menüye Dön
            </button>
          </div>
          <div className="flex justify-between ">
            <div className="flex-1  p-2">
              <img src={ilkresim} alt="ilkresim" className="mb-6 rounded-md" />
            </div>
            <div className="w-1/2  p-2">
              {" "}
              <div className="Input_1">
                <input
                  className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                  style={{ width: `${input1Value.length + 4}ch` }}
                  type="number"
                  value={input1Value}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Basamak sayısı girin"
                />
                <div>
                  {input1Value !== "" && !isNaN(basamakSayisi) && (
                    <p>Basamak sayısı = {basamakSayisi}</p>
                  )}
                </div>
              </div>
              <div className="Input_2y">
                <input
                  className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                  style={{
                    width: `${input1Value.length + 4}ch`,
                    position: "absolute",
                    top: "220px",
                    left: "670px",
                    zIndex: 9999,
                    margin: "0px",
                    background: "transparent", // arka plan yok
                    border: "none", // istersen kaldıralım
                    padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                    fontSize: "12px", // yazı boyutu
                    outline: "none", // tıklanınca kenar çizgisi olmasın
                    borderRadius: "4px", // köşeleri yuvarlak
                    color: "#000",
                    transform: "rotate(270deg)", // yazı rengi (istenirse değişir)
                  }}
                  type="number"
                  value={inputyValue}
                  onChange={(e) => setInputyValue(e.target.value)}
                />
              </div>
              <div className="Input_3x">
                <input
                  className="inline-block w-auto px-1 py-1 text-sm border border-gray-300 rounded"
                  style={{
                    width: `${input1Value.length + 7}ch`,
                    position: "absolute",
                    top: "320px",
                    left: "660px",
                    zIndex: 9999,
                    margin: "0px",
                    background: "transparent", // arka plan yok
                    border: "none", // istersen kaldıralım
                    padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                    fontSize: "12px", // yazı boyutu
                    outline: "none", // tıklanınca kenar çizgisi olmasın
                    borderRadius: "4px", // köşeleri yuvarlak
                    color: "#000", // yazı rengi (istenirse değişir)
                  }}
                  type="number"
                  value={inputxValue}
                  onChange={(e) => setInputxValue(e.target.value)}
                />
              </div>
              <div className="Input_4b">
                <input
                  className="inline-block w-auto px-1 py-1 text-sm border border-gray-300 rounded"
                  style={{
                    width: `${input1Value.length + 7}ch`,
                    position: "absolute",
                    top: "554px",
                    left: "385px",
                    zIndex: 9999,
                    margin: "0px",
                    background: "transparent", // arka plan yok
                    border: "none", // istersen kaldıralım
                    padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                    fontSize: "12px", // yazı boyutu
                    outline: "none", // tıklanınca kenar çizgisi olmasın
                    borderRadius: "4px", // köşeleri yuvarlak
                    color: "#000", // yazı rengi (istenirse değişir)
                  }}
                  type="number"
                  value={inputbValue}
                  onChange={(e) => setInputbValue(e.target.value)}
                />
              </div>
              <div className="Input_4b">
                <input
                  className="inline-block w-auto px-1 py-1 text-sm border border-gray-300 rounded"
                  style={{
                    width: `${input1Value.length + 7}ch`,
                    position: "absolute",
                    top: "554px",
                    left: "490px",
                    zIndex: 9999,
                    margin: "0px",
                    background: "transparent", // arka plan yok
                    border: "none", // istersen kaldıralım
                    padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                    fontSize: "12px", // yazı boyutu
                    outline: "none", // tıklanınca kenar çizgisi olmasın
                    borderRadius: "4px", // köşeleri yuvarlak
                    color: "#000", // yazı rengi (istenirse değişir)
                  }}
                  type="number"
                  value={inputbyaniValue}
                  onChange={(e) => setInputbyaniValue(e.target.value)}
                />
              </div>
              <div className="Basamak_Yuksekligi">
                <p>
                  basamakYuksekligi = {y_YonuDegerResim} / {basamakSayisi} =
                  {basamakYuksekligi.toFixed(3)}
                </p>
              </div>
              <div className="Basamak_Genisligi">
                <p>
                  Basamak Genişliği a =π * 1.5 / {basamakSayisi} ={" "}
                  {basamak_Genisligi_A.toFixed(3)}
                </p>
              </div>{" "}
              <div className="merdiven_Egimi">
                <p>Merdiven eğimi</p>
                <p>tan α = 3 / 1,5 = 0.637</p>
                <p>derece = {alphaDeg.toFixed(2)}</p>
                <p>sin α ={sinAlpha}</p>
                <p>cos α ={CosAlpha}</p>
              </div>
              <div className="Yuk_Hesabi">
                <p>Yük Hesabı:</p>
                <div className="Input_5">
                  <div>
                    <p>
                      Plak Ağırlığı: 0,15 *{" "}
                      <input
                        className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                        style={{ width: `${input1Value.length + 4}ch` }}
                        type="number"
                        value={inputplakValue}
                        onChange={(e) => setInputplakValue(e.target.value)}
                        placeholder=""
                      />{" "}
                      KN/m3 = {plak_Agırlıgı} KN/m2
                    </p>
                  </div>
                </div>
                <p>
                  Sıva Ağırlığı: 0,015 *{" "}
                  <input
                    className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                    style={{ width: `${input1Value.length + 4}ch` }}
                    type="number"
                    value={inputsıvaValue}
                    onChange={(e) => setInputsıvaValue(e.target.value)}
                    placeholder=""
                  />{" "}
                  KN/m3 = {sıva_Agırlıgı.toFixed(2)} KN/m2
                </p>
                <p>
                  Kaplama Ağırlığı: 0,02 *{" "}
                  <input
                    className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                    style={{ width: `${input1Value.length + 4}ch` }}
                    type="number"
                    value={inputkaplamaValue}
                    onChange={(e) => setInputkaplamaValue(e.target.value)}
                    placeholder=""
                  />{" "}
                  KN/m3 = {kaplama_Agırlıgı} KN/m2
                </p>
                <p>Toplam Ağırlık : {toplam_Agirlik.toFixed(2)} KN/m2</p>
                <p>
                  Yatay düzlemde : {toplam_Agirlik.toFixed(2)} / {CosAlpha} =
                  {yatay_Duzlem.toFixed(2)} KN/m2
                </p>
                <p>
                  Basamaklardan : {basamakYuksekligi.toFixed(3)}/ 2 * {Kaplama}{" "}
                  = {basamaklardan_Gelen_Yuk.toFixed(3)} KN/m2
                </p>
                <p>G = {G_Yuku.toFixed(3)}</p>
                <p>
                  Hareketli yük Q ={" "}
                  <input
                    type="number"
                    value={inputQValue}
                    onChange={(e) => setInputQValue(e.target.value)}
                    placeholder=""
                  />{" "}
                </p>
                <p>
                  Pd = 1,4 * {G_Yuku.toFixed(3)} + 1,6 * {Q_Yuku} ={" "}
                  {Pd.toFixed(2)} KN/m2
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>b= {b_basamakGenisligi} m için y</p>
            <p>
              q = {b_basamakGenisligi} * {Pd.toFixed(2)} = {q_hesabi.toFixed(2)}{" "}
              KN/m
            </p>
            {/* b_basamakGenisligi * Math.pow(x_YonuDegerResim, 3)) / 12; */}
            <p>
              Ix = {b_basamakGenisligi} * {x_YonuDegerResim}³ / 12 ={" "}
              {Ix.toFixed(6)} m4
            </p>
            <p>
              Iy = {x_YonuDegerResim} * {b_basamakGenisligi}³ / 12 ={" "}
              {Iy.toFixed(6)} m4
            </p>
            <p>a = Ix / Iy = {a}</p>
            <p>
              c = (1- cos²α/2)*(1-{a}) = {c.toFixed(3)}
            </p>
            <p>e / r = b² / (12 * r²)= {e_Bolu_r.toFixed(3)} </p>
            <p>f = -q * r² *(1 + (e / r) / r) = -{f} </p>
            <p>
              δo5 = 2 * q * r² * tan α * ( ( 4 - 3 * c - a + e / r ) * ( sin φ -
              φ * cos φ ) - ( 1 - c ) * φ² * sin φ ) = {delta05.toFixed(2)}
            </p>
            <p>
              {" "}
              δo6 = 2 * q * r² * ( (1-c) * φ * cos φ - ( 2 - c + e / r ) * sin φ
              ) = {delta06.toFixed(0)}
            </p>
            <p>
              δ55 = tan²α *((2-c)* φ³ / 3 - c * φ² * sin(2 * φ)/2-(2 - 3 * c - 2
              * a) * (sin(2 * φ)-2 * φ * cos(2 * φ))/4 + (2 * c - 1 +3 * a)*(2 *
              φ - sin(2 * φ)) / 4)={delta55.toFixed(2)}
            </p>
            <p>
              δ56 = -tan α / 4 * (2(1-c-a)*(2 * φ - sin(2 * φ))+c*(sin(2 * φ)-2
              * φ * cos(2 * φ))) = {delta56}
            </p>
            <p> δ66 = (2-c)* φ + c * sin(2 * φ)/2 = {delta66.toFixed(2)} </p>
            <p> X1=X2=X3=X4=0 </p>
            <p>X5= -(δ66 * δo5 - δ56 * δo6)/(δ55 * δ66 -δ56²) = {X5} </p>
            <p>X6= -(δ55 * δo6 - δ56 * δo5)/(δ55 * δ66 -δ56²) = {X6} </p>
          </div>
          <div className="Aciklama">
            <p>
              <strong>φ:</strong> Merdiven ortasından başlayarak iniş
              doğrultusunda pozitiftir, çıkış doğrultusunda negatiftir. (Açılım
              açısı)
            </p>
            <p>
              <strong>N:</strong> Basınç (+), çekme negatif (-) olarak alınır.
              (Normal kuvvet)
            </p>
            <p>
              <strong>Mx:</strong> Alt kenarda çekme gerilmesi doğuruyorsa
              pozitif (+), üst kenarda çekme gerilmesi doğuruyorsa negatif (-)
              alınır. (Eğilme momenti)
            </p>
            <p>
              <strong>My:</strong> İç kenarda çekme gerilmesi doğuruyorsa
              pozitif (+), dış kenarda çekme gerilmesi doğuruyorsa negatif (-)
              alınır. (Eğilme momenti)
            </p>
            <p>
              <strong>Qx:</strong> Üstten etkirse pozitif (+), alttan etkirse
              negatif (-) alınır. (Kesme kuvveti)
            </p>
            <p>
              <strong>Qy:</strong> İçten etkirse pozitif (+), dıştan etkirse
              negatif (-) alınır. (Kesme kuvveti)
            </p>
            <p>
              <strong>Mt:</strong> Sağa çıkan merdivende sağa döndürürse veya
              sola çıkan merdivende sola döndürürse pozitif (+) alınır. (Burulma
              momenti)
            </p>
          </div>
          <div className="fi_0_hesaplari">
            <strong>
              <h3>φ = 0 için kesit tesirleri</h3>
            </strong>
            <p>N= q * r * sin α * φ - cos α * X5 * sin φ / r = {N} KN</p>
            <p>Qx = q * r * cos α * φ + sin α * X5 * sin φ / r = {Qx} KN</p>
            <p>Qy= X5 * cos φ / r = {Qy.toFixed(1)} KN</p>
            <p>
              MT = q * r² * cos α * φ + ( sin α * X5 - X6 * cos α ) * sin φ - X5
              * sin α * φ * cos φ = {MT} KNm
            </p>
            <p>
              Mx = - q * r² * ( 1 + e / r ) - X5 * tan α * φ * sin φ + X6 * cos
              φ = {Mx.toFixed(2)} KNm
            </p>
            <p>
              My = - q * r² * sin α * φ + ( X5 * cos α + X6 * sin α ) * sin φ *
              + X5 * sin α * tan α * φ * cos φ = {My} KNm
            </p>
          </div>
          <div className="fi_1,571_hesaplari">
            <strong>
              <h3>φ = π/2 = 1,571 için kesit tesirleri</h3>
            </strong>
            <p>
              N= q * r * sin α * φ - cos α * X5 * sin φ / r = {N1.toFixed(2)} KN
            </p>
            <p>
              Qx = q * r * cos α * φ + sin α * X5 * sin φ / r = {Qx1.toFixed(2)}{" "}
              KN
            </p>
            <p>Qy= X5 * cos φ / r = {Qy1.toFixed(1)} KN</p>
            <p>
              MT = q * r² * cos α * φ + ( sin α * X5 - X6 * cos α ) * sin φ - X5
              * sin α * φ * cos φ = {MT1.toFixed(2)} KNm
            </p>
            <p>
              Mx = - q * r² * ( 1 + e / r ) - X5 * tan α * φ * sin φ + X6 * cos
              φ = {Mx1.toFixed(2)} KNm
            </p>
            <p>
              My = - q * r² * sin α * φ + ( X5 * cos α + X6 * sin α ) * sin φ *
              + X5 * sin α * tan α * φ * cos φ = {My1.toFixed(1)} KNm
            </p>
          </div>
          <div className="fi_0,785_hesaplari">
            <strong>
              <h3>φ = π/4 = 0,785 için kesit tesirleri</h3>
            </strong>
            <p>
              N= q * r * sin α * φ - cos α * X5 * sin φ / r = {N2.toFixed(2)} KN
            </p>
            <p>
              Qx = q * r * cos α * φ + sin α * X5 * sin φ / r = {Qx2.toFixed(2)}{" "}
              KN
            </p>
            <p>Qy= X5 * cos φ / r = {Qy2.toFixed(1)} KN</p>
            <p>
              MT = q * r² * cos α * φ + ( sin α * X5 - X6 * cos α ) * sin φ - X5
              * sin α * φ * cos φ = {MT2.toFixed(2)} KNm
            </p>
            <p>
              Mx = - q * r² * ( 1 + e / r ) - X5 * tan α * φ * sin φ + X6 * cos
              φ = {Mx2.toFixed(2)} KNm
            </p>
            <p>
              My = - q * r² * sin α * φ + ( X5 * cos α + X6 * sin α ) * sin φ *
              + X5 * sin α * tan α * φ * cos φ = {My2.toFixed(0)} KNm
            </p>
          </div>
          <div
            className="Diagramlar"
            style={{
              position: "relative", // BU ÇOK ÖNEMLİ! Altındaki p etiketinin sınırı bu olacak
            }}
          >
            <img src={KesitDiagramlari} alt="KesitDiagramlari" />
            <p
              style={{
                position: "absolute",
                top: "150px",
                left: "309px",
                zIndex: 9999,
                margin: "0px",
                background: "transparent", // arka plan yok
                border: "none", // istersen kaldıralım
                padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                fontSize: "12px", // yazı boyutu
                outline: "none", // tıklanınca kenar çizgisi olmasın
                borderRadius: "4px", // köşeleri yuvarlak
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {N1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "150px",
                left: "48px",
                zIndex: 9999,
                margin: "0px",
                background: "transparent", // arka plan yok
                border: "none", // istersen kaldıralım
                padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                fontSize: "12px", // yazı boyutu
                outline: "none", // tıklanınca kenar çizgisi olmasın
                borderRadius: "4px", // köşeleri yuvarlak
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              -{N1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "50px",
                left: "55px",
                zIndex: 9999,
                margin: "0px",
                background: "transparent", // arka plan yok
                border: "none", // istersen kaldıralım
                padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                fontSize: "12px", // yazı boyutu
                outline: "none", // tıklanınca kenar çizgisi olmasın
                borderRadius: "4px", // köşeleri yuvarlak
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              -{N2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "50px",
                left: "318px",
                zIndex: 9999,
                margin: "0px",
                background: "transparent", // arka plan yok
                border: "none", // istersen kaldıralım
                padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                fontSize: "12px", // yazı boyutu
                outline: "none", // tıklanınca kenar çizgisi olmasın
                borderRadius: "4px", // köşeleri yuvarlak
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {N2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "50px",
                left: "700px",
                zIndex: 9999,
                margin: "0px",
                background: "transparent", // arka plan yok
                border: "none", // istersen kaldıralım
                padding: "4px 8px", // iç boşluk (kutu büyüklüğü)
                fontSize: "12px", // yazı boyutu
                outline: "none", // tıklanınca kenar çizgisi olmasın
                borderRadius: "4px", // köşeleri yuvarlak
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Qx2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "50px",
                left: "455px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              -{Qx2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "153px",
                left: "455px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              -{Qx1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "153px",
                left: "700px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Qx1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "200px",
                left: "180px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Qy.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "250px",
                left: "60px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Qy2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "250px",
                left: "305px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Qy2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "545px",
                left: "305px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {My1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "545px",
                left: "45px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {My1.toFixed(2) * -1}
            </p>
            <p
              style={{
                position: "absolute",
                top: "430px",
                left: "55px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {My2.toFixed(2) * -1}
            </p>
            <p
              style={{
                position: "absolute",
                top: "440px",
                left: "295px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {My2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "220px",
                left: "565px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Mx.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "363px",
                left: "700px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Mx1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "363px",
                left: "430px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Mx1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "250px",
                left: "445px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Mx2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "250px",
                left: "690px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {Mx2.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "545px",
                left: "690px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {MT1.toFixed(2)}
            </p>
            <p
              style={{
                position: "absolute",
                top: "545px",
                left: "435px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {MT1.toFixed(2) * -1}
            </p>
            <p
              style={{
                position: "absolute",
                top: "430px",
                left: "445px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {MT2.toFixed(2) * -1}
            </p>
            <p
              style={{
                position: "absolute",
                top: "440px",
                left: "675px",
                zIndex: 9999,
                margin: "0px",
                fontSize: "12px", // yazı boyutu
                color: "#000", // yazı rengi (istenirse değişir)
              }}
            >
              {MT2.toFixed(2)}
            </p>
          </div>
          <div className="max_degerler">
            <p>Nmax: {Nmax}</p>
            <p>Qxmax: {Qxmax}</p>
            <p>Qymax: {Qymax}</p>
            <p>Mxmax: {Mxmax}</p>
            <p>Mymax: {Mymax}</p>
            <p>MTmax: {MTmax}</p>
          </div>
          <div className="Beton_Celik_degerleri">
            <strong>
              <h3>Beton ve çelik karakteristik değerleri : </h3>
            </strong>
            <p>
              Fck = C =
              <input
                className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                style={{ width: `${input1Value.length + 4}ch` }}
                type="number"
                value={inputfckValue}
                onChange={(e) => setInputfckValue(e.target.value)}
                placeholder=""
              />{" "}
              N/mm² (Mpa) (Beton silindirik karakteristik mukavemeti)
            </p>
            <p>
              Fyk = S =
              <input
                className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                style={{ width: `${input1Value.length + 4}ch` }}
                type="number"
                value={inputfykValue}
                onChange={(e) => setInputfykValue(e.target.value)}
                placeholder=""
              />{" "}
              N/mm² (Mpa) (Çelik akma mukavemeti)
            </p>
            <p>
              γmc =
              <input
                className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200 border-gray-300 rounded"
                style={{ width: `${input1Value.length + 4}ch` }}
                type="number"
                value={inputgama_MCValue}
                onChange={(e) => setInputgama_MCValue(e.target.value)}
                placeholder=""
              />
            </p>
            <p>
              fcd = {fck} / {gama_MC} = {fcd.toFixed(2)} N/mm²
            </p>
            <p>
              γms =
              <input
                className="inline-block w-auto px-1 py-1 text-sm border-0 bg-yellow-200  border-gray-300 rounded"
                style={{ width: `${input1Value.length + 4}ch` }}
                type="number"
                value={inputgama_MSValue}
                onChange={(e) => setInputgama_MSValue(e.target.value)}
                placeholder=""
              />
            </p>
            <p>
              fyd = {fyk} / {gama_MS} = {fyd.toFixed(2)} N/mm²
            </p>
            <p>
              fctk = 0,35 * √ {fck} = {fctk.toFixed(2)} N/mm²
            </p>
            <p>
              fctd = {fctk} / {gama_MC} = {fctd.toFixed(3)} N/mm²
            </p>
            <p>
              pas payı =
              <input
                type="number"
                value={inputpas_PayiValue}
                onChange={(e) => setInputpas_PayiValue(e.target.value)}
                placeholder=""
              />
              cm
            </p>
            <img src={betonvecelik} alt="betonvecelik" />
          </div>
          <div className="Ust_Uc_Betonarme_Hesabi">
            <strong>
              <h3>Üst ankastre uçta betonarme hesap</h3>
            </strong>
            <p>Üst uçta çekme</p>
            <p>
              N= {Nmax} d= {x_YonuDegerResim} b= {b_basamakGenisligi}
            </p>
            <p>αx= My/Mx * d /b = {alpha_X.toFixed(2)}</p>
            <p>αy= Mx/My * b /d = {alpha_Y.toFixed(3)}</p>
            <p>
              hb = 0,92 * b = {hb.toFixed(2)}m {"  "}
              {"  "} hd = 0,92 * d = {hd.toFixed(3)}m
            </p>
            <p>My = {Mymax} </p>
            <p>Qy = {Qymax} </p>
            <p>Mey= My- N * (hb-b/2) = {Mey.toFixed(2)} KNm</p>
            <p>
              Betonarme hesap için : bw= 0,15 m{"  "} {"  "} d = 1,485 m
            </p>
            <p>
              Basınç bloğu derinliği a= d-√(d²-2*Md/(0,85*fcd*bw)) ={" "}
              {basinc_Derinligi.toFixed(2)} mm
            </p>
            <p>
              As hesap = Md / (fyd*(d-a/2)) = {As1.toFixed(0)} mm² (momentten
              ötürü)
            </p>
            <p>
              As hesap = Nd / fyd = {As2.toFixed(1)} mm² (normal kuvvetten
              ötürü)
            </p>
            <p>
              As hesap = {As1.toFixed(0)} + {As2.toFixed(1)} = {As3.toFixed(0)}
            </p>
            <p>Asmin = 0,0015 * bw * d = {Asmin.toFixed(1)} mm²</p>
            <p>{fi16Sonuc}</p>
            <p>
              Vmax = 0.22 * fcd * bw * d = {Vmax.toFixed(1)} KN
              {" > Vd= 29,52 KN "}
              <span style={{ color: "red", marginLeft: "10px" }}>
                {Vmax > Qymax
                  ? "Plak kalınlığı yeterlidir"
                  : "Plak kalınlığı yeterli değildir"}
              </span>
            </p>
            <p>
              Kayma kontrolü Vcr = 0.65 * fctd * bw * d = {Vcr.toFixed(0)} KN
              {" > Vd= 29,52 KN "}
              <span style={{ color: "red", marginLeft: "10px" }}>
                {Vmax > Qymax
                  ? "Plak kesme donatısına ihtiyaç yok"
                  : "Plak kesme donatısına ihtiyaç var"}
              </span>
            </p>
          </div>
          <div className="Alt_Uc_Betonarme_Hesabi">
            <strong>
              <h3>Alt ankastre uçta betonarme hesap</h3>
            </strong>
            <p>Alt uçta çekme</p>
            <p>
              N= {Nmax} d= {x_YonuDegerResim} b= {b_basamakGenisligi}
            </p>
            <p>My = {Mymax} </p>
            <p>Qy = {Qymax} </p>
            <p>Mey= My+ N * (hb-b/2) = {Mey_Alt.toFixed(2)} KNm</p>
            <p>
              Betonarme hesap için : bw= 0,15 m{"  "} {"  "} d = 1,485 m
            </p>
            <p>
              Basınç bloğu derinliği a= d-√(d²-2*Md/(0,85*fcd*bw)) ={" "}
              {basinc_Derinligi_Alt.toFixed(2)} mm
            </p>
            <p>
              As hesap = Md / (fyd*(d-a/2)) = {As1_Alt.toFixed(0)} mm²
              (momentten ötürü)
            </p>
            <p>
              As hesap = Nd / fyd = {As2.toFixed(1)} mm² (normal kuvvetten
              ötürü)
            </p>
            <p>
              As hesap = {As1.toFixed(0)} + {As2.toFixed(1)} = {As4.toFixed(0)}{" "}
              mm²
            </p>
            <p>Asmin = 0,0015 * bw * d = {Asmin.toFixed(1)} mm²</p>
            <p>{fi16Sonuc}</p>
            <p>
              Vmax = 0.22 * fcd * bw * d = {Vmax.toFixed(1)} KN
              {" > Vd= 29,52 KN "}
              <span style={{ color: "red", marginLeft: "10px" }}>
                {Vmax > Qymax
                  ? "Plak kalınlığı yeterlidir"
                  : "Plak kalınlığı yeterli değildir"}
              </span>
            </p>
            <p>
              Kayma kontrolü Vcr = 0.65 * fctd * bw * d = {Vcr.toFixed(0)} KN
              {" > Vd= 29,52 KN "}
              <span style={{ color: "red", marginLeft: "10px" }}>
                {Vmax > Qymax
                  ? "Plak kesme donatısına ihtiyaç yok"
                  : "Plak kesme donatısına ihtiyaç var"}
              </span>
            </p>
          </div>
          <div className="Burulma_Hesabi">
            <h3>Burulma Hesabı </h3>
            <p>Td = {Td_degeri} </p>
            <p>Vd = {Vd_degeri} </p>
            <p>n = {adet} adet</p>
            <p>Aso = n * π * ⌀² / 4 = {Aso.toFixed(1)} mm²</p>
            <p>Çekirdek yüksekliği hk = 84 mm</p>
            <p>Çekirdek genişliği bk = 1434 mm</p>
            <p>Çekirdek alanı Ae = hk * bk = {Ae} mm²</p>
            <p>Çekirdek alanı çevresi ue = 3036 mm</p>
            <p>
              Burulma dayanım momenti S = bw² * h/3 = {S_Burulma_Momenti} mm³
            </p>
            <p>( Td / S ) + ( Vd / ( bw * d ) )= {TdVd_Hesabi.toFixed(2)}</p>
            <p>0,22 * fcd = {(0.22 * fcd).toFixed(2)} N/mm²</p>
            <p>
              0,65 * fctd * S = {(0.65 * fctd * S_Burulma_Momenti).toFixed(0)}
              Nmm
            </p>
            <p>
              s = Aso * fyd / (0.3 * fctd * bx)={" "}
              {((Aso * fyd) / (0.3 * fctd * bw * 10)).toFixed(2)} mm
            </p>
            <p>
              Vcr = 0,65 * fctd * bw * d ={" "}
              {(((0.65 * fctd * bw) / 100) * 135).toFixed(1)} KN
            </p>
            <p>Vc = 0.8 * Vcr = {(0.8 * Vcr2).toFixed(1)} KN</p>
            <p>Tcr = 1.35 * fctd * S = {Tcr.toFixed(1)} KN</p>
            <p>
              ( Vd / Vcr )² + ( Td / Tcr )² ={" "}
              {(
                Math.pow(Vd_degeri / Vcr2, 2) + Math.pow(Td_degeri / Tcr, 2)
              ).toFixed(3)}
            </p>
            <p>Aov / s = ( Vd - Vc ) / ( n * fyd * d ) = {Aov.toFixed(0)}</p>
            <p>Aot / s = Td / ( 2 * Ae * fyd ) = {Aot.toFixed(3)}</p>
            <p>Ao / s = Aov / s + Aot / s = {Ao.toFixed(1)}</p>
            <p>
              Td / ( Vd * bw ) ={" "}
              {(Td_degeri / ((Vd_degeri * bw) / 100)).toFixed(3)}
            </p>
            <p>
              0.15 * fctd / fyd * ( 1 + 1.3 * Td / ( Vd * bw ) ) * bw ={" "}
              {(
                ((0.15 * fctd) / fyd) *
                (1 + (1.3 * Td_degeri) / (Vd_degeri * bw)) *
                bw *
                10
              ).toFixed(2)}
            </p>
            <p>
              smin = Ao / ( 0.15 * fctd / fyd * ( 1 + 1.3 * Td / ( Vd * bw ) ) *
              bw) ={" "}
              {Aso /
                (((0.15 * fctd) / fyd) *
                  (1 + (1.3 * Td_degeri) / (Vd_degeri * bw)) *
                  bw *
                  10)}{" "}
              mm
            </p>
            <p>smin = ue / 8 = {ue / 8} mm</p>
            <p>smin = 300 mm </p>
            <p>
              Asl = Td * ue / ( 2 * fyd * Ae ) * ( fywd / fyd ) ={" "}
              {Asl.toFixed(1)} mm²
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
