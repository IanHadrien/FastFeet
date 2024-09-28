/* eslint-disable no-useless-catch */

import api from "../services/api"

const controller = "orders"

const OrdersAPI = {
  Get: async () => api.get(`${controller}`),

  GetOrderPedding: async (idUser) => api.get(`${controller}/user/${idUser}/pending`),

  GetOrderCompleted: async (idUser) => api.get(`${controller}/user/${idUser}/completed`),

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

  MarkDeliverOrder: async (id) => {
    try {
      await api.put(`${controller}/${id}/deliver`)
    } catch (error) {
      throw error
    }
  },

  MarkPickupOrder: async (id) => {
    try {
      await api.put(`${controller}/${id}/pickup`)
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

export default OrdersAPI
