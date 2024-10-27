import { Service } from "./service-reducer";

export type FETCH_SERVICE_LIST_REQUEST = {
  type: "FETCH_SERVICE_REQUEST";
};
export type FETCH_SERVICE_LIST_SUCCESS = {
  type: "FETCH_SERVICE_LIST_SUCCESS";
  payload: Service[];
};
export type FETCH_SERVICE_LIST_FAIL = {
  type: "FETCH_SERVICE_LIST_FAIL";
  payload: string;
};
export type ServiceActionType =
  | FETCH_SERVICE_LIST_REQUEST
  | FETCH_SERVICE_LIST_SUCCESS
  | FETCH_SERVICE_LIST_FAIL;

export const fetchServiceListRequest = (): FETCH_SERVICE_LIST_REQUEST => ({
  type: "FETCH_SERVICE_REQUEST",
});

export const fetchServiceListSuccess = (
  payload: Service[],
): FETCH_SERVICE_LIST_SUCCESS => ({
  type: "FETCH_SERVICE_LIST_SUCCESS",
  payload: payload,
});

export const fetchServiceListFailed = (
  error: string,
): FETCH_SERVICE_LIST_FAIL => ({
  type: "FETCH_SERVICE_LIST_FAIL",
  payload: error,
});
