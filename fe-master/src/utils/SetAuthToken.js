import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import axios from "axios";

  const AuthContext = createContext();
