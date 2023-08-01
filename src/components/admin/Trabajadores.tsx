// import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { Header } from "../waiter/Header";

import {
  MainTrabajadores,
  TrabajadorPropsArray,
} from "./compBodyAdmin/MainTrabajadores";
import { NavTrabajadores } from "./compBodyAdmin/NavTrabajadores";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const trabajadores: TrabajadorPropsArray = {
  itemsTrab: [
    {
      email: "luis.garcia@burgerqueen.com",
      pasword: " ",
      role: "mesero",
      id: "1",
    },
    {
      email: "carmen.obregon@burgerqueen.com",
      pasword: " ",
      role: "mesero",
      id: "2",
    },
    {
      email: "danilo.vargas@burgerqueen.com",
      pasword: " ",
      role: "Jefe de cocina",
      id: "3",
    },
  ],
};

export const Trabajadores = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="contenedor">
        <Header role={user!.role} userName={user!.name} />
        <MainTrabajadores {...trabajadores} />
        <NavTrabajadores />
      </div>
    </>
  );
};
