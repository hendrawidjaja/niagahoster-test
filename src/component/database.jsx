import React from "react";
import databaseJSON from "../json/database.json";
import svgHostingPHP from "../assets/svg/icon_PHP_Hosting_PHP_Semua_Versi.svg";
import svgMySQL from "../assets/svg/icon_PHP_Hosting_My_SQL.svg";
import svgCPanel from "../assets/svg/icon_PHP_Hosting_CPanel.svg";
import svgUptime from "../assets/svg/icon_PHP_Hosting_garansi uptime.svg";
import svgInnoDB from "../assets/svg/icon_PHP_Hosting_InnoDB.svg";
import svgMySQLRemote from "../assets/svg/icon PHP_Hosting_My_SQL_remote.svg";

const database = databaseJSON.block;

const retunSVG = (svgName) => {
  switch (svgName) {
    case "svgHostingPHP": {
      return svgHostingPHP;
    }
    case "svgMySQL": {
      return svgMySQL;
    }
    case "svgCPanel": {
      return svgCPanel;
    }
    case "svgUptime": {
      return svgUptime;
    }
    case "svgInnoDB": {
      return svgInnoDB;
    }
    case "svgMySQLRemote": {
      return svgMySQLRemote;
    }
    default:
      break;
  }
};

const RenderDatabase = () => {
  return (
    <>
      <div className="database__row">
        <div className="database__container">
          <h4>Semua Paket Hosting Sudah Termasuk</h4>
        </div>
      </div>

      <div className="database__row">
        <div className="database__container">
          {database.map((value, index) => {
            return (
              <div key={index} className="database__wrapper">
                {value.icon && (
                  <img src={retunSVG(value.icon)} alt={value.icon} />
                )}
                {value.title && <p className="bold__font">{value.title}</p>}
                {value.teaser && <p>{value.teaser}</p>}
                {value.text && <p>{value.text}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RenderDatabase;
