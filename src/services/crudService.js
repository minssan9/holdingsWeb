import axios from "axios";
import {
  onUnauthorized, onForbidden, onBadRequest, onNotFound,
  BadRequest, Unauthorized, Forbidden, NotFound
} from './index'
// import authHeader from "./auth";

const crudService = {
  getByPath(route, data) {
    return axios.get(`/api/${route}` + '/' + data)
      .then(result => result)
      .catch(({response}) => {
        if (response.status === Unauthorized) return onUnauthorized()
        else if (response.status == Forbidden) return onForbidden(response)
        else if (response.status == BadRequest) return onBadRequest(response)
        else if (response.status == NotFound) return onNotFound(response)
        throw Error(response)
      });
  },
  getRequest(route) {
    return axios.get(`/api/${route}`)
      .then(result => result)
      .catch(({response}) => {
        if (response.status === Unauthorized) return onUnauthorized()
        else if (response.status == Forbidden) return onForbidden(response)
        else if (response.status == BadRequest) return onBadRequest(response)
        else if (response.status == NotFound) return onNotFound(response)
        throw Error(response)
      });
  },
  getDataByParam(route, data) {
    return axios.get(`/api/${route}` + "/params", data)
      .then(result => result)
      .catch(({response}) => {
        if (response.status === Unauthorized) return onUnauthorized()
        else if (response.status == Forbidden) return onForbidden(response)
        else if (response.status == BadRequest) return onBadRequest(response)
        else if (response.status == NotFound) return onNotFound(response)
        throw Error(response)
      });
  },
  update(route, data) {
    return axios.put(`/api/${route}`, data)
      .then(result => result)
      .catch(({response}) => {
        if (response.status === Unauthorized) return onUnauthorized()
        else if (response.status == Forbidden) return onForbidden(response)
        else if (response.status == BadRequest) return onBadRequest(response)
        else if (response.status == NotFound) return onNotFound(response)
        throw Error(response)
      });
  },
  save(route, data) {
    return axios.post(`/api/${route}`, data, {
        headers: {
          'Content-Type': 'multipart/json',
        }
      }
    )
      .then(result => result)
      .catch(({response}) => {
        if (response.status === Unauthorized) return onUnauthorized()
        else if (response.status == Forbidden) return onForbidden(response)
        else if (response.status == BadRequest) return onBadRequest(response)
        else if (response.status == NotFound) return onNotFound(response)
        throw Error(response)
      });
  },

  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append(file);
    return axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  },

  getFiles(route) {
    return axios.get(`/api/${route}/files`);
  },

  fileUpload(route, data, onUploadProgress) {
    let formData = new FormData().append("file", data);
    return axios.post(`/api/${route}/files`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Process-Data": false,
      }
    }, onUploadProgress)
      .then(result => result)
      .catch(({response}) => {
        if (response.status === Unauthorized) return onUnauthorized()
        else if (response.status == Forbidden) return onForbidden(response)
        else if (response.status == BadRequest) return onBadRequest(response)
        else if (response.status == NotFound) return onNotFound(response)
        throw Error(response)
      });
  },
  fileDown(route, data) {
    var param = {
      params: {
        folderPath: route,
        filename: data
      }
    }
    window.location.href = '/api/file?folderPath=' + route + '&filename=' + data;

    return axios.get('/api/file/', param, {responseType: "blob"});
  }
}
export default crudService;

