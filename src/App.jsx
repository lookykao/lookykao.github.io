import "./App.css";

const works = [
  {
    title: "戀路旅館",
    role: "日中譯作",
    meta: "Book Translation",
    note: "把一間旅館、一段關係，搬進另一種語言裡。",
  },
  {
    title: "內向人的使用手冊",
    role: "日中譯作",
    meta: "Book Translation",
    note: "給安靜但腦內劇場很多的人。",
  },
  {
    title: "吃貨筆記",
    role: "日中譯作",
    meta: "Essay Translation",
    note: "翻譯時常常覺得餓，這應該也算職業災害。",
  },
  {
    title: "歷史研究論文",
    role: "研究與寫作",
    meta: "Research",
    note: "從文本、制度與人群關係裡，找出事情如何變成今天的樣子。",
  },
  {
    title: "展覽文本",
    role: "翻譯／編輯",
    meta: "Exhibition Text",
    note: "讓作品、空間與觀眾之間，多一條可以走進去的路。",
  },
  {
    title: "地方導覽",
    role: "文化走讀",
    meta: "Local History",
    note: "廟、街、河、舊地名：地方不是背景，是會說話的文本。",
  },
];

const projects = [
  {
    title: "SugarPaw",
    label: "Care-Tech Product",
    text: "為糖尿病貓與照護者設計的健康照護 App，整合血糖、胰島素、餵食、體重、醫療紀錄、共照管理與資料匯出。起點是年年與 momo 的真實照護現場：混亂、高壓、心很累，但還是要把每一次判斷記清楚。",
  },
  {
    title: "日文二手書店企劃",
    label: "Bookstore Concept",
    text: "以選書、舊書流通、地方記憶與閱讀社群為核心的書店構想。想像一間書店如何成為城市裡保存知識、語言與記憶的節點，也讓人偶爾可以在書架前重新呼吸。",
  },
  {
    title: "地方導覽與文化走讀",
    label: "Local History Walks",
    text: "專注地方信仰、街區記憶、歷史材料與日常空間，尤其關注老新莊的地方紋理。把分散的地方線索組織成可理解、可感受，也值得慢慢走完的文化內容。",
  },
];

const cities = [
  {
    name: "新莊",
    text: "有廟、有河、有舊街，也有日常韌性的地方。老新莊是我最常回頭閱讀的地方文本。",
  },
  {
    name: "金澤",
    text: "工藝、庭園、雨聲與街道尺度都剛剛好，適合慢慢走，也適合慢慢想事情。",
  },
  {
    name: "嘉義",
    text: "通往山林之前的城市，有老派、溫柔，也有很好吃的日常。",
  },
  {
    name: "台南",
    text: "巷弄、廟宇、書店與時間都很厚的地方。每走一次都像翻到另一頁註腳。",
  },
  {
    name: "宜蘭",
    text: "有雨、田、山，也有可能安放自己與貓的空間。像一個還在形成中的未來想像。",
  },
];

function App() {
  return (
    <main className="site">
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#workshelf">Workshelf</a>
        <a href="#projects">Projects</a>
        <a href="#cities">Cities</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero" id="about">
        <p className="eyebrow">LOOKY KAO · 高彩雯的書房</p>

        <h1>高彩雯</h1>

        <h2>
          研究文本，翻譯日本作品，
          <br />
          走進地方，也為兩隻貓做了一個 App。
        </h2>

        <p className="lead">
          我喜歡閱讀文本，也長期走踏各地，尤其關注老新莊的地方紋理。
          多年來，我在翻譯、研究、編輯與照護經驗中，累積出整理複雜資訊的方法：
          理解細節、建立脈絡，並把它轉化為清楚、可進入、可使用的內容與工具。
          從書籍翻譯、歷史研究、地方導覽，到 SugarPaw 這類照護型 App 產品，
          我的工作和關注都圍繞著同一件事：讓複雜經驗被理解、被保存，並真正派上用場。
        </p>
      </section>

      <section className="section" id="workshelf">
        <p className="section-label">WORKSHELF</p>
        <h3>我帶回來的書與故事</h3>
        <p className="section-text">
          譯作、研究論文、展覽文本與文化內容作品。這裡之後會放上真實書封與作品圖像，
          像一面可以慢慢閱讀的書架：遠看是漂亮的書封，近看是每一本書背後的工作、時間與故事。
        </p>

        <div className="works-grid">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <div className="book-cover">
                <span>{work.title}</span>
              </div>
              <div className="work-info">
                <p className="work-meta">{work.meta}</p>
                <h4>{work.title}</h4>
                <p>{work.role}</p>
                <small>{work.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-label">PROJECTS</p>
        <h3>我正在做的事</h3>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title}>
              <p className="project-label">{project.label}</p>
              <h4>{project.title}</h4>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="cities">
        <p className="section-label">CITIES</p>
        <h3>我喜歡的地方</h3>
        <p className="section-text">
          不是旅行清單，而是塑造我觀看方式的地方。城市、街區與地方信仰，
          對我來說也是一種文本，只是它們寫在路口、河邊、廟埕和人的日常裡。
        </p>

        <div className="city-grid">
          {cities.map((city) => (
            <article className="city-card" key={city.name}>
              <h4>{city.name}</h4>
              <p>{city.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="section-label">CONTACT</p>
        <h3>聯絡方式</h3>
        <p className="section-text">
          Translation / Editing / Research / Cultural Writing / Product Design
        </p>

        <div className="contact-card">
          <p>
            如果你正在尋找日中翻譯、編輯、文化研究、地方內容，或想聊聊一個照護型產品如何從真實生活長出來，
            歡迎聯絡我。
          </p>
          <p className="signature">高彩雯 / Looky Kao</p>
        </div>
      </section>
    </main>
  );
}

export default App;
