// 🔹 Componente base
import viteLogo from "/assets/svg/vitelogo.svg";
import reactLogo from "/assets/svg/reactlogo.svg";
import tailwindLogo from "/assets/svg/tailwindlogo.svg";
import pyLogo from "/assets/svg/pylogo.svg";
import jsLogo from "/assets/svg/jslogo.svg";
import html5Logo from "/assets/svg/html5logo.svg";
import cssLogo from "/assets/svg/csslogo.svg";
import threejsLogo from "/assets/svg/threejslogo.svg";
import bootstrapLogo from "/assets/svg/bootstraplogo.svg";
import sqlLogo from "/assets/svg/sqllogo.svg";
import sqlliteLogo from "/assets/svg/sqlitelogo.svg";
import mysqlworkbenchLogo from "/assets/svg/mysqlworkbenchlogo.svg";
import linuxLogo from "/assets/svg/linuxlogo.svg";
import windowsLogo from "/assets/svg/windows95logo.svg";
import mongodbLogo from "/assets/svg/mongodblogo.svg";
import powerbiLogo from "/assets/svg/powerbilogo.svg";
import excelLogo from "/assets/svg/excellogo.svg";
import knimeLogo from "/assets/svg/knimelogo.svg";

// 🔹 Componente Icon con soporte para tamaño
function Icon({ src, label, size = "w-7 h-7 md:w-16 md:h-16", labelStyle= "my-1 text-[0.6rem] md:text-[1rem]  font-semibold" }) {
  return (
    <div className="flex flex-col items-center text-white/99 hover:text-cyan-500 transition duration-300">
      <a  target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={`${label} logo`}
          className={`p-2 ${size} rounded-full bg-gray-100/30 hover:bg-cyan-500/50 hover:scale-110 transition duration-300`}
        />
      </a>
      <span className={labelStyle}>{label}</span>
    </div>
  );
}

// 🔹 JS STACK
export const JavascriptIcon = () => <Icon src={jsLogo} label="JavaScript" link="" />;
export const Html5Icon = () => <Icon src={html5Logo} label="HTML5" link="L"  />;
export const CssIcon = () => <Icon src={cssLogo} label="CSS" link=""  />;

export const ViteIcon = () => <Icon src={viteLogo} label="Vite" link="" />;
export const ReactIcon = () => <Icon src={reactLogo} label="React" link=""  />;
export const TailwindIcon = () => <Icon src={tailwindLogo} label="Tailwind" link="" />;
export const BootstrapIcon = () => <Icon src={bootstrapLogo} label="Bootstrap" link=""  />;
export const ThreejsIcon = () => <Icon src={threejsLogo} label="ThreeJS" link="" />;

// 🔹 PY STACK
export const PythonIcon = () => <Icon src={pyLogo} label="Python" link="" />;

// 🔹 SO
export const LinuxIcon = () => <Icon src={linuxLogo} label="Linux" link=""  />;
export const Windows95Icon = () => <Icon src={windowsLogo} label="Windows" link="" />;

// 🔹 DATABASES
export const SqlIcon = () => <Icon src={sqlLogo} label="SQL" link=""/>;
export const SqliteIcon = () => <Icon src={sqlliteLogo} label="SQL lite" link=""  />;
export const WorkbenchIcon = () => <Icon src={mysqlworkbenchLogo} label="Workbench" link="" />;
export const MongodbIcon = () => <Icon src={mongodbLogo} label="MongoDB" link="" />;

export const PowerbiIcon = () => <Icon src={powerbiLogo} label="PowerBI" link=""/>;
export const ExcelIcon = () => <Icon src={excelLogo} label="Excel" link=""  />;
export const KnimeLogo = () => <Icon src={knimeLogo} label="Knime" link=""  />;
