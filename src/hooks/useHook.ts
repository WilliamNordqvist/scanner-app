import { useEffect, useState } from "react";
import { saveToDb } from "../API/api";

const idGenerator = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export type TStoreObj = {
  name: string;
  barcodes: string[];
  id: string;
};
export type APIStoreObj = {
  namn: string;
  barcodes: string;
  id: string;
};

export const useHook = () => {
  const [store, setStore] = useState<TStoreObj>();
  
  useEffect(() => {
      const localsDataS = localStorage.getItem('Scanner-app');
      if(localsDataS){
          const formatLocalS:TStoreObj = JSON.parse(localsDataS)
          setStore(formatLocalS)
      }
  },[])
  
  useEffect(() => {
    if(store){
      localStorage.setItem('Scanner-app', JSON.stringify(store))
    }
  },[store])

  const createNewProject = (title: string) => {
    if (title.trim() !== "") {
      setStore({
        name: title,
        barcodes: [],
        id: idGenerator(),
      });
    }
  };

  const deleteProject = () => {
      localStorage.removeItem('Scanner-app')
      setStore(undefined)
  }

const saveProject = () => {
  if (store) {
    const { barcodes, name, id } = store;
    const firstRow: APIStoreObj = {
      namn: name,
      barcodes: barcodes[0],
      id,
    };
    const restRows: APIStoreObj[] = barcodes.splice(1).map((i) => {
      return {
        namn: "",
        barcodes: i,
        id: "",
      };
    });

    const data: APIStoreObj[] = [firstRow, ...restRows];
    saveToDb(data);
    deleteProject();
  }
};
  

  const barCode = {
    add: (barcode: string) => {
      if (store) {
        setStore({
          ...store,
          barcodes: [...store.barcodes, barcode],
        });
      }
    },
    delete: (barcode: string) => {
      if (store) {
          const newArr = store.barcodes.filter( i => i!== barcode)
        setStore({
          ...store,
          barcodes: newArr,
        });
      }
    },
  };

  return {
    createNewProject,
    store,
    barCode,
    deleteProject,
    saveProject
  };
};
