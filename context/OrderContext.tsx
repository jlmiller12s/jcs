"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react";
import { Mood, Bundle } from "@/lib/data";

export type Step =
  | "landing"
  | "mood"
  | "recommend"
  | "customize"
  | "summary"
  | "confirm";

export interface Customizations {
  spice: string;
  side: string;
  drink: string;
  sauces: string[];
  dessert: string;
}

interface OrderState {
  currentStep: Step;
  selectedMood: Mood | null;
  selectedBundle: Bundle | null;
  customizations: Customizations;
  orderId: string | null;
}

type Action =
  | { type: "GO_TO_STEP"; step: Step }
  | { type: "SET_MOOD"; mood: Mood }
  | { type: "SET_BUNDLE"; bundle: Bundle }
  | { type: "SET_CUSTOMIZATIONS"; customizations: Customizations }
  | { type: "PLACE_ORDER" }
  | { type: "RESET" };

const defaultCustomizations: Customizations = {
  spice: "Medium",
  side: "Seasoned Fries",
  drink: "Fountain Drink",
  sauces: ["House Sauce"],
  dessert: "None",
};

const initialState: OrderState = {
  currentStep: "landing",
  selectedMood: null,
  selectedBundle: null,
  customizations: defaultCustomizations,
  orderId: null,
};

function orderReducer(state: OrderState, action: Action): OrderState {
  switch (action.type) {
    case "GO_TO_STEP":
      return { ...state, currentStep: action.step };
    case "SET_MOOD":
      return { ...state, selectedMood: action.mood, currentStep: "recommend" };
    case "SET_BUNDLE":
      return {
        ...state,
        selectedBundle: action.bundle,
        currentStep: "customize",
        customizations: defaultCustomizations,
      };
    case "SET_CUSTOMIZATIONS":
      return {
        ...state,
        customizations: action.customizations,
        currentStep: "summary",
      };
    case "PLACE_ORDER":
      return {
        ...state,
        currentStep: "confirm",
        orderId: `JCS${Math.floor(1000 + Math.random() * 9000)}`,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface OrderContextValue {
  state: OrderState;
  dispatch: React.Dispatch<Action>;
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}
