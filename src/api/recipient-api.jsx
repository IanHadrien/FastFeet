/* eslint-disable no-useless-catch */

import api from "../services/api"

const controller = "recipients"

const RecipientsAPI = {
  Get: async () => api.get(`${controller}`),

  GetOne: async (id) => api.get(`${controller}/${id}`),

  Create: async (recipient) => {
    try {
      const responseData = await api.post(`${controller}`, recipient)
      return responseData
    } catch (error) {
      throw error
    }
  },

  Update: async (id, recipient) => {
    try {
      await api.put(`${controller}/${id}`, recipient)
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

export default RecipientsAPI
