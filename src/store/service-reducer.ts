import { ServiceActionType } from "./service-actions";

export type Service = {
  id: number;
  title: string;
  description1: string;
  description2: string;
  icon: string;
  photo: string;
  service_order: number;
};

type State = {
  loading: boolean;
  services: Service[];
  error: string | undefined;
};

const INITIAL_STATE: State = {
  loading: false,
  services: [],
  error: undefined,
};

export default function serviceReduecr(
  state = INITIAL_STATE,
  action: ServiceActionType,
) {
  switch (action.type) {
    case "FETCH_SERVICE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SERVICE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    case "FETCH_SERVICE_LIST_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
