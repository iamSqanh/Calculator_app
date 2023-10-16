import React, {useState} from "react";
import Header from "./Header";
import ItemNumber from "./ItemNumber";

function Calculator() {
  const[result, setResult] = useState("")

  console.log(typeof result)

  const handleClick = (value) => {
    setResult(result.concat(value))
  }

  const handleClear = () => {
    setResult('')
  }

  const handleBackSpace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const handlePercent = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result / 100).toString())
    } catch (error) {
      console.log(error)
    }
  }

  const handleCalculate = () => {
    try {
      //eval tính toán biểu thức toán học sau khi tính toán xong kq chuyển đổi thành string
      // eslint-disable-next-line no-eval 
      setResult(eval(result).toString())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="shadow-lg shadow-indigo-500/40 rounded-[8px] overflow-hidden" >
      <Header result={result} />
      <div className="w-[320px] h-full grid grid-cols-[240px,80px] gap-[1px] ">
        <div className=" h-[400px] grid grid-cols-3 gap-[1px]">
          <ItemNumber onClick={handleClear} value={"C"}  />
          <ItemNumber onClick={handleBackSpace} value={"<--"}  />
          <ItemNumber onClick={handlePercent} value={"%"}  />
          <ItemNumber onClick={handleClick} value={7} />
          <ItemNumber onClick={handleClick} value={8} />
          <ItemNumber onClick={handleClick} value={9} />
          <ItemNumber onClick={handleClick} value={4} />
          <ItemNumber onClick={handleClick} value={5} />
          <ItemNumber onClick={handleClick} value={6} />
          <ItemNumber onClick={handleClick} value={3} />
          <ItemNumber onClick={handleClick} value={2} />
          <ItemNumber onClick={handleClick} value={1} />
          <ItemNumber onClick={handleClick} value={0} />
          <ItemNumber onClick={handleClick} value={"."} />
          <ItemNumber onClick={handleClick} value={","} />
        </div>
        <div className=" grid grid-cols-1 gap-[1px]">
          <ItemNumber onClick={handleClick} value={'/'} />
          <ItemNumber onClick={handleClick} value={'*'} />
          <ItemNumber onClick={handleClick} value={'-'} />
          <ItemNumber onClick={handleClick} value={'+'} />
          <ItemNumber onClick={handleCalculate} value={'='} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
