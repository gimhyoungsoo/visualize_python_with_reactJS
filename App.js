//pyscript를 나중에 불러와서 처음 접속 할때 로딩을 줄이고 pyscript를 사용할때 불러오면 어떨까...
import { useEffect, useState } from "react";

/**행렬 등 수식 계산이 하고 싶으면 numpy, 그래프를 보고 싶으면 matplotlib로 안내 할 수 있게 numpy 버튼에는 수식이나 행렬그림을, matplotlib에는 그래프 그림을 넣습니다. */
function App() {
  const [view, setView] = useState("lobby");

  /**view의 값에 따라 화면에 컴포넌트를 보여줍니다. */
  const renderComponent = () => {
    let result;
    if (view === "lobby") {
      result = <Lobby />;
    }
    if (view === "numpy") {
      result = <Component_numpy />;
    }
    if (view === "matplotlib") {
      result = <Component_matplotlib />;
    }
    return result;
  };

  function Lobby() {
    return (
      <div>
        <form action="">
          <button
            onClick={() => {
              setView("numpy");
            }}
          >
            numpy
          </button>
          <button
            onClick={() => {
              setView("matplotlib");
            }}
          >
            matplotlib
          </button>
        </form>
      </div>
    );
  }

  function Component_numpy() {
    return (
      <div>
        <ToLobby />
        <h2>numpy</h2>
      </div>
    );
  }

  /**각 버튼에 mouseOver시 desc를 띄움 */
  function Component_matplotlib() {
    const histogram = {
      name: "히스토그램",
      img: "히스토그램 이미지 경로",
      desc: "히스토그램은 표로 되어 있는 도수 분포를 정보 그림으로 나타낸 것이다. 더 간단하게 말하면, 도수분포표를 그래프로 나타낸 것이다. 보통 히스토그램에서는 가로축이 계급, 세로축이 도수를 뜻하는데, 때때로 반대로 그리기도 한다. 계급은 보통 변수의 구간이고, 서로 겹치지 않는다.",
    };
    const barGraph = {
      name: "막대그래프",
      img: "막대그래프 이미지 경로",
      desc: "막대 그래프, 바 차트, 바 그래프는 표현 값에 비례하여 높이와 길이를 지닌 직사각형 막대로 범주형 데이터를 표현하는 차트나 그래프를 말한다. 막대는 수직으로나 수평으로 그릴 수 있다.",
    };
    const lineGraph = {
      name: "선 그래프",
      img: "선 그래프 이미지 경로",
      desc: "선 그래프는 어떤 그래프의 변들을 꼭짓점으로 삼고, 원래 그래프의 변의 인접 여부를 변으로 삼는 그래프이다. 끝을 선으로 연결한 그래프는 꺾은선 그래프라고 한다.",
    };

    return (
      <div>
        <ToLobby />
        <h2>matplotlib</h2>
        <ShowKindOfGraph
          name={histogram.name}
          img={histogram.img}
          // desc={histogram.desc}
        />
        <ShowKindOfGraph
          name={barGraph.name}
          img={barGraph.img}
          // desc={barGraph.desc}
        />
        <ShowKindOfGraph
          name={lineGraph.name}
          img={lineGraph.img}
          // desc={lineGraph.desc}
        />
      </div>
    );
  }

  function ToLobby() {
    function move() {
      setView("lobby");
    }
    return (
      <div>
        <button onClick={move}>돌아가기</button>
      </div>
    );
  }

  /** matplotlib 컴포넌트에서 종류 별 그래프 표시합니다
   * @description 히스토그램, 막대 그래프, 꺾은선 그래프, 산포도 그래프
   */
  function ShowKindOfGraph({ name, img, desc }) {
    return (
      <div>
        <h3>{name}</h3>
        <p>{img}</p> <p>{desc}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>pyreact!</h2>
      {renderComponent()}
    </div>
  );
}

export default App;
