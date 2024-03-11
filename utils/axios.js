import axios from 'axios';

const apiService = {
  // 设置基本的 API 路径，根据你的实际情况进行修改
  baseURL: 'https://192.168.10.101:3000',

  // 初始化 Axios 实例
  init() {
    axios.defaults.baseURL = this.baseURL;
  },

  // 发送 GET 请求的示例方法
  async get(endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`ApiService ${error}`);
    }
  },

  // 添加其他类型请求的方法，例如 POST、PUT、DELETE 等

  // 示例 POST 请求
  async post(endpoint, data) {
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`ApiService ${error}`);
    }
  },
};

export default apiService;
