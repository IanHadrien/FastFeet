/* eslint-disable no-useless-catch */

import api from "../services/api"

const controller = "users"

const UsersAPI = {
  Get: async () => api.get(`${controller}`),

  GetOne: async (id) => api.get(`${controller}/${id}`),

  Login: async (user) => {
    try {
      console.log("USer", user)
      const responseData = await api.post(`sessions`, user)
      return responseData
    } catch (error) {
      throw error
    }
  },

  Create: async (user) => {
    try {
      const responseData = await api.post(`${controller}`, user)
      return responseData
    } catch (error) {
      throw error
    }
  },

  Update: async (id, user) => {
    try {
      await api.put(`${controller}/${id}`, user)
    } catch (error) {
      throw error
    }
  },

  Delete: async (id) => {
    try {
      await api.delete(`${controller}/${id}`)
    } catch (error) {
      throw error
    }
  }
}

export default UsersAPI
