import "./App.css";

const services = [
  {
    icon: "🚗",
    title: "ตรวจสภาพรถ",
    text: "ตรวจสภาพรถยนต์และรถจักรยานยนต์",
  },
  {
    icon: "📄",
    title: "ต่อภาษีประจำปี",
    text: "บริการต่อภาษีรถประจำปีอย่างสะดวก",
  },
  {
    icon: "🛡️",
    title: "พ.ร.บ.",
    text: "บริการทำ พ.ร.บ. รถยนต์และรถจักรยานยนต์",
  },
  {
    icon: "✅",
    title: "ประกันชั้น 1-2-3",
    text: "บริการประกันภัยรถยนต์ครบประเภท",
  },
  {
    icon: "🔁",
    title: "โอนรถทุกชนิด",
    text: "บริการเอกสารโอนรถทุกประเภท",
  },
  {
    icon: "🪟",
    title: "ติดฟิล์ม",
    text: "ติดฟิล์มรถยนต์ อาคาร และโรงงาน",
  },
  {
    icon: "💨",
    title: "แก้ควันดำ",
    text: "บริการแก้ไขปัญหารถยนต์ควันดำ",
  },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="brand">
          <img src="/images/logo2.png" alt="ตรอ.เบธเอล4T" />
          <span>ตรอ.เบธเอล4T</span>
        </div>

        <a
                href="https://line.me/ti/p/~0656093295"
                target="_blank"
                rel="noopener noreferrer"
                className="btn greenBtn2"
              >
                💬 แชท LINE
              </a>
      </header>

     <section className="hero">
  <div className="heroGlow heroGlowOne"></div>
  <div className="heroGlow heroGlowTwo"></div>

  <div className="heroContent">
    <div className="heroText">
      <span className="eyebrow">สถานตรวจสภาพรถเอกชน</span>

      <h1>
        ตรวจสภาพรถครบวงจร <br />
        ที่ <span>ตรอ.เบธเอล4T</span>
      </h1>

      <p>
        บริการตรวจสภาพรถยนต์ รถจักรยานยนต์ ต่อภาษี พ.ร.บ.
        ประกันภัย โอนรถ ติดฟิล์ม และแก้ไขรถยนต์ควันดำ
      </p>

      <div className="heroActions">
        <a href="tel:0656093295" className="heroBtn heroBtnPrimary">
          📞 โทร 065-609-3295
        </a>

        <a
          href="https://line.me/ti/p/~0656093295"
          target="_blank"
          rel="noopener noreferrer"
          className="heroBtn heroBtnLine"
        >
          💬 แอด LINE
        </a>
      </div>

      <div className="heroTrust">
        <span>รวดเร็ว</span>
        <span>มาตรฐาน</span>
        <span>บริการด้วยใจ</span>
      </div>
    </div>

    <div className="heroVisual">
      <div className="heroLogoCard">
        <img src="/images/logo.png" alt="ตรอ.เบธเอล4T" />
      </div>

      <div className="floatingBadge topBadge">✅ ครบวงจร</div>
      <div className="floatingBadge bottomBadge">🚗 ตรวจสภาพรถ</div>
    </div>
  </div>
</section>

      <section className="services">
        <div className="sectionTitle">
          <span>Our Services</span>
          <h2>บริการของเรา</h2>
          <p>บริการด้านรถยนต์ครบวงจร พร้อมให้คำแนะนำทุกขั้นตอน</p>
        </div>

        <div className="serviceGrid">
          {services.map((item, index) => (
            <div className="serviceCard" key={index}>
              <div className="iconBox">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="sectionTitle light">
          <span>Why Choose Us</span>
          <h2>ทำไมต้องเลือกเรา</h2>
        </div>

        <div className="whyGrid">
          <div className="whyCard">
            <h3>⚡ รวดเร็ว</h3>
            <p>บริการไว ประหยัดเวลา ไม่ยุ่งยาก</p>
          </div>

          <div className="whyCard">
            <h3>✅ มาตรฐาน</h3>
            <p>ดำเนินงานถูกต้องตามขั้นตอน</p>
          </div>

          <div className="whyCard">
            <h3>🤝 ดูแลดี</h3>
            <p>ให้คำแนะนำเป็นกันเอง เข้าใจง่าย</p>
          </div>
        </div>
      </section>

      <section className="gallery">
  <div className="sectionTitle">
    <span>Gallery</span>
    <h2>ภาพบรรยากาศสถานตรวจสภาพรถ</h2>
    <p>พื้นที่ให้บริการจริง สะอาด กว้างขวาง และพร้อมรองรับลูกค้า</p>
  </div>

  <div className="galleryGrid">
    <img src="/images/gallery/shop-1.jpg" alt="ตรอ.เบธเอล4T บรรยากาศร้าน" />
    <img src="/images/gallery/shop-2.jpg" alt="ตรอ.เบธเอล4T ด้านหน้า" />
    <img src="/images/gallery/shop-3.jpg" alt="สถานตรวจสภาพรถ" />
     <img src="/images/gallery/shop-5.jpg" alt="สถานตรวจสภาพรถ" />
   
    <img src="/images/gallery/shop-7.jpg" alt="ลานจอดรถ" />
    <img src="/images/gallery/shop-6.jpg" alt="ช่องตรวจสภาพรถ" />
     <video
    className="galleryVideo"
    src="/videos/shop-video.mp4"
    autoPlay
    muted
    loop
    controls
  />
  </div>
</section>

<section className="mapSection">
  <div className="sectionTitle">
    <span>Location</span>
    <h2>แผนที่ร้าน</h2>
    <p>เดินทางมาที่ ตรอ.เบธเอล4T ได้สะดวก</p>
  </div>

  <div className="mapCard">
    <iframe
      title="ตรอ.เบธเอล4T Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.438288184778!2d100.63507277555838!3d13.752422386639514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d613ca54fa91b%3A0xe7b4719179ac5570!2z4LiV4Lij4LitLuC5gOC4muC4mOC5gOC4reC4pTTguJfguLU!5e0!3m2!1sen!2sth!4v1778251268874!5m2!1sen!2sth"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

      <section className="contact">
        <div className="contactCard">
          <h2>ติดต่อ ตรอ.เบธเอล4T</h2>
          <p>สอบถามบริการ หรือนัดหมายล่วงหน้าได้เลย</p>

          <div className="heroButtons center">
            <a href="tel:0656093295" className="btn yellowBtn">
              📞 โทรเลย
            </a>

            <a
              href="https://line.me/ti/p/~0656093295"
              target="_blank"
              rel="noopener noreferrer"
              className="heroBtn heroBtnLine"
            >
              💬แชท LINE
            </a>

            <a
              href="https://www.facebook.com/bethel4t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn blueBtn"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;