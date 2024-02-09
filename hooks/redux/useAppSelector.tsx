import { RootState } from "@/redux-toolkit/store/store"
import { TypedUseSelectorHook, useSelector } from "react-redux";





export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;