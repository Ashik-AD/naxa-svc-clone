import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchServiceListSuccess,
  fetchServiceListFailed,
  ServiceActionType,
} from "./service-actions";
import { Service } from "./service-reducer";

async function fetchServices(): Promise<Service[]> {
  let res = await fetch("https://admin.naxa.com.np/api/services");
  let data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }
  return data;
}

function* fetchServiceListSaga(): Generator<any, any, Service[]> {
  try {
    const res = yield call(fetchServices);
    yield put(fetchServiceListSuccess(res));
  } catch (error: any) {
    yield put(fetchServiceListFailed(error.message));
  }
}
function* watchFetchServiceList() {
  yield takeLatest<ServiceActionType["type"]>(
    "FETCH_SERVICE_REQUEST",
    fetchServiceListSaga,
  );
}

export default watchFetchServiceList;
