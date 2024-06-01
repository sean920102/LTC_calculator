import React, { useState, createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontAwesome";
import { LTCTypeProvider, useLTCType } from "./context/LTCTypeContent";
import "./components/Dropdowns";
import BottomUpDialog from "./components/BottomUpDialog";
import LTCData, { LTCMeun, Levels } from "./LTCData/Data";
import Meun from "./components/Menu";
const title = "薇慈的長照計算機";

const Header: React.FC = () => {
  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-current">{title}</h1>
      </div>
    </header>
  );
};
interface BlockProps {
  id: string;
  onClick: (id: string) => void;
  children: React.ReactNode;
}
const Block: React.FC<BlockProps> = ({ id, onClick, children }) => (
  <div
    className="shadow-md rounded-lg bg-primary h-20 cursor-pointer"
    onClick={() => onClick(id)}
  >
    {children}
  </div>
);
const Identity: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { level, burden, limit } = useLTCType();
  return (
    <section className="mb-8">
      <div className="max-w-screen shadow-md rounded-lg min-h-20 bg-primary">
        <div className="flex p-2">
          <Meun data={Levels} />
          <div className="grow text-center text-2xl">{burden}</div>
          <div className="grow text-center text-2xl">{limit}</div>
        </div>
      </div>
    </section>
  );
};
interface CenteredTextProps {
  children: React.ReactNode;
}

const CenteredText: React.FC<CenteredTextProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">{children}</div>
    </div>
  );
};

interface GridSectionProps {
  children: React.ReactNode[];
}

const GridSection: React.FC<GridSectionProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {children.map((child, index) => (
          <div key={index} className="w-1/3 px-4 mb-4">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

const Main: React.FC = () => {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const handleBlockClick = (id: string) => {
    setOpenDialogId(id);
  };

  const handleCloseDialog = () => {
    setOpenDialogId(null);
  };

  return (
    <main className="flex-grow mt-4 mb-16 p-4 overflow-y-auto rounded-lg min-h-screen">
      <Identity></Identity>
      <section className="mt-5">
        <div className="max-w-screen min-h-20">
          <GridSection>
            {LTCMeun.map((data) => (
              <div key={data.key} className="">
                <Block id={data.key} onClick={handleBlockClick}>
                  <CenteredText>
                    <FontAwesomeIcon
                      icon={data.icon}
                      size="2x"
                      className={data.color}
                    />
                    <br />
                    <p>{data.name}</p>
                  </CenteredText>
                </Block>
                <BottomUpDialog
                  isOpen={openDialogId === data.key}
                  onClose={() => handleCloseDialog()}
                  title={data.name}
                  dataId={data.key}
                />
              </div>
            ))}
          </GridSection>
        </div>
      </section>
      {/* <section className="mt-5">
        <div className="max-w-screen min-h-20">
          <div className="shadow-md rounded-lg bg-primary h-40"></div>
        </div>
      </section> */}
    </main>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-primary shadow-md z-10 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center space-x-4">
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          size="2x"
          className="text-blue-600"
        />
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          size="2x"
          className="text-blue-400"
        />
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          size="2x"
          className="text-pink-600"
        />
        <p className="text-gray-700 text-center">
          &copy; 2024 My Mobile Homepage. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <LTCTypeProvider>
      <div className="container bg-primary mx-auto h-screen w-screen">
        <div className="flex flex-col">
          <Header></Header>
          <div className="bg-gray-200 rounded-t-3xl">
            <Main></Main>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </LTCTypeProvider>
  );
};

export default App;
