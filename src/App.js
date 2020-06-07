import React from "react";
import "./App.scss";
import RenderNav from "./component/nav";
import RenderTeaser from "./component/teaser";
import RenderProducts from "./component/products";
import RenderTech from "./component/tech";
import RenderDatabase from "./component/database";
import RenderFramework from "./component/framework";
import RenderModule from "./component/modules";
import RenderSupport from "./component/support";
import RenderShare from "./component/share";
import RenderFooter from "./component/footer";

function App() {
  return (
    <div className="App">
      <div className="content__nav">
        <RenderNav />
      </div>
      <div className="content__teaser">
        <RenderTeaser />
      </div>
      <div className="content__products">
        <RenderProducts />
      </div>
      <div className="content__tech">
        <RenderTech />
      </div>
      <div className="content__database">
        <RenderDatabase />
      </div>
      <div className="container__framework">
        <RenderFramework />
      </div>
      <div className="content__modules">
        <RenderModule />
      </div>
      <div className="content__support">
        <RenderSupport />
      </div>
      <RenderShare />
      <RenderFooter />
    </div>
  );
}

export default App;
