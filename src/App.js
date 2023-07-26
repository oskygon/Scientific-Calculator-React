import Display from "./components/Display";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate,sin, cos, tan, sqrt, nthRoot, pow, log10, log, factorial,pi, e } from "mathjs";


function App() {
  const [input, setInput] = useState("0");
  const [memory, setMemory] = useState(null);
  const mostrarInput = val => {
    const operadores = "+*-/%";
    
    if (input === "0" || input === "Syntax error") {
      setInput(val);
    } else if (val === "." && (input.slice(-1) === "." || input.slice(-2).includes("."))) {
      return;
    } else if (operadores.includes(input.slice(-1)) && operadores.includes(val)) {
      setInput(input.slice(0, -1) + val);
    } else {
      setInput(input + val);
    }
  };


  const calcularResultado = () => {
    if (input) {
      try {
        let resultado = evaluate(input);
        resultado = Number.isInteger(resultado) ? resultado : resultado.toFixed(6);
        setInput(`${resultado}`);
      } catch (error) {
        setInput("Syntax error");
      }
    }
  };

  const calcularSeno = () => {
    try {
      const resultado = sin(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const calcularCoseno = () => {
    try {
      const resultado = cos(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const calcularTangente = () => {
    try {
      const resultado = tan(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const calcularLogaritmo = () => {
    try {
      const resultado = log10(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const calcularLogaritmoNatural = () => {
    try {
      const resultado = log(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const calcularFactorial = () => {
    try {
      const resultado = factorial(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };
  const numeroPi = () => {
    setInput(input + pi);
  };

  const numeroE = () => {
    setInput(input + e);
  };

  const calcularRaizCuadrada = () => {
    try {
      const resultado = sqrt(evaluate(input));
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const calcularRaizN = (n) => () => {
    try {
      const resultado = nthRoot(evaluate(input), n);
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };
  const calcularExponenteCuadrado = () => {
    try {
      const resultado = pow(evaluate(input), 2);
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };
  const guardarEnMemoria = () => {
    try {
      const resultado = evaluate(input);
      setMemory(resultado);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  const recuperarDeMemoria = () => {
    if (memory !== null) {
      setInput(String(memory));
    }
  };

  const calcularPorcentaje = () => {
    try {
      const resultado = evaluate(input)/100;
      setInput(`${resultado}`);
    } catch (error) {
      setInput("Syntax error");
    }
  };

  
 
  

  
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-10 px-5">
      <div className="container flex flex-col max-w-xs min-[70] border-solid border-red-900 border-4 p-3 rounded-xl bg-gray-700">
        <h1 className=" text-gray-100 text-2xl  m-4 text-center">Calculadora Científica</h1>
        <Display input={input} />




        <div className="flex flex-row justify-between m-3">
          <BotonClear id="clear-memory" hacerClear={() => setMemory(null)}>
            MC
          </BotonClear>
          <BotonClear id="save-to-memory" hacerClear={guardarEnMemoria}>
            MS
          </BotonClear>
          <BotonClear id="retrieve-from-memory" hacerClear={recuperarDeMemoria}>
            MR
          </BotonClear>
          <BotonClear className="border-2 border-red-900 w-10  rounded-xl  text-center  transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClear={() => setInput(input.slice(0, -1))}>Del</BotonClear>
          <BotonClear className="border-2 border-red-900 w-10  rounded-xl  text-center  transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClear={() => setInput("0")}>AC</BotonClear>
        </div>

        <div className="flex flex-row justify-between m-3">
          
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularSeno}>
            sen
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularCoseno}>
            cos
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularTangente}>
          tan
          </Boton>
          <Boton id="zero"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularLogaritmo}>
            log
          </Boton>
          
          <Boton id="zero"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularLogaritmoNatural}>
            ln
          </Boton>
        </div>
        <div className="flex flex-row justify-between m-3">
        
          
          <Boton id="power"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularExponenteCuadrado}>
            ^
          </Boton>
          <Boton id="divide"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularRaizCuadrada}>
          √
          </Boton>
          <Boton id="left-parenthesis"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularRaizN(3)}>
          ³√
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={numeroPi}>
          π
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={numeroE}>
          e
          </Boton>
        </div>

        <div className="flex flex-row justify-between m-3 ">
          <Boton  className=" border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            1
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            2
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            3
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            +
          </Boton>
          <Boton id="divide"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            /
          </Boton>
          
        </div>
        <div className="flex flex-row justify-between m-3">
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            4
          </Boton>
          <Boton id="five"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            5
          </Boton>
          <Boton id="six"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            6
          </Boton>
          <Boton id="subtract"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            -
          </Boton>
          <Boton id="multiply"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            *
          </Boton>
          
        </div>
        <div className="flex flex-row justify-between m-3">
          <Boton id="seven"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            7
          </Boton>
          <Boton id="eight"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            8
          </Boton>
          <Boton id="nine"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            9
          </Boton>
          
          <Boton id="left-parenthesis"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            (
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            )
          </Boton>
        </div>
       
        <div className="flex flex-row justify-between m-3">
        <Boton id="decimal"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularFactorial}>
            !
          </Boton>
          <Boton id="zero"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            0
          </Boton>
          <Boton id="decimal"className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={mostrarInput}>
            .
          </Boton>
          <Boton className="border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularPorcentaje}>
            %
          </Boton>
          <Boton className=" bg-red-900 border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300" hacerClic={calcularResultado}>
            =
          </Boton>
          
          
        </div>

        
          
        
        
        <div><h2 className="text-center m-3  ">React JS 2023</h2></div>
      </div>
    </div>
  );
}

export default App;

