// 🔹 Componente base
import viteLogo from "../assets/svg/vitelogo.svg";
import reactLogo from "../assets/svg/reactlogo.svg";
import tailwindLogo from "../assets/svg/tailwindlogo.svg";
import pyLogo from "../assets/svg/pylogo.svg";
import jsLogo from "../assets/svg/jslogo.svg";
import html5Logo from "../assets/svg/html5logo.svg";
import cssLogo from "../assets/svg/csslogo.svg";
import threejsLogo from "../assets/svg/threejslogo.svg";
import bootstrapLogo from "../assets/svg/bootstraplogo.svg";
import sqlLogo from "../assets/svg/sqllogo.svg";
import sqlliteLogo from "../assets/svg/sqlitelogo.svg";
import mysqlworkbenchLogo from "../assets/svg/mysqlworkbenchlogo.svg";
import linuxLogo from "../assets/svg/linuxlogo.svg";
import windowsLogo from "../assets/svg/windows95logo.svg";
import mongodbLogo from "../assets/svg/mongodblogo.svg";
import powerbiLogo from "../assets/svg/powerbilogo.svg";
import excelLogo from "../assets/svg/excellogo.svg";
import knimeLogo from "../assets/svg/knimelogo.svg";

// 🔹 Componente Icon con soporte para tamaño
function Icon({ src, label, link, size = "w-16 h-16", labelStyle= "my-1 text-[1rem] font-semibold" }) {
  return (
    <div className="flex flex-col items-center text-white/99 hover:text-cyan-500 transition duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={`${label} logo`}
          className={`p-2 ${size} rounded-full bg-gray-100 hover:bg-cyan-500/50 hover:scale-110 transition duration-300`}
        />
      </a>
      <span className={labelStyle}>{label}</span>
    </div>
  );
}

// 🔹 JS STACK
export const JavascriptIcon = () => <Icon src={jsLogo} label="JAVASCRIPT" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />;
export const Html5Icon = () => <Icon src={html5Logo} label="HTML5" link="https://developer.mozilla.org/en-US/docs/Web/HTML"  />;
export const CssIcon = () => <Icon src={cssLogo} label="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS"  />;

export const ViteIcon = () => <Icon src={viteLogo} label="VITE" link="https://vite.dev" size="w-12 h-12" />;
export const ReactIcon = () => <Icon src={reactLogo} label="REACT" link="https://react.dev" size="w-12 h-12" />;
export const TailwindIcon = () => <Icon src={tailwindLogo} label="TAILWIND" link="https://tailwindcss.com"  size="w-12 h-12"/>;
export const BootstrapIcon = () => <Icon src={bootstrapLogo} label="BOOTSTRAP" link="https://getbootstrap.com" size="w-12 h-12"  />;
export const ThreejsIcon = () => <Icon src={threejsLogo} label="THREEJS" link="https://threejs.org" size="w-12 h-12" />;

// 🔹 PY STACK
export const PythonIcon = () => <Icon src={pyLogo} label="PYTHON" link="https://www.python.org" />;

// 🔹 SO
export const LinuxIcon = () => <Icon src={linuxLogo} label="LINUX" link=""  />;
export const Windows95Icon = () => <Icon src={windowsLogo} label="WINDOWS" link="" />;

// 🔹 DATABASES
export const SqlIcon = () => <Icon src={sqlLogo} label="SQL" link="https://www.mysql.com"/>;
export const SqliteIcon = () => <Icon src={sqlliteLogo} label="SQLITE" link="https://www.sqlite.org"  />;
export const WorkbenchIcon = () => <Icon src={mysqlworkbenchLogo} label="WORKBENCH" link="https://www.mysql.com/products/workbench/" />;
export const MongodbIcon = () => <Icon src={mongodbLogo} label="MONGODB" link="" />;

export const PowerbiIcon = () => <Icon src={powerbiLogo} label="POWERBI" link=""/>;
export const ExcelIcon = () => <Icon src={excelLogo} label="EXCEL" link=""  />;
export const KnimeLogo = () => <Icon src={knimeLogo} label="KNIME" link=""  />;
